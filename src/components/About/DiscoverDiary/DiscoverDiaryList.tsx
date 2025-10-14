"use client";

import { DiscoverDiaryList as TDiscoverDiaryList } from "@/lib/types";
import DiscoverDiaryItem from "./DiscoverDiaryItem";
import { useRef } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

const DiscoverDiaryList = () => {
    const scroll = (direction: 'left' | 'right', e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const itemWidth = container.querySelector('div')?.offsetWidth || 0;
            const gap = 16;
            const scrollAmount = itemWidth + gap;
            
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const discoverDiaryList: TDiscoverDiaryList[] = [
        {
            id: 1,
            title: <>Wprowadzanie <span className="text-secondary font-secondary">tekstów i zdjęć</span></>,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            image: "/about/discover1.png",
            alt: "Wprowadzanie tekstów i zdjęć",
        },
        {
            id: 2,
            title: <>Generowanie <span className="text-secondary font-secondary">dziennika</span></>,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            image: "/about/discover2.png",
            alt: "Generowanie dziennika",
        },
        {
            id: 3,
            title: <>Podsumowanie <span className="text-secondary font-secondary">dziennika</span></>,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
            image: "/about/discover3.png",
            alt: "Podsumowanie dziennika",
        },
    ];
    return (
        <div className="overflow-hidden">
            <div ref={scrollContainerRef} className="flex gap-4 md:flex-row md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible md:snap-none mb-8 md:mb-0">
                {discoverDiaryList.map((item) => (
                    <DiscoverDiaryItem key={item.id} item={item} />
                ))}
            </div>

            {/* Mobile navigation buttons */}
            <div className="flex gap-4 md:hidden">
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

export default DiscoverDiaryList;