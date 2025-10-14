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

    const scroll = (direction: 'left' | 'right', e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (direction === 'left' && currentScroll <= 0) return;
            if (direction === 'right' && currentScroll >= maxScroll) return;
            
            const itemWidth = container.querySelector('div')?.offsetWidth || 0;
            const gap = 16;
            const scrollAmount = itemWidth + gap;
            
            container.scrollBy({
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
                    onClick={(e) => scroll('left', e)}
                    className="p-3 rounded-full border border-green touch-none"
                    aria-label="Poprzednia kategoria"
                >
                    <ArrowLeftIcon className="w-6 h-6 text-brown" />
                </button>
                <button
                    onClick={(e) => scroll('right', e)}
                    className="p-3 rounded-full border border-green touch-none"
                    aria-label="Następna kategoria"
                >
                    <ArrowRightIcon className="w-6 h-6 text-brown" />
                </button>
            </div>
        </div>
    );
};

export default DiaryNav;