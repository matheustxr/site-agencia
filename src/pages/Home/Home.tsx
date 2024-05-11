import SectionOneHome from "./Sections/SectionOne/SectionOne";
import SectionTwoHome from "./Sections/SectionTwo/SectionTwo";
import SectionThreeHome from "./Sections/SectionThree/SectionThree";
import SectionFourHome from "./Sections/SectionFour/SectionFour";
import Decolar from "../../components/Decolar/Decolar";

export default function Home() {
    return (
        <>
            <SectionOneHome />
            <SectionTwoHome />
            <SectionThreeHome />
            <SectionFourHome />
            <Decolar />
        </>
    )
}