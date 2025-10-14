import { verifySession } from "@/server/session";
import { NextRequest, NextResponse } from "next/server";
import { renderToStream } from '@react-pdf/renderer'
import { createElement } from "react";
import { getDiaryById } from "@/server/diary";
import PdfDiary from "@/components/PdfDiary/PdfDiary";
import { readFileSync } from "fs";
import { join } from "path";
import { data } from "@/lib/questions";
import { EntryWithQuestionTitle } from "@/lib/types";

function getImageDataUrl(relativePath: string): string {
    try {
        const fullPath = join(process.cwd(), 'public', relativePath);
        const imageBuffer = readFileSync(fullPath);
        const base64 = imageBuffer.toString('base64');
        const ext = relativePath.split('.').pop()?.toLowerCase();
        const mimeType = ext === 'png' ? 'image/png' : 'image/jpeg';
        return `data:${mimeType};base64,${base64}`;
    } catch (error) {
        console.error('Failed to load image:', relativePath, error);
        return '';
    }
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const userId = await verifySession();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const { id } = await params;
    const diaryResult = await getDiaryById(id);

    if (diaryResult.error) {
        return new NextResponse(diaryResult.error.message, { status: 400 });
    }

    if (!diaryResult.diary) {
        return new NextResponse("Dziennik nie został znaleziony", { status: 404 });
    }

    let chapterNumber = 0;
    const categories: { chapterNumber: number, categoryTitle: string, categoryIcon: string, questions: EntryWithQuestionTitle[] }[] = [];
    data.forEach(category => {
        const hasAnswers = category.questions.some(question => {
            const entry = diaryResult.diary?.entries.find(entry => entry.entryKey === question.question_key);
            return entry
        });

        if (!hasAnswers) return;

        const questions: EntryWithQuestionTitle[] = category.questions
            .map(question => {
                const entry = diaryResult.diary?.entries.find(entry => entry.entryKey === question.question_key);
                if (!entry) return null;
                
                return {
                    question_title: question.question_title,
                    ...entry,
                };
            })
            .filter((entry): entry is EntryWithQuestionTitle => entry !== null);

        chapterNumber++;

        const iconFileName = category.category_icon.replace('/', '').replace('.svg', '.png');
        const iconDataUrl = getImageDataUrl(`custom_icons/${iconFileName}`);

        categories.push({
            chapterNumber,
            categoryTitle: category.category_title,
            categoryIcon: iconDataUrl,
            questions,
        });
    });

    const decorations = {
        flower1: getImageDataUrl('decoration/flower1.png'),
        flower2: getImageDataUrl('decoration/flower2.png'),
        flower3: getImageDataUrl('decoration/flower3.png'),
    };

    const stream = await renderToStream(
        // @ts-expect-error - renderToStream typing issue with wrapped Document component
        createElement(PdfDiary, { diary: diaryResult.diary, decorations: decorations, categories: categories })
    );

    return new NextResponse(stream as unknown as BodyInit, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="dziennik.pdf"',
        },
    });

}