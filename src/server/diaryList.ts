'use server';

import {prisma} from "@/lib/prisma";
import type { CreateDiaryActionState } from "@/lib/types";

export const getDiariesByUserId = async (userId: string) => {
    const diaries = await prisma.diary.findMany({
        where: {
            userId,
        },
    });

    return diaries;
};

export const createDiary = async (prevState: CreateDiaryActionState, formData: FormData): Promise<CreateDiaryActionState> => {
    const name = formData.get("name") as string;
    
    if (!name) {
        return { success: false, error: { message: "Nazwa dziennika jest wymagana" }, formData: { name } };
    }

    const userId = formData.get("userId");

    if (!userId || typeof userId !== 'string') {
        return { error: { message: "Wystąpił błąd podczas tworzenia nowego dziennika" }, formData: { name } };
    }

    try {        
        await prisma.diary.create({
            data: {
                name: name,
                userId: userId,
            },
        });

        return {success: true};
    } catch (error) {
        return { error: { message: "Wystąpił błąd podczas tworzenia nowego dziennika" }, formData: { name } };
    }
};

export const deleteDiary = async (id: string) => {
    if (!id) {
        return { error: { message: "Wystąpił błąd podczas usuwania dziennika" } };
    }

    try {
        await prisma.diary.delete({
            where: { id },
        });
        return { success: true };
    } catch (error) {
        return { error: { message: "Wystąpił błąd podczas usuwania dziennika" } };
    }   
};