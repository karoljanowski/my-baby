import { Instagram, User } from "lucide-react";
import Link from "next/link";

const HeaderIcons = () => {
    return (
        <div className="flex gap-4 items-center order-2 ml-auto md:ml-0">
            <Link href="/logowanie">
                <User className="text-dark" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
                <Instagram className="text-dark" />
            </Link>
        </div>
    );
};

export default HeaderIcons;