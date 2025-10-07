import { Diary } from "../../../../generated/prisma";
import { Button } from "@/components/ui/button";
import { BookHeartIcon, ArrowRightIcon } from "lucide-react";
import DeleteItemButton from "@/components/Diary/DiaryList/DeleteItemButton";
import Link from "next/link";
import GeneratePdfButton from "@/components/Diary/DiaryList/GeneratePdfButton";

const DiaryListItem = ({ diary }: { diary: Diary }) => {
    return (
        <div className="bg-white border border-white hover:border-secondary transition-all rounded-lg p-6 lg:p-8 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
                <BookHeartIcon className="w-8 h-8 text-secondary shrink-0" />
                <div className="text-2xl">
                    Dziennik{" "}
                    <span className="text-green font-secondary">
                        {diary.name}
                    </span>
                </div>
            </div>
            <div className="leading-[150%] font-light mb-8">
                Utworzono: {diary.createdAt.toLocaleDateString()}
            </div>
            <div className="mt-auto flex items-center gap-2">
                <Button variant="default" asChild className="flex-1">
                    <Link href={`/dziennik/${diary.id}`}>
                        Otwórz
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
                <GeneratePdfButton id={diary.id} />
                <DeleteItemButton id={diary.id} />
            </div>
        </div>
    );
};

export default DiaryListItem;