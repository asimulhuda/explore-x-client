import { FaRegClock, FaRegLightbulb, FaUserClock } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LiaCreditCardSolid } from "react-icons/lia";

const SeconfSection = () => {
  return (
    <div className="services-action-bg">
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-16">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2000"
          className=" grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 text-white"
        >
          <div className="flex flex-col p-4 space-y-6">
            <FaRegLightbulb className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">Clever System</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <IoIosCloudDownload className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">Service</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <LiaCreditCardSolid className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">Credit Cards</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <FaRegClock className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">Great Timing</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <FaUserClock className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">
              Smart Diversification
            </h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-6">
            <IoLocationOutline className="text-4xl" />
            <h3 className="my-3 text-2xl font-semibold">We Are Everywhere</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeconfSection;
