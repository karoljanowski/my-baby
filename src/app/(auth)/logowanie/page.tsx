import AuthContainer from "@/components/Auth/AuthContainer";
import AuthTop from "@/components/Auth/AuthTop";
import SignInForm from "@/components/Auth/SignInForm";

const SignInPage = () => {
    return (
        <AuthContainer image="/hero/hero.png">
            <AuthTop 
            title={<>Zaloguj się i <span className='text-secondary font-secondary'>zacznij</span> teraz tworzyć dziennik</>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." 
            /> 
            <SignInForm />
        </AuthContainer>
    );
};

export default SignInPage;