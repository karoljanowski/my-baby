import Image from "next/image";
const AuthContainer = ({children, image}: {children: React.ReactNode, image: string}) => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                <div className="flex flex-col justify-center items-start pt-8">
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