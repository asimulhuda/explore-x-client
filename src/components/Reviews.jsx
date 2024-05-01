import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 my-16 space-y-10 text-white">
      <div className="text-center">
        <h2 className="lg:text-3xl text-2xl font-bold text-black">
          Customer Reviews
        </h2>
      </div>
      <Swiper
        breakpoints={{
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#F97150]">
          <div className="flex flex-col max-w-sm mx-4">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-default-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Amazing experience, exceeded expectations. Highly recommended.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-default-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-default-600 dark:text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">Jhon</p>
              <p className="text-sm uppercase">Luxury Italy Tour</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F97150]">
          <div className="flex flex-col max-w-sm mx-4 ">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-default-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Great value, knowledgeable guide, unforgettable memories. Book
                again!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-default-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-default-600 dark:text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                Machu Picchu Expedition
              </p>
              <p className="text-sm uppercase">Maria</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F97150]">
          <div className="flex flex-col max-w-sm mx-4">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-default-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Efficient booking, seamless journey, breathtaking sights. Will
                return soon!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-default-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-default-600 dark:text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                Parisian Adventure
              </p>
              <p className="text-sm uppercase">Emily</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#F97150]">
          <div className="flex flex-col max-w-sm mx-4">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-default-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Incredible itinerary, friendly staff, smooth logistics. Best
                trip ever!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-default-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-default-600 dark:text-gray-50">
              <img
                src="https://source.unsplash.com/50x50/?portrait?4"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-300"
              />
              <p className="text-xl font-semibold leading-tight">
                Safari Expedition
              </p>
              <p className="text-sm uppercase">Devid</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
