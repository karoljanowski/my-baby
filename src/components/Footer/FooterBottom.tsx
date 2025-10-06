import Link from "next/link";

const FooterBottom = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 justify-between py-8 border-t border-white/30">
            <span>
                &copy; {new Date().getFullYear()} MyBaby. Wszelkie prawa zastrzeżone.
            </span>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link> 
        </div>
    );
};

export default FooterBottom;