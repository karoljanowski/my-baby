import { useState } from "react";
import { DiaryEntryFile } from "../../../../../generated/prisma";
import { saveEntryImages } from "@/server/diary";
import { Status, StatusState } from "@/lib/types";
import DiaryEntryImagesInput from "@/components/Diary/DiaryEntries/DiaryEntryImages/DiaryEntryImagesInput";
import DiaryEntryImagesList from "@/components/Diary/DiaryEntries/DiaryEntryImages/DiaryEntryImagesList";

type DiaryEntryImagesProps = {
    initialImages: DiaryEntryFile[],
    entryKey: string,
    diaryId: string,
    setStatus: (status: Status) => void,
    status: Status,
}

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const MAX_TOTAL_SIZE = 10 * 1024 * 1024;

const DiaryEntryImages = ({ initialImages, entryKey, diaryId, setStatus, status }: DiaryEntryImagesProps) => {
    const [images, setImages] = useState(initialImages);
    const [uploadingCount, setUploadingCount] = useState(0);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        
        if (files) {
            const filesArray = Array.from(files);
            
            const oversizedFile = filesArray.find(file => file.size > MAX_FILE_SIZE);
            if (oversizedFile) {
                setStatus({ 
                    state: StatusState.ERROR, 
                    message: `Maksymalny rozmiar pojedynczego pliku to 4MB.` 
                });
                e.target.value = '';
                return;
            }
            
            const totalSize = filesArray.reduce((sum, file) => sum + file.size, 0);
            if (totalSize > MAX_TOTAL_SIZE) {
                setStatus({ 
                    state: StatusState.ERROR, 
                    message: `Całkowity rozmiar plików przekracza limit 10MB.` 
                });
                e.target.value = '';
                return;
            }
            
            setUploadingCount(filesArray.length);
            setStatus({ state: StatusState.SAVING });
            
            const result = await saveEntryImages({ images: filesArray, diaryId, entryKey });
            
            if (result.success && result.files) {
                setImages(result.files);
                setUploadingCount(0);
                setStatus({ state: StatusState.SAVED });
            } else {
                setStatus({ state: StatusState.ERROR, message: result.message || 'Błąd podczas przesyłania zdjęć' });
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
                />
            )}
            <DiaryEntryImagesInput disabled={status.state === StatusState.SAVING} hasImages={images.length > 0 || uploadingCount > 0} entryKey={entryKey} handleChange={handleChange} />
        </div>
    );
};

export default DiaryEntryImages;