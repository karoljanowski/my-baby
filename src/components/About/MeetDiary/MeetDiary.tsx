import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const MeetDiary = () => {
    return (
        <div className="bg-warm-white py-32 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:items-center lg:text-center">
                    <Badge className="mb-6">Czym jest dziennik?</Badge>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-16 text-dark -tracking-[0.06em] max-w-[550px]">Poznaj nasz wyjątkowy <span className="text-secondary font-secondary">dziennik</span> dla dzieci</h2>
                    <p className="text-base leading-[150%] font-light mb-8 max-w-[700px]">Nasz dziennik to idealne narzędzie, które pozwala rodzicom dokumentować najważniejsze chwile w życiu ich dziecka. Dzięki możliwości dodawania zdjęć i osobistych notatek, staje się on nie tylko pamiątką, ale także źródłem radości w przyszłości.</p>
                    <Button asChild className="w-fit">
                        <Link href="/o-nas">
                            Dowiedz się więcej
                        </Link>
                    </Button>
                </div>
            </div>
            <MeetDiaryDecorations />
        </div>
    );
};

const MeetDiaryDecorations = () => {
    return (
        <>
            <Image src="/decoration/flower1.png" alt="" width={187} height={186} className="absolute top-[-5%] left-[-5%] w-[129px] md:left-[unset] md:right-[10%] md:top-[10%]" />
            <Image src="/decoration/flower2.png" alt="" width={181} height={241} className="absolute right-[-10%] bottom-[5%] w-[134px] sm:right-0 lg:w-[181px]" />
            <Image src="/decoration/flower3.png" alt="" width={333} height={319} className="absolute hidden md:block left-0 top-[5%] lg:top-[15%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute top-[10%] right-[10%] md:right-[20%] md:top-[40%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute bottom-[5%] left-[5%] md:left-[15%] md:bottom-[15%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute hidden md:block left-[30%] top-[5%] lg:top-[10%]" />

        </>
    );
};

export default MeetDiary;