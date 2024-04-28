import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Destinations from "../pages/Destinations";
import Contact from "../pages/Contact";
import EditPlace from "../pages/EditPlace";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../shared/Error";
import TourList from "../pages/TourList";
import AddNewTour from "../pages/AddNewTour";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/destinations",
        element: <Destinations></Destinations>,
      },
      {
        path: "/tourlist",
        element: <TourList></TourList>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addnewtour",
        element: <AddNewTour></AddNewTour>,
      },
      {
        path: "/editplace",
        element: <EditPlace></EditPlace>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
