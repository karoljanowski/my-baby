import { useState } from "react";
import { DiaryEntryFile } from "../../../../../generated/prisma";
import { saveEntryImages } from "@/server/diary";
import { Status } from "@/lib/types";
import DiaryEntryImagesInput from "@/components/Diary/DiaryEntries/DiaryEntryImages/DiaryEntryImagesInput";
import DiaryEntryImagesList from "@/components/Diary/DiaryEntries/DiaryEntryImages/DiaryEntryImagesList";

type DiaryEntryImagesProps = {
    initialImages: DiaryEntryFile[],
    entryKey: string,
    diaryId: string,
    setStatus: (status: Status) => void,
}

const DiaryEntryImages = ({ initialImages, entryKey, diaryId, setStatus }: DiaryEntryImagesProps) => {
    const [images, setImages] = useState(initialImages);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if (files) {
            const filesArray = Array.from(files);
            const tempImages: DiaryEntryFile[] = filesArray.map((file, index) => ({
                id: `temp-${Date.now()}-${index}`,
                url: URL.createObjectURL(file),
                diaryEntryId: ''
            }));
            
            setImages(prev => [...prev, ...tempImages]);
            setStatus(Status.SAVING);
            
            const result = await saveEntryImages({ images: filesArray, diaryId, entryKey });
            
            if (result.success) {
                setStatus(Status.SAVED);
            } else if (result.error) {
                setStatus(Status.ERROR);
            }
        }
    }
    return (
        <div className="flex items-center gap-4 mb-3">
            {images.length > 0 && <DiaryEntryImagesList images={images} setImages={setImages} setStatus={setStatus} diaryId={diaryId} />}
            <DiaryEntryImagesInput hasImages={images.length > 0} entryKey={entryKey} handleChange={handleChange} />
        </div>
    );
};

export default DiaryEntryImages;