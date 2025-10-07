"use client";
import { data } from "@/lib/questions";
import DiaryEntry from "@/components/Diary/DiaryEntries/DiaryEntry";
import { EntryDataWithFiles } from "@/lib/types";

type DiaryEntriesProps = {
    selectedCategory: string;
    entries: EntryDataWithFiles[];
    diaryId: string;
}

const DiaryEntries = ({ selectedCategory, entries, diaryId }: DiaryEntriesProps) => {
    const questions = data.find((question) => question.category_key === selectedCategory)?.questions;
    
    return (
        <div className="bg-white px-5 py-8 md:px-8 lg:p-16 rounded-lg flex flex-col gap-8 lg:gap-16 h-fit">
            {questions?.map((question) => {
                return (
                    <DiaryEntry 
                        key={question.question_key} 
                        question={question} 
                        diaryId={diaryId}
                        entry={entries.find((entry) => entry.entryKey === question.question_key)}
                    />
                );
            })}
        </div>
    );
};

export default DiaryEntries;