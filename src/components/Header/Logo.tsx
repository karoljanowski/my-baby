import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center justify-center">
            <Image src="/logo.svg" alt="Logo" width={113} height={32} className="w-auto h-auto" />
        </Link>
    );
};

export default Logo;