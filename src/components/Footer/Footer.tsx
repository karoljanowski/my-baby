import FooterTop from "@/components/Footer/FooterTop";
import FooterBottom from "@/components/Footer/FooterBottom";

const Footer = () => {
    return (
        <div className="bg-green pt-8 md:pt-28 text-light-grey">
            <div className="container mx-auto px-4">
                <FooterTop />
                <FooterBottom />
            </div>
        </div>
    );
};

export default Footer;