import GeneralContainer from "@/components/GeneralContainer";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/Contact/ContactForm";
import ContactDecorations from "@/components/Contact/ContactDecorations";

const ContactPage = () => {
    return (
        <GeneralContainer image="/hero/hero.png" alt="Kontakt" containerClassName="bg-light-grey" afterColorClassName="lg:after:bg-brown" decorations={<ContactDecorations />}>
            <Badge className="mb-4">Kontakt</Badge>
            <h1 className="text-[32px] md:text-[40px] leading-[120%] mb-3 text-dark -tracking-[0.06em]">Skontaktuj się <span className="text-secondary font-secondary">z nami</span></h1>
            <p className="text-base leading-[150%] font-light mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <ContactForm />
        </GeneralContainer>
    );
};

export default ContactPage;