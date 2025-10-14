import GeneralContainer from "@/components/GeneralContainer";
import AuthDecorations from "@/components/Auth/AuthDecorations";
import AuthTop from "@/components/Auth/AuthTop";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";

const ResetPasswordPage = async ({ params }: { params: Promise<{ token: string }> }) => {
    const { token } = await params;
    return (
        <GeneralContainer image="/images/login.png" alt="Zaloguj się i zacznij tworzyć dziennik" containerClassName="bg-white" decorations={<AuthDecorations />}>
            <AuthTop title="Zresetuj swoje hasło" description="Wpisz nowe hasło" backLink="/logowanie" />
            <ResetPasswordForm token={token} />
        </GeneralContainer>
    );
};

export default ResetPasswordPage;