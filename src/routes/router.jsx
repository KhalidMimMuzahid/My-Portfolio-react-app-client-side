import Landing from "../Layout/Landing/Landing";
import AboutRoute from "../Pages/AboutRoute/AboutRoute";
import Blogs from "../Pages/Blogs/Blogs";
import ContactRoute from "../Pages/ContactRoute/ContactRoute";
import AllProjects from "../Pages/Projects/AllProjects";
import Details from "../Pages/Projects/Details/Details";
import ShowAllProjects from "../Pages/Projects/ShowAllProjects/ShowAllProjects";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        // loader: ({ params }) => params.route,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <AboutRoute />,
      },
      {
        path: "/projects",
        element: <AllProjects />,
        children: [
          { path: "/projects", element: <ShowAllProjects /> },
          {
            path: "/projects/details/:_id",
            loader: async ({ params }) =>
              fetch(
                `https://my-portfolio-snowy-zeta.vercel.app/projects/details?_id=${params._id}`
              ),
            element: <Details />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactRoute />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
