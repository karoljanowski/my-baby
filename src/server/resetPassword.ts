'use server';

import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";
import { ResetPasswordActionState } from "@/lib/types";
import bcrypt from "bcrypt";

const resend = new Resend(process.env.RESEND_API_KEY);

export const requestResetPassword = async (prevState: ResetPasswordActionState, formData: FormData) => {
    const email = formData.get("email") as string;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!fromEmail) {
        return { success: false, error: { message: "Wystąpił błąd, spróbuj ponownie później" } };
    }

    if (!email) {
        return { success: false, error: { message: "Email jest wymagany" } };
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });
    
    if (!user) {
        return { success: true, message: "Jeśli podany adres e-mail istnieje, otrzymasz wiadomość z instrukcją resetowania hasła." };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000);
    
    await prisma.user.update({
        where: { id: user.id },
        data: {
            resetToken,
            resetTokenExpiry,
        },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_URL}/resetowanie-hasla/${resetToken}`;

    await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Reset hasła - My Baby",
        html: `
            <p>Otrzymaliśmy prośbę o zresetowanie hasła.</p>
            <p>Kliknij w link poniżej, aby ustawić nowe hasło:</p>
            <a href="${resetUrl}">${resetUrl}</a>
            <p>Link jest ważny przez 1 godzinę.</p>
            <p>Jeśli nie prosiłeś o reset hasła, zignoruj tę wiadomość.</p>
        `,
    });

    return { success: true, message: "Jeśli podany adres e-mail istnieje, otrzymasz wiadomość z instrukcją resetowania hasła." };
};

export const resetPassword = async (prevState: ResetPasswordActionState, formData: FormData) => {
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const token = formData.get("token") as string;

    const errors: {
        password?: string;
        confirmPassword?: string;
    } = {};

    if (!password) {
        errors.password = "Hasło jest wymagane";
    }

    if (password.length < 8) {
        errors.password = "Hasło musi mieć co najmniej 8 znaków";
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Potwierdzenie hasła jest wymagane";
    }

    if (password && confirmPassword && password !== confirmPassword) {
        errors.confirmPassword = "Hasła nie są takie same";
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            errors
        };
    }

    const user = await prisma.user.findUnique({
        where: { resetToken: token, resetTokenExpiry: { gt: new Date() } },
    });

    if (!user) {
        return { success: false, error: { message: "Link jest nieprawidłowy lub wygasł" } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, resetToken: null, resetTokenExpiry: null },
    });
    
    return { success: true };
};