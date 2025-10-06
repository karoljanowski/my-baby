import DiaryTop from "@/components/Diary/DiaryTop";
import { getDiaryById } from "@/server/diary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import DiaryContainer from "@/components/Diary/DiaryEntries/DiaryContainer";

const DiaryListPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const diary = await getDiaryById(id);


    if (!diary) {
        // TODO: ZROBIĆ TUTAJ JAKIS ERROR HANDLING
        return;
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
                badgeText={diary.name}
                />

                <DiaryContainer entries={diary.entries} diaryId={diary.id} />

            </div>
        </div>
    );
};

export default DiaryListPage;