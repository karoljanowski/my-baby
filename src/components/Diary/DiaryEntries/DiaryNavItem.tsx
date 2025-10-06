import { TCategory } from "@/lib/questions";
import { cn } from "@/lib/utils";
import Image from "next/image";

type DiaryNavItemProps = {
    category: Omit<TCategory, "questions">;
    isSelected: boolean;
    onClick: () => void;
}

const DiaryNavItem = ({ category, isSelected, onClick }: DiaryNavItemProps) => {
    return (
        <button 
            onClick={onClick}
            className={cn(
                "flex flex-col items-start bg-white p-6 lg:p-8 rounded-lg border border-white transition-all text-left h-full",
                isSelected && "border-secondary"
            )}
        >
            <div className="flex flex-col lg:flex-row md:items-center gap-4 mb-6">
                <Image src={`/custom_icons/${category.category_icon}`} alt={category.category_title} width={32} height={32} className="h-8 w-8 object-contain" />
                <div className="text-2xl">
                    {category.category_title.split(" ")[0]}{" "}
                    <span className="text-green font-secondary">
                        {category.category_title.split(" ").slice(1).join(" ")}
                    </span>
                </div>
            </div>
            <div className="leading-[150%] font-light">{category.category_description}</div>
        </button>
    );
};

export default DiaryNavItem;