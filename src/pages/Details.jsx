import { Button, Checkbox, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaEarthAsia, FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [singleDetail, setSingleDetail] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tourDetails/${id}`)
      .then((data) => setSingleDetail(data.data));
  }, [id]);

  const {
    image,
    touristSpotName,
    countryName,
    location,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    description,
    userName,
  } = singleDetail;
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto mx-5 py-14 space-y-10">
      <div className="flex justify-between">
        <div className="space-y-2">
          <h3 className="text-3xl">{touristSpotName}</h3>
          <h4 className="flex items-center gap-3">
            <FaEarthAsia />
            {countryName}
          </h4>
          <h4 className="flex items-center gap-3">
            <IoLocationOutline />
            {location}
          </h4>
        </div>
        <h4 className="text-3xl">${averageCost}</h4>
      </div>

      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[850px] space-y-10">
          <img src={image} alt="" className="w-full lg:h-[600px]" />
          <div className="px-10 py-11 rounded-lg bg-[#FEF1ED] text-[18px]">
            <div className="pb-8 border-b border-gray-600">
              <p>Details</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 pt-6 space-y-2">
              <h4 className="flex items-center gap-3 text-xl">
                <TiWeatherPartlySunny />
                {seasonality}
              </h4>
              <h4 className="flex items-center gap-3 text-xl">
                <FaRegClock />
                {travelTime}
              </h4>
              <h4 className="flex items-center gap-3 text-xl">
                <MdPeopleOutline />
                {totalVisitorsPerYear}
              </h4>
            </div>
          </div>
          <div className="px-10 py-11 rounded-lg bg-[#FEF1ED] text-lg">
            <div className="pb-8 border-b border-gray-600">
              <p>Description</p>
            </div>
            <div className="pt-6">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[350px]">
          <div className="sticky top-32 px-7 py-10 bg-[#FEF1ED] rounded-lg space-y-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                Want to Know More About Package ?
              </h2>
              <span className="text-lg dark:text-gray-600">
                Contact : {userName}
              </span>
            </div>
            <form className="space-y-2">
              <Input
                className="rounded-lg bg-white"
                type="text"
                label="Name"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="number"
                label="Phone"
                required
              />
              <Input
                className="rounded-lg bg-white"
                type="email"
                label="Email"
                required
              />
              <Textarea className="rounded-lg bg-white" label="Massage" />

              <Checkbox
                label="By submitting this form I agree to Terms of Use"
                required
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
