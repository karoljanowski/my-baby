'use server';

import { prisma } from "@/lib/prisma";
import { deleteImageFromBlob, uploadImageToBlob } from "./images";
import { revalidatePath } from "next/cache";
import { verifySession } from "./session";

export const getDiaryById = async (id: string) => {
    const userId = await verifySession();

    if (!userId) {
        return { diary: null, error: { message: "Błąd! Musisz być zalogowany!" } };
    }

    const diary = await prisma.diary.findUnique({
        where: { id, userId },
        include: {
            entries: {
                include: {
                    files: true,
                },
            },
        },
    });

    return { diary, error: null };
};

export const saveEntry = async (data: { text: string, diaryId: string, entryKey: string }) => {
    const userId = await verifySession();

    if (!userId) {
        return { error: true };
    }

    const { text, diaryId, entryKey } = data;

    if (!diaryId || !entryKey) {
        return { error: true };
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
        return { error: true };
    }
};

export const saveEntryImages = async (data: { images: File[], diaryId: string, entryKey: string }) => {
    const userId = await verifySession();

    if (!userId) {
        return { error: true };
    }

    const { images, diaryId, entryKey } = data;

    if (!diaryId || !entryKey || !images) {
        return { error: true };
    }

    try {
        const diaryEntry = await prisma.diaryEntry.findUnique({
            where: { diaryId_entryKey: { diaryId, entryKey } },
        });

        if (!diaryEntry) {
            return { error: true };
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
        return { error: true };
    }
}

export const deleteEntryImage = async (id: string, diaryId: string) => {
    const userId = await verifySession();

    if (!userId) {
        return { error: true };
    }

    if (!id) {
        return { error: true };
    }

    try {
        await deleteImageFromBlob(id);
        await prisma.diaryEntryFile.delete({
            where: { id },
        });

        revalidatePath(`/dziennik/${diaryId}`);

        return { success: true };
    } catch (error) {
        return { error: true };
    }
}