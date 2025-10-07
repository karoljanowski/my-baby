import AuthTop from "@/components/Auth/AuthTop";
import SignUpForm from "@/components/Auth/SignUpForm";
import GeneralContainer from "@/components/GeneralContainer";

const SignUpPage = () => {
    return (
        <GeneralContainer image="/hero/hero.png" alt="Zarejestruj się i zacznij tworzyć dziennik" containerClassName="bg-white">
            <AuthTop 
            title={<>Zarejestruj się i <span className='text-secondary font-secondary'>zacznij</span> teraz tworzyć dziennik</>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." 
            /> 
            <SignUpForm />
        </GeneralContainer>
    );
};

export default SignUpPage;