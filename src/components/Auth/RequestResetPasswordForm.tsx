'use client';

import {useActionState} from "react";
import { requestResetPassword } from "@/server/resetPassword";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const RequestResetPasswordForm = () => {
    const [state, formAction, isPending] = useActionState(requestResetPassword, null);

    return (
        <form action={formAction} className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="email">Adres e-mail</Label>
                <Input name="email" type="email" placeholder="Wprowadź adres e-mail" />
                {state?.error?.message && <p className="text-red-500 text-sm mt-1">{state.error.message}</p>}
                {state?.message && state.success && <p className="text-green-500 text-sm mt-1">{state.message}</p>}
            </div>
            <div className="flex flex-col gap-4 w-full mt-2">
                <Button type="submit" className="w-full md:w-3/4" disabled={isPending}>Wyślij</Button>
            </div>
        </form>
    );
};

export default RequestResetPasswordForm;