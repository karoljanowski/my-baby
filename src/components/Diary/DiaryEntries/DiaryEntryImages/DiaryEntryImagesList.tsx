import { Status } from "@/lib/types";
import { deleteEntryImage } from "@/server/diary";
import { DiaryEntryFile } from "../../../../../generated/prisma";
import { X } from "lucide-react";
import Image from "next/image";

const DiaryEntryImagesList = ({ images, setImages, setStatus, diaryId }: { images: DiaryEntryFile[], setImages: (images: DiaryEntryFile[]) => void, setStatus: (status: Status) => void, diaryId: string }) => {
    const handleDelete = async (id: string) => {
        setStatus(Status.SAVING);
        const result = await deleteEntryImage(id, diaryId);
        if (result.success) {
            setImages(images.filter((image) => image.id !== id));
            setStatus(Status.SAVED);
        } else if (result.error) {
            setStatus(Status.ERROR);
        }
    }

    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="relative w-[64px] h-[64px] rounded-lg border border-input">
                    <Image key={image.id} src={image.url} alt="Image" width={64} height={64} className="object-cover w-full h-full" />
                    <div className="absolute bottom-0 -right-1/5 z-10 bg-white rounded-full p-1 border-input border cursor-pointer" onClick={() => handleDelete(image.id)}>
                        <X className="w-4 h-4" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiaryEntryImagesList;