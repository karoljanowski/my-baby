import BorderImage from "@/components/BorderImage";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const AboutTop = () => {
    return (
        <div className="bg-light-grey relative">
            <div className="container mx-auto px-4 py-8 lg:pt-16 lg:pb-0">
                <Badge className="mb-4">O nas</Badge>
                <h1 className="text-[32px] md:text-[40px] leading-[120%] mb-8 text-dark -tracking-[0.06em]">Dlaczego nasz <br className="sm:hidden"/> <span className="text-secondary font-secondary">dziennik</span> jest tak wyjątkowy?</h1>
                <p className="text-base leading-[150%] font-light mb-8 lg:mb-20 max-w-[490px]">Zachowaj najpiękniejsze wspomnienia – zapisuj ważne chwile i dodawaj zdjęcia, by stworzyć wyjątkową pamiątkę na lata.</p>
                <BorderImage 
                src="/images/about.png" 
                alt="O nas" 
                width={1280} 
                height={552} 
                containerClassName="aspect-[335/412] lg:aspect-[1280/552] w-[335px] md:w-[400px] lg:w-full mx-auto" 
                className="border-[20px] lg:border-[30px] lg:border-b-0 lg:rounded-tl-[300px] lg:rounded-tr-[300px]" />
            </div>
            <AboutTopDecorations />
        </div>
    );
};

const AboutTopDecorations = () => {
    return (
        <>
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute w-[41px] h-[38px] top-[3%] right-[20%] lg:w-[57px] lg:h-[53px] lg:top-[3%] lg:right-[5%]" />
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className="absolute w-[200px] h-[120px] top-[8%] right-[-25%] sm:top-[-2%] sm:right-[-20%] md:top-0 md:right-[-10%] lg:top-[15%] lg:right-[-5%] lg:w-[289px] lg:h-[183px]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute hidden lg:block lg:top-[25%] lg:right-[30%]" />
        </>
    );
};

export default AboutTop;