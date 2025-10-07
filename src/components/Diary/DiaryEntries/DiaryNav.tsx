"use client";

import { TCategory } from "@/lib/questions";
import DiaryNavItem from "@/components/Diary/DiaryEntries/DiaryNavItem";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type DiaryNavProps = {
    categories: Omit<TCategory, "questions">[];
    selectedCategory: string | null;
    onCategoryChange: (categoryKey: string) => void;
}

const DiaryNav = ({ categories, selectedCategory, onCategoryChange }: DiaryNavProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="overflow-hidden">
            <div 
                ref={scrollContainerRef}
                className="flex gap-4 lg:flex-col lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:overflow-visible lg:snap-none mb-8 lg:mb-0"
            >
                {categories.map((category) => (
                    <div key={category.category_key} className="snap-start shrink-0 w-[85%] md:w-[45%] lg:w-auto lg:shrink">
                        <DiaryNavItem 
                            category={category}
                            isSelected={selectedCategory === category.category_key}
                            onClick={() => onCategoryChange(category.category_key)}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex gap-4 lg:hidden">
                <button
                    onClick={() => scroll('left')}
                    className="p-3 rounded-full border border-green"
                    aria-label="Poprzednia kategoria"
                >
                    <ArrowLeftIcon className="w-6 h-6 text-brown" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="p-3 rounded-full border border-green"
                    aria-label="Następna kategoria"
                >
                    <ArrowRightIcon className="w-6 h-6 text-brown" />
                </button>
            </div>
        </div>
    );
};

export default DiaryNav;