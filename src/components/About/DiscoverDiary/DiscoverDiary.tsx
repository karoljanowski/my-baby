import { Badge } from "@/components/ui/badge";
import DiscoverDiaryList from "@/components/About/DiscoverDiary/DiscoverDiaryList";

const DiscoverDiary = () => {
    return (
        <div className="bg-light-grey py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                    <Badge className="mb-4">Dołącz do nas</Badge>
                    <h2 className="text-[32px] leading-[120%] mb-8 text-dark -tracking-[0.06em]">Odkryj <span className="text-secondary font-secondary">wszystkie funkcje</span> naszego dziennika</h2>
                    <p className="text-base leading-[150%] font-light mb-8">Nasz dziennik to idealne narzędzie, które pozwala rodzicom dokumentować najważniejsze chwile w życiu ich dziecka. Dzięki możliwości dodawania zdjęć i osobistych notatek, staje się on nie tylko pamiątką, ale także źródłem radości w przyszłości.</p>
                    <DiscoverDiaryList />
                </div>
            </div>
        </div>
    );
};

export default DiscoverDiary;