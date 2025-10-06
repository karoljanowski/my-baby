import { Instagram, User } from "lucide-react";
import Link from "next/link";

const HeaderIcons = () => {
    return (
        <div className="flex gap-4 items-center order-2 ml-auto">
            <Link href="/logowanie">
                <User className="text-dark" />
            </Link>
            <Link href="https://www.instagram.com/baby.pielgrzymka/" target="_blank">
                <Instagram className="text-dark" />
            </Link>
        </div>
    );
};

export default HeaderIcons;