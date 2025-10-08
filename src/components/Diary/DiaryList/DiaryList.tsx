import { getDiariesByUserId } from "@/server/diaryList";
import DiaryListItem from "@/components/Diary/DiaryList/DiaryListItem";
import CreateDiaryButton from "@/components/Diary/DiaryList/CreateDiaryButton";
import { Diary } from "../../../../generated/prisma";
import Alert from "@/components/Alert";

const DiaryList = async () => {
    const diariesResult = await getDiariesByUserId();

    if (diariesResult.error) {
        return <Alert message={diariesResult.error.message} />;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {diariesResult.diaries.map((diary: Diary) => (
                <DiaryListItem key={diary.id} diary={diary} />
            ))}
            <CreateDiaryButton />
        </div>
    );
};

export default DiaryList;