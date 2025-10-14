'use server';

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "./session";
import bcrypt from "bcrypt";
import type { AuthActionState } from "@/lib/types";
import { redirect } from "next/navigation";

const signIn = async (prevState: AuthActionState, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return {
            success: false,
            errors: { 
                email: 'Nieprawidłowe dane'
            },
            formData: { email }
        };
    }

    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    if (!user) {
        return { 
            success: false,
            errors: { 
                password: 'Nieprawidłowe dane'
            },
            formData: { email }
        };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return { 
            success: false,
            errors: { 
                password: 'Nieprawidłowe dane'
            },
            formData: { email }
        };
    }

    await createSession(user.id);

    return { success: true };
}

const signUp = async (prevState: AuthActionState, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!email || !password || !confirmPassword) {
        return {
            success: false,
            errors: { 
                email: 'Nieprawidłowe dane'
            },
            formData: { email }
        };
    }

    if (password.length < 8) {
        return { 
            success: false,
            errors: { 
                password: 'Hasło musi mieć co najmniej 8 znaków'
            },
            formData: { email }
        };
    }

    if (password !== confirmPassword) {
        return { 
            success: false,
            errors: { 
                confirmPassword: 'Hasła muszą być takie same'
            },
            formData: { email }
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    });

    if (existingUser) {
        return { 
            success: false,
            errors: { 
                email: 'Użytkownik o tym adresie e-mail już istnieje'
            },
            formData: { email }
        };
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: { email: email, password: hashedPassword },
        });
    } catch {
        return { 
            success: false,
            errors: { 
                general: 'Wystąpił błąd podczas tworzenia nowego użytkownika'
            },
            formData: { email }
        };
    }

    return { success: true };
}

const signOut = async () => {
    await deleteSession();
    redirect('/');
}

export { signIn, signUp, signOut };