import { Status, StatusState } from "@/lib/types";
import { deleteEntryImage } from "@/server/diary";
import { DiaryEntryFile } from "../../../../../generated/prisma";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type DiaryEntryImagesListProps = {
    images: DiaryEntryFile[];
    setImages: (images: DiaryEntryFile[]) => void;
    uploadingCount: number;
    setStatus: (status: Status) => void;
    diaryId: string;
}

const DiaryEntryImagesList = ({ images, setImages, uploadingCount, setStatus, diaryId }: DiaryEntryImagesListProps) => {
    const router = useRouter();

    const handleDelete = async (id: string) => {
        setStatus({ state: StatusState.SAVING });
        const result = await deleteEntryImage(id, diaryId);
        if (result.success && result.files) {
            setImages(result.files);
            setStatus({ state: StatusState.SAVED });
            router.refresh();
        } else {
            setStatus({ state: StatusState.ERROR, message: result.message || 'Błąd podczas usuwania zdjęcia' });
        }
    }

    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="relative w-[64px] h-[64px] rounded-lg border border-input">
                    <Image key={image.id} src={image.url} alt="Image" width={64} height={64} className="object-cover w-full h-full rounded-lg" />
                    <div className="absolute bottom-0 -right-1/5 z-10 bg-white rounded-full p-1 border-input border cursor-pointer" onClick={() => handleDelete(image.id)}>
                        <X className="w-4 h-4" />
                    </div>
                </div>
            ))}
            {Array.from({ length: uploadingCount }).map((_, index) => (
                <div key={`loader-${index}`} className="w-[64px] h-[64px] rounded-lg border border-input flex items-center justify-center bg-gray-50">
                    <Loader2 className="w-6 h-6 animate-spin text-secondary" />
                </div>
            ))}
        </div>
    );
};

export default DiaryEntryImagesList;