'use server';

import { Resend } from "resend";
import { SendMailActionState } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (prevState: SendMailActionState, formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const toEmail = process.env.RESEND_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
        return {
            success: false,
            errors: {general: "Wystąpił błąd podczas wysyłania wiadomości, spróbuj ponownie później"},
            formData: { name, email, message }
        };
    }

    const errors: {
        name?: string;
        email?: string;
        message?: string;
        general?: string;
    } = {};

    if (!name) {
        errors.name = "Imię jest wymagane";
    }

    if (!email) {
        errors.email = "Email jest wymagany";
    } else if (!email.includes("@")) {
        errors.email = "Email jest nieprawidłowy";
    }
    
    if (!message) {
        errors.message = "Wiadomość jest wymagana";
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            errors,
            formData: { name, email, message }
        };
    }

    try {
        await resend.emails.send({
            from: fromEmail,
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
            errors: {general: "Wystąpił błąd podczas wysyłania wiadomości, spróbuj ponownie później"},
            formData: { name, email, message }
        };
    }
}