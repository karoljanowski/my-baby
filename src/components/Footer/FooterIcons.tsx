import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const FooterIcons = () => {
    return (
        <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com/" target="_blank">
                <Facebook />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
                <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
                <Linkedin />
            </Link>
        </div>
    );
};

export default FooterIcons;