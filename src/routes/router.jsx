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
import Details from "../pages/Details";
import MyList from "../pages/MyList";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://explore-x-server-nine.vercel.app/tour"),
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

        loader: () => fetch("/destinations.json"),
      },
      {
        path: "/tourlist",
        element: <TourList></TourList>,
        loader: () => fetch("https://explore-x-server-nine.vercel.app/tour"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>,
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addnewtour",
        element: (
          <PrivateRoute>
            <AddNewTour></AddNewTour>,
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/editplace/:id",
        element: (
          <PrivateRoute>
            <EditPlace></EditPlace>
          </PrivateRoute>
        ),
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
