import AboutTop from "@/components/About/AboutTop/AboutTop";
import DiscoverDiary from "@/components/About/DiscoverDiary/DiscoverDiary";
import StartDiary from "@/components/About/StartDiary/StartDiary";
import MeetDiary from "@/components/About/MeetDiary/MeetDiary";

const AboutPage = () => {
    return (
        <div>
            <AboutTop />
            <MeetDiary />
            <StartDiary />
            <DiscoverDiary />
        </div>
    );
};

export default AboutPage;   