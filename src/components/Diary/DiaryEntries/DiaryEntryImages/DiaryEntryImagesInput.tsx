import { cn } from "@/lib/utils";
import { FileUp } from "lucide-react";

const DiaryEntryImagesInput = ({ hasImages, entryKey, handleChange, disabled }: { hasImages: boolean, entryKey: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, disabled: boolean }) => {
    const handleClick = () => {
        if (disabled) return;
        
        const input = document.querySelector(`input[name="${entryKey}"]`) as HTMLInputElement;
        if (input) {
            input.click();
        }
    }

    return (
        <div onClick={handleClick} className={cn("flex gap-2 border border-input border-dashed rounded-lg p-4 items-center justify-center w-fit cursor-pointer hover:border-secondary transition-all", hasImages && "p-5", disabled && "opacity-50 cursor-not-allowed hover:border-input")}>
            <input type="file" name={entryKey} multiple accept="image/png,image/jpeg,image/jpg,image/webp" className="hidden" onChange={handleChange} disabled={disabled} />
            <FileUp className={cn("w-4 h-4 text-secondary", hasImages && "w-6 h-6")} />
            {!hasImages && <p>Wgraj pamiątkowe zdjęcia</p>}
        </div>
    );
};

export default DiaryEntryImagesInput;