import { getDiariesByUserId } from "@/server/diaryList";
import DiaryListItem from "@/components/Diary/DiaryList/DiaryListItem";
import CreateDiaryButton from "@/components/Diary/DiaryList/CreateDiaryButton";
import { Diary } from "../../../../generated/prisma";

const DiaryList = async ({ userId }: { userId: string }) => {
    const diaries = await getDiariesByUserId(userId);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {diaries.map((diary: Diary) => (
                <DiaryListItem key={diary.id} diary={diary} />
            ))}
            <CreateDiaryButton userId={userId} />
        </div>
    );
};

export default DiaryList;