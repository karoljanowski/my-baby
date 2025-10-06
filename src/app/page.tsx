import Hero from "@/components/Hero/Hero";
import MeetDiary from "@/components/About/MeetDiary/MeetDiary";
import StartDiary from "@/components/About/StartDiary/StartDiary";

const Home = () => {
    return (
        <div>
            <Hero />
            <MeetDiary />
            <StartDiary />
        </div>
    );
};

export default Home;