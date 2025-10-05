import Image from "next/image";
import FooterMenu from "@/components/Footer/FooterMenu";
import FooterIcons from "@/components/Footer/FooterIcons";

const FooterTop = () => {
    const footerLinks = [
        {
            title: "O nas",
            href: "/o-nas",
        },
        
        {
            title: "Kontakt",
            href: "/kontakt",
        },
        {
            title: "Pomoc",
            href: "/pomoc",
        },
        {
            title: "Wypełnij dziennik",
            href: "/dziennik",
        },
    ]
    return (
        <div className="flex items-center justify-between mb-20">
            <div className="flex items-center">
                <Image src="/footer_logo.svg" alt="Logo" width={113} height={32} />
            </div>
            <FooterMenu />
            <FooterIcons />
        </div>
    );
};

export default FooterTop;