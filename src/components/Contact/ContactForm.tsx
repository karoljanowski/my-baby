import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
    return (
        <form className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <Label htmlFor="name">Imię</Label>
                <Input name="name" type="text" placeholder="Wprowadź imię" />
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="Wprowadź email" />
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea name="message" placeholder="Wprowadź wiadomość" />
            </div>
            <Button className="w-full md:w-3/4" type="submit">Wyślij</Button>
        </form>
    );
};

export default ContactForm;