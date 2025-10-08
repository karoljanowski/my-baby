import Image from "next/image";
import { cn } from "@/lib/utils";

type BorderImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    containerClassName?: string;
}

const BorderImage = ({ src, alt, width, height, className, containerClassName }: BorderImageProps) => {
    return (
        <div className={cn("overflow-hidden flex items-center justify-center", containerClassName)}>
            <Image src={src} alt={alt} width={width} height={height} className={cn("w-full h-full object-cover border-[10px] border-beige rounded-tl-[1000px] rounded-tr-[1000px]", className)} />
        </div>
    );
};

export default BorderImage;