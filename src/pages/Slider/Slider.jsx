import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const Slider = () => {
    return (
        <NavigationSlider className="awesome-slider" bullets={false}>
            <div data-slug="home">
                <Home />
            </div>
            <div data-slug="about">
                <About />
            </div>
            <div data-slug="contact">
                <Contact />
            </div>
        </NavigationSlider>
    );
};

export default Slider;
