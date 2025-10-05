import Image from "next/image";
const AuthContainer = ({children, image}: {children: React.ReactNode, image: string}) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-[1fr_2fr]">
                <div className="flex flex-col justify-center items-start">
                    {children}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src={image} alt="Auth" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;