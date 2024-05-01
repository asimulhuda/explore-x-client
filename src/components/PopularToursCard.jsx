import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { FaRegClock } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const PopularToursCard = ({ singleCard }) => {
  const {
    averageCost,
    touristSpotName,
    travelTime,
    image,
    totalVisitorsPerYear,
    seasonality,
    _id,
  } = singleCard;
  return (
    <div>
      <Card className="rounded-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={image}
            className="w-full hover:scale-110 duration-300 h-[300px]"
          />
        </CardHeader>
        <CardBody className="space-y-4">
          <Typography variant="h4" color="blue-gray">
            {touristSpotName}
          </Typography>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h4 className="flex items-center gap-6">
                <PiClockCountdownBold className="text-[#f97150] text-2xl" />
                <span>{travelTime}</span>
              </h4>
              <h4 className="flex items-center gap-6">
                <TiWeatherPartlySunny className="text-[#f97150] text-2xl" />
                {seasonality}
              </h4>
              <h4 className="flex items-center gap-6">
                <MdPeopleOutline className="text-[#f97150] text-2xl" />
                {totalVisitorsPerYear}
              </h4>
            </div>
            <Typography className="font-extrabold text-[#f97150] text-2xl">
              ${averageCost}
            </Typography>
          </div>
        </CardBody>
        <CardFooter>
          <Link to={`/details/${_id}`}>
            <Button size="lg" className="w-full bg-[#F97150]">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PopularToursCard;
