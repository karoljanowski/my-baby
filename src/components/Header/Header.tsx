import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderIcons from "@/components/Header/HeaderIcons";
import HeaderInfo from "@/components/Header/HeaderInfo";
import { verifySession } from "@/server/session";

const Header = async () => {
    const userId = await verifySession();
    const isLoggedIn = !!userId;

    return (
        <div className="sticky top-0 z-50 bg-background left-0 right-0">
            <HeaderInfo />
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-5 gap-4 md:gap-16">
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderIcons isLoggedIn={isLoggedIn} />
                </div>
            </div>
        </div>
    );
};

export default Header;