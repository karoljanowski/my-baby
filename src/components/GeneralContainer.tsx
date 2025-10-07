
import BorderImage from "@/components/BorderImage";

type GeneralContainerProps = {
    containerClassName?: string
    children: React.ReactNode
    image: string
    alt: string
}

const GeneralContainer = ({children, image, containerClassName, alt}: GeneralContainerProps) => {
    return (
        <div className={containerClassName}>
            <div className="container mx-auto px-4">
                <div className="grid items-center grid-cols-1 lg:grid-cols-[1.5fr_2fr] xl:grid-cols-[1fr_2fr] gap-8 py-16">
                    <div>
                        {children}
                    </div>
                    <div className="flex justify-center lg:justify-center lg:pl-32">
                        <BorderImage src={image} alt={alt} width={584} height={674} containerClassName="w-[335px] md:w-[400px] xl:w-[584px] aspect-[584/720] border-[20px] xl:border-[30px]" className="object-cover object-top" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralContainer;