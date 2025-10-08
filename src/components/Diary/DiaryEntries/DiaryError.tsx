import Alert from "@/components/Alert";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const DiaryError = ({message}: {message: string}) => {
    return (
        <div className="bg-light-grey">
            <div className="container mx-auto py-12 px-4">

                <Button variant="ghost" size="ghost" asChild className="mb-8">
                    <Link href="/dziennik">
                        <ArrowLeftIcon strokeWidth={1} className="size-6" /> Powrót
                    </Link>
                </Button>
                <Alert message={message} />
            </div>
        </div>
    );
};

export default DiaryError;