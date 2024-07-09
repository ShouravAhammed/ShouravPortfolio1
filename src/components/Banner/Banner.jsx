import { Typewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Banner = () => {
    return (
        <div className="my-9 md:my-0">
            <div className="flex flex-col-reverse justify-center items-center md:flex-row h-[calc(100vh-75px)] md:gap-0 gap-5">
                <div className=" flex-1 md:text-left text-center">
                    <h1 className="text-5xl lg:text-8xl font-bold">
                        <span className="text-3xl">Hello,</span> <br /> I'm{" "}
                        <span className="text-[#0b7986]">Shourav Ahammed</span>
                    </h1>
                    <p className="mt-3 text-3xl">
                        I'm a{" "}
                        <span className="font-normal text-[#0b7986]">
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={[
                                    "Fronted Developer",
                                    "Junior Web Developer",
                                    "Coder",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                    <div className="mt-10 flex gap-5">
                        <button className="uppercase font-bold rounded-md px-5 py-3 tracking-wider text-md bg-[#0b7986]">
                            Projects
                        </button>
                        <button className="uppercase font-bold rounded-md px-5 py-3 tracking-wider text-md bg-[#0b7986]">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative rotate-3 bg-red-300 rounded-2xl">
                        <Tilt
                            options={defaultOptions}
                            className="md:w-[300px] w-[250px]"
                        >
                            <img
                                className="h-full w-full object-cover rounded-2xl"
                                src="/src/assets/image/banner.jpg"
                                alt=""
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
