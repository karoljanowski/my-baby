import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const StartDiary = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="grid-one-row-one-column relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-linear-to-b after:from-black/80 after:via-black/70 after:to-black/0 after:z-10">
                <Image src="/about/start-mobile.png" alt="Zacznij przygodę z dziennikiem" width={1440} height={441} className="h-full object-cover" />
            </div>
            <div className="container mx-auto px-4 grid-one-row-one-column relative z-20 pt-8 pb-72">
                <div className="flex flex-col">
                    <h2 className="text-[32px] leading-[120%] mb-4 text-light-grey">Zacznij <span className="font-secondary">przygodę</span> z dziennikiem</h2>
                    <p className="text-base leading-[150%] font-light mb-8 text-light-grey">Zacznij tworzyć niezapomniane wspomnienia dla swojego dziecka już dziś! Zachowaj najpiękniejsze chwile, zapisz ważne momenty!</p>
                    <Button asChild variant="outline" className="w-fit border-white text-white">
                        <Link href="/dziennik">
                            Dowiedz się więcej
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StartDiary;