import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PiClockCountdownBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const PopularToursCard = ({ singleCard }) => {
  const { averageCost, touristSpotName, travelTime, image, _id } = singleCard;
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
            <div className="flex items-center -space-x-3 gap-6">
              <PiClockCountdownBold className="text-[#f97150] text-2xl" />
              <span>{travelTime}</span>
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
