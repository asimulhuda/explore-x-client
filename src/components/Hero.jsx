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
        autoplay={{ delay: 10000 }}
        className="mySwiper"
      >
        <SwiperSlide className="slider-1">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-4  min-h-[70vh] flex flex-col justify-center">
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="lg:text-5xl text-3xl font-semibold text-[#F87150] lg:pb-4"
            >
              Find your prefect
            </h3>
            <h2
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6"
            >
              VACATION
            </h2>
            <div data-aos="fade" data-aos-duration="2000" className="mt-4">
              <p className="text-lg text-[#DAE5FF] mb-4 ">
                Italy, Rome, Venice , Milan
              </p>
              <Link to="/tourlist">
                <Button size="lg" className="bg-[#F87150]">
                  Learn More
                </Button>
              </Link>
              s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-2">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-10  min-h-[70vh] flex flex-col justify-center">
            <h3
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="lg:text-5xl text-3xl font-normal text-white uppercase"
            >
              Open your eyes to
            </h3>
            <h2
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6"
            >
              The Hidden World
            </h2>
            <Link data-aos="fade" data-aos-duration="2000" to="/tourlist">
              <Button size="lg" className="bg-[#fff] text-black ">
                Learn More
              </Button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-3">
          <div className="lg:max-w-[1200px] lg:mx-auto mx-10 space-y-4  min-h-[70vh] flex flex-col justify-center">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="2000"
              className="lg:text-[81px] text-6xl font-semibold text-white lg:mb-6"
            >
              Special
            </h2>
            <h3
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:text-5xl text-3xl font-semibold text-[#F87150] lg:pb-4"
            >
              7 Days in Switzerland
            </h3>
            <div data-aos="fade" data-aos-duration="2000" className="">
              <p className="text-lg text-[#DAE5FF] mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <Link to="/details/66329f081706bf75f6225b73">
                <Button size="lg" className="bg-[#F87150]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
