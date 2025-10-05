import { cn } from "@/lib/utils";
import { FileUp } from "lucide-react";

const DiaryEntryImagesInput = ({ hasImages, entryKey, handleChange }: { hasImages: boolean, entryKey: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    const handleClick = () => {
        const input = document.querySelector(`input[name="${entryKey}"]`) as HTMLInputElement;
        if (input) {
            input.click();
        }
    }

    return (
        <div onClick={handleClick} className={cn("flex gap-2 border border-input border-dashed rounded-lg p-4 items-center justify-center w-fit cursor-pointer hover:border-secondary transition-all", hasImages && "p-6")}>
            <input type="file" name={entryKey} multiple accept="image/png,image/jpeg,image/jpg,image/webp" className="hidden" onChange={handleChange} />
            <FileUp className={cn("w-4 h-4 text-secondary", hasImages && "w-6 h-6")} />
            {!hasImages && <p>Wgraj pamiątkowe zdjęcia</p>}
        </div>
    );
};

export default DiaryEntryImagesInput;