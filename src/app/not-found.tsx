import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center py-20 lg:py-32">

                    <h1 className="text-[120px] md:text-[180px] lg:text-[220px] leading-[100%] text-secondary font-secondary mb-4">
                        404
                    </h1>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] mb-4 text-dark -tracking-[0.06em]">
                        Ups! Strona nie została znaleziona
                    </h2>
                    <p className="text-base md:text-lg leading-[150%] font-light mb-8 max-w-[600px] mx-auto text-dark/80">
                        Wygląda na to, że zabłądziłeś. Strona, której szukasz, nie istnieje lub została przeniesiona.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild>
                            <Link href="/">
                                Wróć do strony głównej
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/dziennik">
                                Przejdź do dziennika
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;