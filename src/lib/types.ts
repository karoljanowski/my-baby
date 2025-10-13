import { Prisma } from "../../generated/prisma";

// Auth
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

export type ResetPasswordActionState = {
    success?: boolean;
    errors?: {
        email?: string;
        password?: string;
        confirmPassword?: string;
        general?: string;
    }
} | null;

// Diary form
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

export type EntryWithQuestionTitle = EntryDataWithFiles & {
    question_title: string;
}

export enum StatusState {
    NO_CHANGES,
    SAVING,
    SAVED,
    ERROR,
}

export type Status = {
    state: StatusState;
    message?: string;
}

// Discover Diary component
export type DiscoverDiaryList = {
    id: number;
    title: React.ReactNode;
    description: string;
    image: string;
    alt: string;
}

// Send Mail
export type SendMailActionState = {
    success?: boolean;
    errors?: {
        general?: string;
        name?: string;
        email?: string;
        message?: string;
    }
} | null;