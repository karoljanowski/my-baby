import { Instagram, User } from "lucide-react";
import Link from "next/link";

const Icons = () => {
    return (
        <div className="flex gap-4 items-center">
            <Link href="/logowanie">
                <User />
            </Link>
            <Link href="https://www.instagram.com/baby.pielgrzymka/" target="_blank">
                <Instagram />
            </Link>
        </div>
    );
};

export default Icons;