import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PiClockCountdownBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const PopularToursCard = () => {
  return (
    <div>
      <Link>
        <Card className="overflow-hidden rounded-none">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://max-themes.net/demos/traveltour/demo2/upload/shutterstock_154497503-400x285.jpg"
              alt="ui/ux review check"
              className="w-full hover:scale-110 duration-300"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              Austria – 6 Days in Vienna, Hallstatt
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center -space-x-3 gap-6">
              <PiClockCountdownBold className="text-[#f97150] text-2xl" />
              <span> 2 Days 1 Night</span>
            </div>
            <Typography className="font-extrabold text-[#f97150] text-2xl">
              $2,800
            </Typography>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default PopularToursCard;
