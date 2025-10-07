'use server';

import { Resend } from "resend";
import { SendMailActionState } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (prevState: SendMailActionState, formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!toEmail) {
        return {
            success: false,
            errors: {general: "Wystąpił błąd podczas wysyłania wiadomości"}
        };
    }

    if (!name) {
        return {
            success: false,
            errors: {name: "Imię jest wymagane"}
        };
    }

    if (!email) {
        return {
            success: false,
            errors: {email: "Email jest wymagany"}
        };
    }

    if (!email.includes("@")) {
        return {
            success: false,
            errors: {email: "Email jest nieprawidłowy"}
        };
    }
    
    if (!message) {
        return {
            success: false,
            errors: {message: "Wiadomość jest wymagana"}
        };
    }

    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: toEmail,
            subject: "Formularz kontaktowy - My Baby",
            html: `<p>Imię: ${name}</p><p>Email: ${email}</p><p>Wiadomość: ${message}</p>`,
        });

        return {
            success: true
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            errors: {general: "Wystąpił błąd podczas wysyłania wiadomości"}
        };
    }
}