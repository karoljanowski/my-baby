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

const CreateDiaryButton = ({ userId }: { userId: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, formAction, isPending] = useActionState(createDiary, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            toast.success("Dziennik został utworzony");
            router.refresh();
            setIsOpen(false);
        }
    }, [state?.success]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="group bg-white/80 border border-dashed border-transparent hover:border-secondary transition-all rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center justify-center gap-2 h-full">
                        <PlusIcon className="size-6 text-foreground/50 group-hover:text-secondary transition-colors" />
                        <div className="text-lg font-medium text-foreground/50 group-hover:text-secondary transition-colors">Utwórz nowy dziennik</div>
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
                        <input type="hidden" name="userId" value={userId} />
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