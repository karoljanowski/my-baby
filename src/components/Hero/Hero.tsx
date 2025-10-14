import { Button } from "@/components/ui/button";
import BorderImage from "@/components/BorderImage";
import Link from "next/link";
import HeroDecorations from "./HeroDecorations";

const Hero = () => {
    return (
        <div className="bg-light-grey overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 pt-8 pb-16 lg:py-16 xl:pt-8 xl:pb-0">
                    <div>
                        <h1 className="text-4xl lg:text-[56px] leading-[120%] mb-6 text-dark -tracking-[0.06em] max-w-[580px]">Stwórz <span className="text-secondary font-secondary">wyjątkowy</span> dziennik wspomnień dla swojego dziecka</h1>
                        <p className="font-light leading-[150%] mb-9 max-w-[580px]">Zbieraj wspomnienia swojego dziecka w jednym miejscu. Nasza platforma umożliwia łatwe dodawanie zdjęć i tekstów, tworząc niezapomnianą pamiątkę na lata.</p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <Button asChild className="w-full md:w-auto">
                                <Link href="/dziennik">
                                    Stwórz swój dziennik
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="w-full md:w-auto">
                                <Link href="/o-nas">
                                    Dowiedz się więcej
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end lg:pt-8">
                        <BorderImage src="/images/hero.png" alt="Stwórz wyjątkowy dziennik wspomnień dla swojego dziecka" width={584} height={674} containerClassName="w-[335px] md:w-[400px] xl:w-[584px] aspect-[584/674]" className="object-cover object-top border-[20px] xl:border-[30px] xl:border-b-0" />
                    </div>
                </div>
                <HeroDecorations />
            </div>
        </div>
    );
};

export default Hero;