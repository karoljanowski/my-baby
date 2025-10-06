import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MeetDiary = () => {
    return (
        <div className="bg-warm-white py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                    <Badge className="mb-6">Czym jest dziennik?</Badge>
                    <h2 className="text-[32px] leading-[120%] mb-16 text-dark">Poznaj nasz wyjątkowy <span className="text-secondary font-secondary">dziennik</span> dla dzieci</h2>
                    <p className="text-base leading-[150%] font-light mb-8">Nasz dziennik to idealne narzędzie, które pozwala rodzicom dokumentować najważniejsze chwile w życiu ich dziecka. Dzięki możliwości dodawania zdjęć i osobistych notatek, staje się on nie tylko pamiątką, ale także źródłem radości w przyszłości.</p>
                    <Button asChild className="w-fit">
                        <Link href="/dziennik">
                            Dowiedz się więcej
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MeetDiary;