'use server';

import { prisma } from "@/lib/prisma";
import { deleteImagesFromBlob, uploadImageToBlob } from "./images";
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
        return { success: false, message: 'Musisz być zalogowany' };
    }

    const { text, diaryId, entryKey } = data;

    if (!diaryId || !entryKey) {
        return { success: false, message: 'Nieprawidłowe dane' };
    }

    try {
        await prisma.diaryEntry.upsert({
            where: { diaryId_entryKey: { diaryId, entryKey } },
            update: { text },
            create: { text, diaryId, entryKey },
        });

        revalidatePath(`/dziennik/${diaryId}`);
        
        return { success: true };
    } catch {
        return { success: false, message: 'Błąd podczas zapisywania wpisu' };
    }
};

export const saveEntryImages = async (data: { images: File[], diaryId: string, entryKey: string }) => {
    const userId = await verifySession();

    if (!userId) {
        return { success: false, message: 'Musisz być zalogowany' };
    }

    const { images, diaryId, entryKey } = data;

    if (!diaryId || !entryKey || !images) {
        return { success: false, message: 'Nieprawidłowe dane' };
    }

    const MAX_FILE_SIZE = 4 * 1024 * 1024;
    const MAX_TOTAL_SIZE = 10 * 1024 * 1024;

    const oversizedFile = images.find(file => file.size > MAX_FILE_SIZE);
    if (oversizedFile) {
        return { 
            success: false, 
            message: `Maksymalny rozmiar pojedynczego pliku to 4MB.` 
        };
    }

    const totalSize = images.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
        return { 
            success: false, 
            message: `Całkowity rozmiar plików przekracza limit 10MB.` 
        };
    }

    try {
        const diaryEntry = await prisma.diaryEntry.upsert({
            where: { diaryId_entryKey: { diaryId, entryKey } },
            update: {},
            create: { text: '', diaryId, entryKey },
        });

        const imagesUrls = await Promise.all(images.map(async (image) => {
            return await uploadImageToBlob(image);
        }));

        await prisma.diaryEntryFile.createMany({
            data: imagesUrls.map((url) => ({ url, diaryEntryId: diaryEntry.id })),
        });

        const updatedFiles = await prisma.diaryEntryFile.findMany({
            where: { diaryEntryId: diaryEntry.id },
        });

        revalidatePath(`/dziennik/${diaryId}`);

        return { success: true, files: updatedFiles };
    } catch {
        return { success: false, message: 'Błąd podczas przesyłania zdjęć' };
    }
}

export const deleteEntryImage = async (id: string, diaryId: string) => {
    const userId = await verifySession();

    if (!userId) {
        return { success: false, message: 'Musisz być zalogowany' };
    }

    if (!id) {
        return { success: false, message: 'Nieprawidłowe dane' };
    }

    try {
        const deletedImage = await prisma.diaryEntryFile.delete({
            where: { id },
            select: {
                url: true,
                diaryEntryId: true,
            }
        });
        
        await deleteImagesFromBlob(deletedImage.url);

        const updatedFiles = await prisma.diaryEntryFile.findMany({
            where: { diaryEntryId: deletedImage.diaryEntryId },
        });
        
        revalidatePath(`/dziennik/${diaryId}`);

        return { success: true, files: updatedFiles };
    } catch {
        return { success: false, message: 'Błąd podczas usuwania zdjęcia' };
    }
}