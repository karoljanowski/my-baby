import { getDiariesByUserId } from "@/server/diaryList";
import DiaryListItem from "@/components/Diary/DiaryList/DiaryListItem";
import CreateDiaryButton from "@/components/Diary/DiaryList/CreateDiaryButton";
import { Diary } from "../../../../generated/prisma";

const DiaryList = async ({ userId }: { userId: string }) => {
    const diaries = await getDiariesByUserId(userId);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-1">
            {diaries.map((diary: Diary) => (
                <div key={diary.id}>
                    <DiaryListItem diary={diary} />
                </div>
            ))}
            <CreateDiaryButton userId={userId} />
        </div>
    );
};

export default DiaryList;