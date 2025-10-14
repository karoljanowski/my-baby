
import BorderImage from "@/components/BorderImage";
import { cn } from "@/lib/utils";

type GeneralContainerProps = {
    containerClassName?: string
    afterColorClassName?: string
    children: React.ReactNode
    decorations: React.ReactNode
    image: string
    alt: string
}

const GeneralContainer = ({children, image, containerClassName, alt, afterColorClassName, decorations}: GeneralContainerProps) => {
    return (
        <div className={cn("overflow-hidden", containerClassName)}>
            <div className="container mx-auto px-4 relative">
                <div className="grid items-center grid-cols-1 lg:grid-cols-[1.5fr_2fr] xl:grid-cols-[1fr_2fr] gap-8 pt-8 pb-16 lg:py-16">
                    <div>
                        {children}
                    </div>
                    <div className="flex justify-center xl:pl-32 relative">
                        <BorderImage src={image} alt={alt} width={584} height={674} 
                        containerClassName={cn("w-[335px] md:w-[400px] xl:w-[584px] aspect-[584/720] lg:after:content-[''] lg:after:absolute lg:after:block lg:after:top-0 lg:after:left-1/2 lg:after:w-[50vw] lg:after:h-[300%] lg:after:translate-y-[-50%] lg:after:bg-light-grey", afterColorClassName)} 
                        className="object-cover object-top relative z-10 border-[20px] xl:border-[30px]" />
                    </div>
                </div>
                {decorations}
            </div>
        </div>
    );  
};

export default GeneralContainer;