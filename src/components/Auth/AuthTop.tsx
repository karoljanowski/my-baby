import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type AuthTopProps = {
    title: React.ReactNode;
    description: string;
    backLink?: string;
}

const AuthTop = ({ title, description, backLink="/" }: AuthTopProps) => {
    return (
        <div className="flex flex-col w-full items-start mb-16">
            <Button variant="ghost" size="ghost" asChild className="mb-8">
                <Link href={backLink} >
                    <ArrowLeftIcon strokeWidth={1} className="size-6" /> Powrót
                </Link>
            </Button>
            <h1 className="text-[36px] md:text-[40px] leading-[150%] mb-3 text-dark -tracking-[0.06em]">{title}</h1>
            <p className="text-[16px] leading-[150%] font-light">{description}</p>
        </div>
    );
};

export default AuthTop;