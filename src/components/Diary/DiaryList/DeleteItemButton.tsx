'use client';

import { Button } from "@/components/ui/button";
import { deleteDiary } from "@/server/diaryList";
import { Trash2Icon } from "lucide-react";
import { useTransition, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const DeleteItemButton = ({ id }: { id: string }) => {
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleDelete = () => {
        startTransition(async () => {
            const result = await deleteDiary(id);

            if (result.success) {
                toast.success("Dziennik został usunięty");
                router.refresh();
                setIsOpen(false);
            } else if (result.error) {
                toast.error(result.error.message);
            }
        });
    };
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-red-500/20 hover:border-red-500 hover:bg-red-500/5 transition-all cursor-pointer"
                    title="Usuń dziennik"
                >
                    <Trash2Icon className="w-5 h-5 text-red-500" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Usuń dziennik</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Czy na pewno chcesz usunąć ten dziennik?
                </DialogDescription>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" size="small">Anuluj</Button>
                    </DialogClose>
                    <Button size="small" disabled={isPending} onClick={handleDelete}>Usuń dziennik</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteItemButton;