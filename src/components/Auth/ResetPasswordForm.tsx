'use client';

import {useActionState, useEffect} from "react";
import { resetPassword } from "@/server/resetPassword";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ResetPasswordForm = ({ token }: { token: string }) => {
    const [state, formAction, isPending] = useActionState(resetPassword, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            toast.success("Hasło zostało zresetowane");
            router.push("/logowanie");
        }
    }, [state, router]);

    return (
        <form action={formAction} className="w-full flex flex-col gap-6">
            <input type="hidden" name="token" value={token} />
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="password">Hasło</Label>
                <Input name="password" type="password" placeholder="Wprowadź hasło" />
                {state?.errors?.password && <p className="text-red-500 text-sm mt-1">{state.errors.password}</p>}
            </div>
            <div className="flex flex-col">
                <Label className="mb-3" htmlFor="confirmPassword">Powtórz hasło</Label>
                <Input name="confirmPassword" type="password" placeholder="Wprowadź hasło" />
                {state?.errors?.confirmPassword && <p className="text-red-500 text-sm mt-1">{state.errors.confirmPassword}</p>}
            </div>
            <div className="flex flex-col gap-4 w-full mt-2">
                <Button type="submit" className="w-full md:w-3/4" disabled={isPending}>Zresetuj hasło</Button>
            </div>
        </form>
    );
};

export default ResetPasswordForm;