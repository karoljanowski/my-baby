import { Prisma } from "../../generated/prisma";

export type AuthActionState = {
    success?: boolean;
    errors?: {
        email?: string;
        password?: string;
        confirmPassword?: string;
        general?: string;
    }
    formData?: {
        email?: string;
    };
} | null;

export type CreateDiaryActionState = {
    success?: boolean;
    error?: {
        message: string;
    };
    formData?: {
        name?: string;
    };
} | null;

export type EntryDataWithFiles = Prisma.DiaryEntryGetPayload<{
    include: {
        files: true;
    }
}>

export enum Status {
    NO_CHANGES,
    SAVING,
    SAVED,
    ERROR,
}