import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="max-w-[584px]">
                        <h1 className="text-[56px] leading-[120%] mb-6">Stwórz <span className="text-secondary font-secondary">wyjątkowy</span> dziennik wspomnień dla swojego dziecka</h1>
                        <p className="font-light leading-[150%] mb-9">Zbieraj wspomnienia swojego dziecka w jednym miejscu. Nasza platforma umożliwia łatwe dodawanie zdjęć i tekstów, tworząc niezapomnianą pamiątkę na lata.</p>
                        <div className="flex items-center gap-4">
                            <Button asChild>
                                <Link href="/dziennik">
                                    Stwórz swój dziennik
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/o-nas">
                                    Dowiedz się więcej
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/2 pt-16 flex justify-end">
                        <Image src="/hero/hero.png" alt="Hero" width={584} height={674} quality={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;