import AboutMe from "../components/AboutMe/AboutMe";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import CustomNav from "../components/Shared/Footer.jsx/CustomNav/CustomNav";
import NavMenu from "../components/Shared/NavMenu";
import AnimatedCursor from "react-animated-cursor";

const Root = () => {
    return (
        <div className="font-montserrat">
            {/* <CustomNav/> */}
            <NavMenu />
            <div className="container max-w-7xl mx-auto px-2">
                <Banner />
                <AboutMe />
                {/* <Experience/> */}
            </div>
            <Projects />
            <div className="container max-w-7xl mx-auto px-2">
                <Contact />
            </div>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "var(--cursor-color)",
                }}
                outerStyle={{
                    border: "3px solid var(--cursor-color)",
                }}
            />
        </div>
    );
};

export default Root;
