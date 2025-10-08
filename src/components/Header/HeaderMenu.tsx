import Link from "next/link";
import MobileMenu from "@/components/Header/MobileMenu";

const HeaderMenu = () => {
    const menuItems = [
        {
            label: "O nas",
            href: "/o-nas"
        },
        {
            label: "Kontakt",
            href: "/kontakt"
        },
        {
            label: "Wypełnij dziennik",
            href: "/dziennik"
        }
    ];
    return (
        <>
            <div className="gap-8 items-center ml-auto hidden md:flex order-2">
                {menuItems.map((item) => (
                    <Link href={item.href} key={item.label} className="text-sm text-dark">
                        {item.label}
                    </Link>
                ))}
            </div>
            <MobileMenu menuItems={menuItems} />
        </>
    );
};



export default HeaderMenu;