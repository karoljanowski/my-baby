import { TCategory } from "@/lib/questions";
import DiaryNavItem from "@/components/Diary/DiaryEntries/DiaryNavItem";

type DiaryNavProps = {
    categories: Omit<TCategory, "questions">[];
    selectedCategory: string | null;
    onCategoryChange: (categoryKey: string) => void;
}

const DiaryNav = ({ categories, selectedCategory, onCategoryChange }: DiaryNavProps) => {
    return (
        <div className="flex flex-col gap-8">
            {categories.map((category) => (
                <DiaryNavItem 
                    key={category.category_key} 
                    category={category}
                    isSelected={selectedCategory === category.category_key}
                    onClick={() => onCategoryChange(category.category_key)}
                />
            ))}
        </div>
    );
};

export default DiaryNav;