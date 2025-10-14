'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { createDiary } from "@/server/diaryList";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateDiaryButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, formAction, isPending] = useActionState(createDiary, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            toast.success("Dziennik został utworzony");
            router.refresh();
            setIsOpen(false);
        }
    }, [state, router]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="group bg-white border border-dashed border-white hover:border-secondary transition-all rounded-lg p-6 lg:p-8 cursor-pointer flex flex-col items-center justify-center h-full min-h-[200px]">
                    <PlusIcon className="w-12 h-12 text-secondary/50 group-hover:text-secondary transition-colors mb-4" />
                    <div className="text-2xl text-center">
                        Utwórz{" "}
                        <span className="text-green/50 group-hover:text-green font-secondary transition-colors">
                            nowy dziennik
                        </span>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Utwórz nowy dziennik</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </DialogDescription>
                </DialogHeader>

                <form action={formAction}>
                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor="name">Nazwa dziennika</Label>
                        <Input id="name" name="name" placeholder="Nazwa dziennika" defaultValue={state?.formData?.name} />
                        {state?.error && <p className="text-red-500 text-sm">{state.error.message}</p>}
                    </div>
                    <DialogFooter className="mt-6">
                        <DialogClose asChild>
                            <Button variant="outline" size="small">Anuluj</Button>
                        </DialogClose>
                        <Button size="small" type="submit" disabled={isPending}>Utwórz dziennik</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateDiaryButton;