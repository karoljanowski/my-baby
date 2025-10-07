import GeneralContainer from "@/components/GeneralContainer";
import AuthTop from "@/components/Auth/AuthTop";
import SignInForm from "@/components/Auth/SignInForm";

const SignInPage = () => {
    return (
        <GeneralContainer image="/hero/hero.png" alt="Zaloguj się i zacznij tworzyć dziennik" containerClassName="bg-white">
            <AuthTop 
            title={<>Zaloguj się i <span className='text-secondary font-secondary'>zacznij</span> teraz tworzyć dziennik</>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." 
            /> 
            <SignInForm />
        </GeneralContainer>
    );
};

export default SignInPage;