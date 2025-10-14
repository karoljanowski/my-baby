import { Badge } from "@/components/ui/badge";

const AboutTop = () => {
    return (
        <div className="bg-light-grey py-16">
            <div className="container mx-auto px-4">
                <Badge className="mb-4">O nas</Badge>
                <h1 className="text-[32px] md:text-[40px] leading-[120%] mb-8 text-dark -tracking-[0.06em]">Dlaczego nasz <span className="text-secondary font-secondary">dziennik</span> jest tak wyjątkowy?</h1>
                <p className="text-base leading-[150%] font-light mb-26 max-w-[490px]">Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata.</p>
            </div>
        </div>
    );
};

export default AboutTop;