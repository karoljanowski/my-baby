import AboutTop from "@/components/About/AboutTop/AboutTop";
import DiscoverDiary from "@/components/About/DiscoverDiary/DiscoverDiary";
import StartDiary from "@/components/About/StartDiary/StartDiary";
import MeetDiary from "@/components/About/MeetDiary/MeetDiary";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "O nas | My Baby",
    description: "Dowiedz się więcej o naszym dzienniku i jego funkcjach.",
};

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