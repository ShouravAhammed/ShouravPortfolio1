import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import SectionTitle from "../SectionTutle/SectionTitle";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="my-14">
            <SectionTitle
                heading={"About Me"}
                description={
                    " Here you will find more information about me, what I do,and my current skills mostly in terms of programming and technology"
                }
            ></SectionTitle>
            <div className="flex flex-col gap-10 lg:flex-row mt-12">
                <div className="flex-1">
                    <h3 className="font-bold text-4xl mb-6">Get to know me!</h3>
                    <div className="mb-4 text-lg space-y-3 leading-8">
                        <p>
                            I'm a Frontend Focused Web Developer building and
                            managing the Front-end of Websites and Web
                            Applications that leads to the success of the
                            overall product. Check out some of my work in the
                            Projects section.
                        </p>
                        <p>
                            I also like sharing content related to the stuff
                            that I have learned over the years in Web
                            Development so it can help other people of the Dev
                            Community. Feel free to Connect or Follow me on my
                            Linkedin and Instagram where I post useful content
                            related to Web Development and Programming
                        </p>
                        <p>
                            I'm open to Job opportunities where I can
                            contribute, learn and grow. If you have a good
                            opportunity that matches my skills and experience
                            then don't hesitate to contact me.
                        </p>
                    </div>
                    <button className="uppercase font-bold rounded-md px-5 py-3 tracking-wider text-md bg-[#0b7986]">
                        Contact Me
                    </button>
                </div>
                <div className="flex-1">
                    {/* <h3 className="font-bold text-4xl mb-5">My Skills</h3> */}
                    <Tabs>
                        <TabList>
                            <Tab>Skill</Tab>
                            <Tab>Education</Tab>
                        </TabList>

                        <div className="mt-6">
                            <TabPanel>
                                <div className="">
                                    <div className="grid grid-cols-5">
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-css3-144.png"
                                            alt=""
                                        />
                                        <Tooltip
                                            id="my-tooltip"
                                            style={{
                                                backgroundColor: "#0b7986",
                                            }}
                                            className="z-50 font-semibold tracking-wider"
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-bootstrap-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-html5-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-javascript-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-mongodb-144.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Node js"
                                            className="w-20 md:w-28 grayscale duration-500 hover:grayscale-0"
                                            src="/src/assets/image/skill/icons8-nodejs-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-20 md:w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-react-js-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-20 md:w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-tailwind-css-144.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex justify-center gap-3">
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-figma-144.png"
                                            alt=""
                                        />
                                        <img
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content="Hello world!"
                                            className="w-28 grayscale duration-500 hover:grayscale-0 "
                                            src="/src/assets/image/skill/icons8-express-js-128.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
