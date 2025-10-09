import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    status: Status,
}

const DiaryEntryImages = ({ initialImages, entryKey, diaryId, setStatus, status }: DiaryEntryImagesProps) => {
    const router = useRouter();
    const [images, setImages] = useState(initialImages);
    const [uploadingCount, setUploadingCount] = useState(0);

    useEffect(() => {
        setImages(initialImages);
    }, [initialImages]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if (files) {
            const filesArray = Array.from(files);
            
            setUploadingCount(filesArray.length);
            setStatus(Status.SAVING);
            
            const result = await saveEntryImages({ images: filesArray, diaryId, entryKey });
            
            if (result.success && result.files) {
                setImages(result.files);
                setUploadingCount(0);
                setStatus(Status.SAVED);
                router.refresh();
            } else if (result.error) {
                setStatus(Status.ERROR);
                setUploadingCount(0);
            }
            
            e.target.value = '';
        }
    }
    
    return (
        <div className="flex items-center gap-4 mb-3">
            {(images.length > 0 || uploadingCount > 0) && (
                <DiaryEntryImagesList 
                    images={images}
                    setImages={setImages}
                    uploadingCount={uploadingCount}
                    setStatus={setStatus} 
                    diaryId={diaryId}
                    entryKey={entryKey}
                />
            )}
            <DiaryEntryImagesInput disabled={status === Status.SAVING} hasImages={images.length > 0 || uploadingCount > 0} entryKey={entryKey} handleChange={handleChange} />
        </div>
    );
};

export default DiaryEntryImages;