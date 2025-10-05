import Link from "next/link";

const FooterBottom = () => {
    return (
        <div className="flex items-center justify-between py-8 border-t border-white/30">
            <span>
                &copy; {new Date().getFullYear()} MyBaby. Wszelkie prawa zastrzeżone.
            </span>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link> 
        </div>
    );
};

export default FooterBottom;