import Link from "next/link";

const FooterMenu = () => {
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
        <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
                <Link href={link.href} key={link.title}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default FooterMenu;