// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css"

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import SectionTitle from "../SectionTutle/SectionTitle";

const Projects = () => {
  return (
    <div>
        <SectionTitle heading={'Projects'} description={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>
      {/* project slider */}

<div className="">
<Swiper
       initialSlide={2}
        effect={'coverflow'}
        autoplay={{
            delay: 3000,
          }}  
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div>
          <img className="rounded-xl"  src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
</div>
    </div>
  );
};

export default Projects;
