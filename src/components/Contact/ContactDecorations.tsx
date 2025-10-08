import Image from "next/image";

const ContactDecorations = () => {
    return (
        <>
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className="absolute w-[200px] top-0 left-[85%] lg:left-[45%] lg:top-[20%] z-20 xl:w-[289px] xl:left-[40%] xl:top-[15%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute top-[3%] left-[60%] lg:left-[35%] z-20" />
            <Image src="/decoration/cloud.png" alt="" width={289} height={183} className="absolute bottom-[2%] left-[-10%] z-20 md:left-[5%] lg:left-[unset] lg:right-[2%] lg:bottom-[10%] xl:bottom-[20%] xl:right-[-5%] 2xl:right-[-10%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute hidden lg:block left-[45%] bottom-[55%] z-20 xl:left-[35%] xl:bottom-[55%]" />
            <Image src="/decoration/star.png" alt="" width={57} height={53} className="absolute hidden lg:block left-[35%] bottom-[5%] z-20 xl:left-[30%] xl:bottom-[10%]" />
        </>
    );
};

export default ContactDecorations;