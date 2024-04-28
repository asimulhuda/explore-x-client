import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="h-[80vh] flex flex-col justify-center items-center space-y-8 lg:space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="lg:text-9xl text-7xl font-bold">404</h2>
          <h3 className="lg:text-4xl text-xl font-extrabold">PAGE NOT FOUND</h3>
        </div>
        <Link to="/">
          <Button
            size="lg"
            variant="outlined"
            className="border-[#F97150] text-[#F97150]"
          >
            Go back to Home
          </Button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
