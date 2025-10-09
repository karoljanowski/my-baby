import DiaryTop from "@/components/Diary/DiaryTop";
import { getDiaryById } from "@/server/diary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import DiaryContainer from "@/components/Diary/DiaryEntries/DiaryContainer";
import DiaryError from "@/components/Diary/DiaryEntries/DiaryError";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dziennik | My Baby",
    description: "Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata.",
};

const DiaryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const diaryResult = await getDiaryById(id);


    if (diaryResult.error) {
        return <DiaryError message={diaryResult.error.message} />;
    }

    if (!diaryResult.diary) {
        return <DiaryError message="Dziennik nie został znaleziony" />;
    }

    return (
        <div className="bg-light-grey">
            <div className="container mx-auto py-12 px-4">

                <Button variant="ghost" size="ghost" asChild className="mb-8">
                    <Link href="/dziennik">
                        <ArrowLeftIcon strokeWidth={1} className="size-6" /> Powrót
                    </Link>
                </Button>
                
                <DiaryTop 
                title={<>Uzupełnij <span className="text-secondary font-secondary">dziennik</span> dla Twojego dziecka</>} 
                description="Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata." 
                badgeText={diaryResult.diary.name}
                />

                <DiaryContainer entries={diaryResult.diary.entries} diaryId={diaryResult.diary.id} />

            </div>
        </div>
    );
};

export default DiaryPage;