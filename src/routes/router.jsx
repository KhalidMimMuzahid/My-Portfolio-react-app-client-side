import Main from "../Layout/Main/Main";
import AboutRoute from "../Pages/AboutRoute/AboutRoute";
import Blogs from "../Pages/Blogs/Blogs";
import ContactRoute from "../Pages/ContactRoute/ContactRoute";
import AddProject from "../Pages/DashBoard/AddProject/AddProject";
import AddSkill from "../Pages/DashBoard/AddSkill/AddSkill";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import MySkills from "../Pages/DashBoard/MySkills/MySkills";
import Landing from "../Pages/Landing/Landing";
import AllProjects from "../Pages/Projects/AllProjects";
import Details from "../Pages/Projects/Details/Details";
import ShowAllProjects from "../Pages/Projects/ShowAllProjects/ShowAllProjects";
import SignIn from "../Pages/SignIn/SignIn";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
// const { default: Main } = require("../Layout/Main/Main");

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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashBoard />
          </PrivetRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <AddProject />,
          },
          {
            path: "/dashboard/add-project",
            element: <AddProject />,
          },
          {
            path: "/dashboard/my-project",
            element: <MyProducts />,
          },
          {
            path: "/dashboard/add-skill",
            element: <AddSkill />,
          },
          {
            path: "/dashboard/my-skill",
            element: <MySkills />,
          },
        ],
      },
    ],
  },
]);
