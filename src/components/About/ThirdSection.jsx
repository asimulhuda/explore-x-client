import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ThirdSection = ({ team }) => {
  const { image, name, position } = team;
  return (
    <div>
      <Card className="overflow-hidden rounded-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={image}
            alt="ui/ux review check"
            className="w-full h-[300px] hover:scale-110 duration-300 cursor-pointer opacity-80 hover:opacity-100 "
          />
        </CardHeader>
        <CardBody className="text-center space-y-2">
          <Typography variant="h6" color="blue-gray" className="uppercase">
            {name}
          </Typography>
          <Typography variant="small" color="blue-gray">
            {position}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ThirdSection;
