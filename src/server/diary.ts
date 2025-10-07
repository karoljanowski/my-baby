'use server';

import { prisma } from "@/lib/prisma";
import { deleteImageFromBlob, uploadImageToBlob } from "./images";
import { revalidatePath } from "next/cache";

export const getDiaryById = async (id: string) => {
    const diary = await prisma.diary.findUnique({
        where: { id },
        include: {
            entries: {
                include: {
                    files: true,
                },
            },
        },
    });
    return diary;
};

export const saveEntry = async (data: { text: string, diaryId: string, entryKey: string }) => {
    const { text, diaryId, entryKey } = data;

    if (!diaryId || !entryKey) {
        return { error: { message: "Błąd podczas zapisywania wpisów" } };
    }

    try {
        await prisma.diaryEntry.upsert({
            where: { diaryId_entryKey: { diaryId, entryKey } },
            update: { text },
            create: { text, diaryId, entryKey },
        });

        revalidatePath(`/dziennik/${diaryId}`);
        
        return { success: true };
    } catch (error) {
        return { error: { message: "Błąd podczas zapisywania wpisów" } };
    }
};

export const saveEntryImages = async (data: { images: File[], diaryId: string, entryKey: string }) => {
    const { images, diaryId, entryKey } = data;

    if (!diaryId || !entryKey || !images) {
        return { error: { message: "Błąd podczas zapisywania zdjęć" } };
    }

    try {
        const diaryEntry = await prisma.diaryEntry.findUnique({
            where: { diaryId_entryKey: { diaryId, entryKey } },
        });

        if (!diaryEntry) {
            return { error: { message: "Błąd podczas zapisywania zdjęć" } };
        }

        const imagesUrls = await Promise.all(images.map(async (image) => {
            return await uploadImageToBlob(image);
        }));

        await prisma.diaryEntryFile.createMany({
            data: imagesUrls.map((url) => ({ url, diaryEntryId: diaryEntry.id })),
        });

        revalidatePath(`/dziennik/${diaryId}`);

        return { success: true };
    } catch (error) {
        return { error: { message: "Błąd podczas zapisywania zdjęć" } };
    }
}

export const deleteEntryImage = async (id: string, diaryId: string) => {
    if (!id) {
        return { error: { message: "Błąd podczas usuwania zdjęcia" } };
    }

    try {
        await deleteImageFromBlob(id);
        await prisma.diaryEntryFile.delete({
            where: { id },
        });

        revalidatePath(`/dziennik/${diaryId}`);

        return { success: true };
    } catch (error) {
        return { error: { message: "Błąd podczas usuwania zdjęcia" } };
    }
}