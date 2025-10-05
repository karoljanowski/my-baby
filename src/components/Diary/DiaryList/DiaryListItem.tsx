import { Diary } from "../../../../generated/prisma";
import { Button } from "@/components/ui/button";
import { BookHeartIcon, ArrowRightIcon } from "lucide-react";
import DeleteItemButton from "@/components/Diary/DiaryList/DeleteItemButton";
import Link from "next/link";

const DiaryListItem = ({ diary }: { diary: Diary }) => {
    return (
        <div className="bg-white border border-transparent hover:border-secondary transition-all rounded-lg p-4">
            <div className="flex items-center gap-2">
                <BookHeartIcon width={40} height={40} className="text-secondary" />
                <div className="flex flex-col">
                    <div className="text-xl font-medium">{diary.name}</div>
                    <div className="text-sm text-muted-foreground">Utworzono: {diary.createdAt.toLocaleDateString()}</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <DeleteItemButton id={diary.id} />
                    <Button variant="default" size="icon" asChild>
                        <Link href={`/dziennik/${diary.id}`}>
                            <ArrowRightIcon width={24} height={24} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DiaryListItem;