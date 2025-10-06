import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto px-4">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 pt-8 pb-16">
                    <div>
                        <h1 className="text-4xl md:text-[56px] leading-[120%] mb-6 text-dark">Stwórz <span className="text-secondary font-secondary">wyjątkowy</span> dziennik wspomnień dla swojego dziecka</h1>
                        <p className="font-light leading-[150%] mb-9">Zbieraj wspomnienia swojego dziecka w jednym miejscu. Nasza platforma umożliwia łatwe dodawanie zdjęć i tekstów, tworząc niezapomnianą pamiątkę na lata.</p>
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
                    <div className="flex justify-end">
                        <Image src="/hero/hero.png" alt="Hero" width={584} height={674} quality={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;