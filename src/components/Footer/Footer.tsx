import FooterTop from "@/components/Footer/FooterTop";
import FooterBottom from "@/components/Footer/FooterBottom";

const Footer = () => {
    return (
        <div className="bg-green pt-28 text-white">
            <div className="container mx-auto">
                <FooterTop />
                <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;