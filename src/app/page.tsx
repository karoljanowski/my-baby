import Hero from "@/components/Hero/Hero";
import MeetDiary from "@/components/About/MeetDiary/MeetDiary";
import StartDiary from "@/components/About/StartDiary/StartDiary";
import DiscoverDiary from "@/components/About/DiscoverDiary/DiscoverDiary";

const Home = () => {
    return (
        <div>
            <Hero />
            <MeetDiary />
            <StartDiary />
            <DiscoverDiary />
        </div>
    );
};

export default Home;