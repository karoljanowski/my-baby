"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { sendMail } from "@/server/sendMail";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendMail, null);

    useEffect(() => {
        if (state?.success) {
            toast.success("Wiadomość została wysłana");
        } else if (state?.errors?.general) {
            toast.error(state.errors.general);
        }
    }, [state]);
    return (
        <form action={formAction} className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="name">Imię</Label>
                <Input name="name" type="text" placeholder="Wprowadź imię" />
                {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
            </div>
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="Wprowadź email" />
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="message">Wiadomość</Label>
                <Textarea name="message" placeholder="Wprowadź wiadomość" />
                {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
            </div>
            <Button className="w-full md:w-3/4" type="submit" disabled={isPending}>Wyślij</Button>
        </form>
    );
};

export default ContactForm;