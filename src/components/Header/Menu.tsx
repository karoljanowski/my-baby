import Link from "next/link";

const Menu = () => {
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
        <div className="flex gap-8 items-center ml-auto">
            {menuItems.map((item) => (
                <Link href={item.href} key={item.label} className="text-sm">
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default Menu;