import GeneralContainer from "@/components/GeneralContainer";
import AuthDecorations from "@/components/Auth/AuthDecorations";
import AuthTop from "@/components/Auth/AuthTop";
import RequestResetPasswordForm from "@/components/Auth/RequestResetPasswordForm";

const RequestResetPasswordPage = () => {
    return (
        <GeneralContainer image="/images/login.png" alt="Zaloguj się i zacznij tworzyć dziennik" containerClassName="bg-white" decorations={<AuthDecorations />}>
            <AuthTop title="Wyślij prośbę o resetowanie hasła" description="Wpisz swój adres e-mail, aby otrzymać link do resetowania hasła" backLink="/logowanie" />
            <RequestResetPasswordForm />
        </GeneralContainer>
    );
};

export default RequestResetPasswordPage;