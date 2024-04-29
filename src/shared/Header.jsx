import React from "react";
import {
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/exploreX.png";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li">
        <NavLink to="/about" className="text-lg font-normal">
          About
        </NavLink>
      </Typography>
      <Typography as="li">
        <NavLink to="/services" className="text-lg font-normal">
          Services
        </NavLink>
      </Typography>
      <Typography as="li">
        <NavLink to="/destinations" className="text-lg font-normal">
          Destinations
        </NavLink>
      </Typography>

      <Typography as="li">
        <NavLink to="/tourlist" className="text-lg font-normal">
          All Tours
        </NavLink>
      </Typography>
      <Typography as="li">
        <NavLink to="/addnewtour" className="text-lg font-normal">
          Add New Tour
        </NavLink>
      </Typography>
      <Typography as="li">
        <NavLink to="/contact" className="text-lg font-normal">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div className="bg-[#fff]">
      <div className="lg:max-w-[1200px] lg:mx-auto md:mx-5 mx-5">
        <div className="sticky top-0 z-10 h-max rounded-none py-2 lg:py-4 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link to="/">
              <img src={logo} alt="ExploreX" className="w-40" />
            </Link>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-2">
                <Link to="/login">
                  <Button
                    variant="outlined"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="gradient"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    Register
                  </Button>
                </Link>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav className="mt-4" open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
