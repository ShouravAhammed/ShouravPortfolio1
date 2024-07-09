import './CustomNav.css'

const CustomNav = () => {
    return (
        <div className='container mx-w-7xl mx-auto'>
            <div className="header-wrapper">
                <div className="logo-box">
                    <div className="logo" data-aos="fade-down" data-aos-duration="3000">
                        <a href="/" title="Shaharia Afridi">S<span>A</span><span>.</span></a>
                    </div>
                </div>
                <div className="nav-bar">
                    <nav>
                        <ul className="nav-list">
                            <li data-aos="fade-down" data-aos-duration="3000"><a href="#hero">home</a></li>
                            <li data-aos="fade-up" data-aos-duration="3000"><a href="#about">about</a></li>
                            <li data-aos="fade-left" data-aos-duration="3000"><a href="#service">service</a></li>
                            <li data-aos="fade-right" data-aos-duration="3000"><a href="#portfolio">portfolio</a></li>
                            <li data-aos="zoom-in-down" data-aos-duration="3000"><a href="#testimonial">testimonial</a></li>
                            <li data-aos="zoom-in-up" data-aos-duration="3000"><a className="" href="#contact">contact</a></li>
                        </ul>
                    </nav>
                    <div className="three-dot-btn">
                        <div className="three-dot-line bg-red"></div>
                        <div className="three-dot-line "></div>
                        <div className="three-dot-line "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomNav;