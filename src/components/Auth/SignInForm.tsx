'use client';

import {useActionState, useEffect} from "react";
import { signIn } from "@/server/auth";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const [state, formAction, isPending] = useActionState(signIn, null);
    const router = useRouter();
    
    useEffect(() => {
        if (state?.success) {
            toast.success("Pomyślnie zalogowano");
            router.push("/dziennik");
        }
    }, [state, router]);

    return (
        <form action={formAction} className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="email">Adres e-mail</Label>
                <Input name="email" type="email" placeholder="Wprowadź adres e-mail" defaultValue={state?.formData?.email} />
                {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="password">Hasło</Label>
                <PasswordInput name="password" placeholder="Wprowadź hasło" />
                {state?.errors?.password && <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>}
                <Link className="text-sm self-end hover:underline" href="/resetowanie-hasla">Nie pamiętasz hasła?</Link>
            </div>
            <div className="flex flex-col gap-4 w-full mt-2">
                <Button type="submit" className="w-full md:w-3/4" disabled={isPending}>Zaloguj się</Button>
                <Link href="/rejestracja">Nie masz jeszcze konta? <span className="text-secondary font-semibold">Zarejestruj się!</span></Link>
            </div>
        </form>
    );
};

export default SignInForm;