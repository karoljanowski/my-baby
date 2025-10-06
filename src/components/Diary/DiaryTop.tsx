import { Badge } from "@/components/ui/badge";

type DiaryTopProps = {
    title: React.ReactNode;
    description: string;
    badgeText: string;
}

const DiaryTop = ({ title, description, badgeText }: DiaryTopProps) => {
    return (
        <div className="flex flex-col items-start mb-24">
            <Badge className="mb-4">
                {badgeText}
            </Badge>
            <h1 className="text-[36px] md:text-[40px] leading-[120%] mb-8 text-dark -tracking-[0.06em]">{title}</h1>
            <p className="text-lg max-w-xl leading-[150%] font-light">{description}</p>
        </div>
    );
};

export default DiaryTop;