'use server';

import {prisma} from "@/lib/prisma";
import type { CreateDiaryActionState } from "@/lib/types";
import { verifySession } from "./session";
import { deleteImagesFromBlob } from "./images";

export const getDiariesByUserId = async () => {
    const userId = await verifySession();

    if (!userId) {
        return { diaries: [], error: { message: "Błąd! Musisz być zalogowany!" } };
    }

    const diaries = await prisma.diary.findMany({
        where: {
            userId: userId,
        },
    });

    return { diaries, error: null };
};

export const createDiary = async (prevState: CreateDiaryActionState, formData: FormData): Promise<CreateDiaryActionState> => {
    const userId = await verifySession();

    if (!userId) {
        return { success: false, error: { message: "Błąd! Musisz być zalogowany!" }, formData: { name: formData.get("name") as string } };
    }

    const name = formData.get("name") as string;
    
    if (!name) {
        return { success: false, error: { message: "Nazwa dziennika jest wymagana" }, formData: { name } };
    }

    try {        
        await prisma.diary.create({
            data: {
                name: name,
                userId: userId,
            },
        });

        return {success: true};
    } catch {
        return { error: { message: "Wystąpił błąd podczas tworzenia nowego dziennika" }, formData: { name } };
    }
};

export const deleteDiary = async (id: string) => {
    const userId = await verifySession();

    if (!userId) {
        return { error: { message: "Błąd! Musisz być zalogowany!" } };
    }

    if (!id) {
        return { error: { message: "Wystąpił błąd podczas usuwania dziennika" } };
    }

    try {
        const diary = await prisma.diary.findUnique({
            where: { id, userId },
            include: {
                entries: {
                    include: {
                        files: true
                    }
                }
            }
        });

        if (!diary) {
            return { error: { message: "Dziennik nie został znaleziony" } };
        }

        const imageUrls: string[] = [];
        for (const entry of diary.entries) {
            for (const file of entry.files) {
                imageUrls.push(file.url);
            }
        }

        await prisma.diary.delete({
            where: { id, userId }
        });

        if (imageUrls.length > 0) {
            await deleteImagesFromBlob(imageUrls);
        }

        return { success: true };
    } catch {
        return { error: { message: "Wystąpił błąd podczas usuwania dziennika" } };
    }   
};