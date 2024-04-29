import React, { useContext } from "react";
import {
  MobileNav,
  Button,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/exploreX.png";
import { AuthContext } from "../provider/AuthProvider";
import userImage from "../assets/user.png";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const profileMenuItems = (
    <ul className="space-y-4 p-4 text-center">
      <Typography as="li">
        <NavLink to="/addnewtour" className="text-lg font-normal">
          Add New Tour
        </NavLink>
      </Typography>
      <Typography as="li">
        <NavLink to="/mylist" className="text-lg font-normal">
          My List
        </NavLink>
      </Typography>
      <Typography as="li">
        <Button
          onClick={handleLogOut}
          variant="gradient"
          size="md"
          color="red"
          className="text-lg w-full"
        >
          LogOut
        </Button>
      </Typography>
    </ul>
  );

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
      {user && (
        <>
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
        </>
      )}
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
                {user ? (
                  <>
                    <Menu
                      open={isMenuOpen}
                      handler={setIsMenuOpen}
                      placement="bottom-end"
                    >
                      <MenuHandler>
                        <Button
                          variant="text"
                          color="blue-gray"
                          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                        >
                          <Avatar
                            variant="circular"
                            size="md"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src={user.photoURL ? user.photoURL : userImage}
                          />
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${
                              isMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </MenuHandler>
                      <MenuList className="w-80">
                        <div className="py-4 space-y-2 text-center">
                          <Avatar
                            variant="circular"
                            alt="tania andrew"
                            className="border w-24 h-24 border-gray-900 p-0.5"
                            src={user.photoURL ? user.photoURL : userImage}
                          />
                          <h4 className="text-xl font-semibold">
                            {user?.displayName}
                          </h4>
                          <p>{user?.email}</p>
                        </div>
                        <MenuItem>{profileMenuItems}</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Link to="/register">
                      <Button
                        variant="outlined"
                        size="lg"
                        className="hidden lg:inline-block"
                      >
                        Register
                      </Button>
                    </Link>

                    <Link to="/login">
                      <Button
                        variant="gradient"
                        size="lg"
                        className="hidden lg:inline-block"
                      >
                        Login
                      </Button>
                    </Link>
                  </>
                )}
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
            <div className="flex items-center gap-x-2">
              {user ? (
                <Button
                  onClick={handleLogOut}
                  fullWidth
                  variant="gradient"
                  size="md"
                  className=""
                >
                  LogOut
                </Button>
              ) : (
                <>
                  <Link to="register" className="w-full">
                    <Button fullWidth variant="outlined" size="md" className="">
                      Register
                    </Button>
                  </Link>
                  <Link to="/login" className="w-full">
                    <Button fullWidth variant="gradient" size="md" className="">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </MobileNav>
        </div>
      </div>
    </div>
  );
};

export default Header;
