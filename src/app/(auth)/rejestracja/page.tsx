import AuthContainer from "@/components/Auth/AuthContainer";
import AuthTop from "@/components/Auth/AuthTop";
import SignUpForm from "@/components/Auth/SignUpForm";

const SignUpPage = () => {
    return (
        <AuthContainer image="/hero/hero.png">
            <AuthTop 
            title={<>Zarejestruj się i <span className='text-secondary font-secondary'>zacznij</span> teraz tworzyć dziennik</>}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." 
            /> 
            <SignUpForm />
        </AuthContainer>
    );
};

export default SignUpPage;