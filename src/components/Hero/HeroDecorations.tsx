
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroDecorations = () => {
    const generalClassName = 'hidden lg:block absolute'
    const cloudClassName = 'w-[180px] xl:w-[289px]'
    return (
        <>
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className={cn(generalClassName, 'top-[3%] left-[-5%] w-[120px]')} />
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className={cn(generalClassName, 'top-[10%] left-[50%] xl:left-[45%]', cloudClassName)} />
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className={cn(generalClassName, 'bottom-[15%] right-[-10%]', cloudClassName)} />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className={cn(generalClassName, 'top-[45%] left-[45%]')} />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className={cn(generalClassName, 'top-[5%] right-[0%]')} />
        </>
    );
}

export default HeroDecorations;