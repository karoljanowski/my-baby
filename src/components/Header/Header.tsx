import Logo from "@/components/Header/Logo";
import Menu from "@/components/Header/Menu";
import Icons from "@/components/Header/Icons";
import Info from "@/components/Header/Info";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-background left-0 right-0">
            <Info />
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-5 gap-16">
                    <Logo />
                    <Menu />
                    <Icons />
                </div>
            </div>
        </div>
    );
};

export default Header;