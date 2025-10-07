"use client";
import DiaryNav from "@/components/Diary/DiaryEntries/DiaryNav";
import { data, TCategory } from "@/lib/questions";
import { useState } from "react";
import DiaryEntries from "@/components/Diary/DiaryEntries/DiaryEntries";
import { EntryDataWithFiles } from "@/lib/types";

const getCategories = (data: TCategory[]) => {
    return data.map((category) => {
        return {
            category_key: category.category_key,
            category_title: category.category_title,
            category_description: category.category_description,
            category_icon: category.category_icon,
        }
    })
}

const getEntries = (selectedCategory: string, entries: EntryDataWithFiles[]) => {
    return entries.filter((entry) => entry.entryKey.startsWith(selectedCategory));

}

const DiaryContainer = ({ entries, diaryId }: { entries: EntryDataWithFiles[], diaryId: string }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(data[0].category_key);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[450px_1fr] gap-16 xl:gap-24">
            <DiaryNav 
                categories={getCategories(data)} 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <DiaryEntries 
                selectedCategory={selectedCategory} 
                diaryId={diaryId}
                entries={getEntries(selectedCategory, entries)}
            />
        </div>
    );
};

export default DiaryContainer;