import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileIcon } from "lucide-react";

const GeneratePdfButton = ({ id }: { id: string }) => {
    return (
        <Button variant="outline" size="icon" asChild>
            <Link href={`/api/generate-pdf/${id}`}>
                <FileIcon />
            </Link>
        </Button>
    );
};

export default GeneratePdfButton;