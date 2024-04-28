import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 6000 }}
        className="mySwiper"
      >
        <SwiperSlide className="slider-1">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-4  min-h-[70vh] flex flex-col justify-center">
            <h2 className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6">
              Special
            </h2>
            <h3 className="lg:text-5xl text-3xl font-semibold text-[#F87150] lg:pb-4">
              7 Days in Switzerland
            </h3>
            <p className="text-lg text-[#DAE5FF]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/services">
              <Button size="lg" className="bg-[#F87150]">
                Learn More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-4  min-h-[70vh] flex flex-col justify-center">
            <h2 className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6">
              Special
            </h2>
            <h3 className="lg:text-5xl text-3xl font-semibold text-[#F87150] lg:pb-4">
              7 Days in Switzerland
            </h3>
            <p className="text-lg text-[#DAE5FF]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/services">
              <Button size="lg" className="bg-[#F87150]">
                Learn More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-3">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-4  min-h-[70vh] flex flex-col justify-center">
            <h2 className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6">
              Special
            </h2>
            <h3 className="lg:text-5xl text-3xl font-semibold text-[#F87150] lg:pb-4">
              7 Days in Switzerland
            </h3>
            <p className="text-lg text-[#DAE5FF]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <Link to="/services">
              <Button size="lg" className="bg-[#F87150]">
                Learn More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
