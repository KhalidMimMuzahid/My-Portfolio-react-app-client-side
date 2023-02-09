import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../../../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
// import { BiMenu } from "@react-icons/all-files/Bi/BiMenu";
import Hamburger from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";
import khalidMimMuzahid from "../../../assets/images/Khalid Mim Muzahid.jpg";
import { HashLink } from "react-router-hash-link";
import { MyContext } from "../../../contexts/MyProvider/MyProvider";
const Navbar = ({ theme: daisyTheme, setTheme }) => {
  const { currentUser } = useContext(MyContext);
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location?.pathname);
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/#about",
    },
    // {
    //   name: "Services",
    //   route: "services",
    // },
    {
      name: "Projects",
      route: "/#project",
    },
    {
      name: "Contact",
      route: "/#contact",
    },
    {
      name: "Blogs",
      route: "/blogs",
    },
  ];

  const dashboard = (
    <li className="cursor-pointer">
      <HashLink
        // onClick={() => handleClick(el.route)}
        onClick={() => setToggle(false)}
        to="/dashboard"
        activeClass={"text-white bg-blue-500"}
        className={
          darkMode
            ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
            : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
        }
      >
        Dashboard
      </HashLink>
    </li>
  );
  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      theme.dispatch({ type: "DARKMODE" });
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }
  // const handleClick = (route, isMobileView = false) => {
  //   if (isMobileView) {
  //     setToggle(false);
  //   }
  //   navigate(route);
  // };
  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2  md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={`block
                ${
                  darkMode
                    ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                    : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
                }
              `}
            >
              {/* {`Khalid`} */}
              <div className="flex items-center">
                <div className="avatar w-16">
                  <img
                    className="w-full rounded-full"
                    src={khalidMimMuzahid}
                    alt=""
                  />
                </div>
                <h1 className="font-bold ml-2 hidden lg:block">
                  Khalid Mim Muzahid
                </h1>
              </div>
            </a>

            {location?.pathname.startsWith("/dashboard") && (
              <label
                htmlFor="dashboard"
                className="drawer-button  lg:hidden hover:cursor-pointer text-slate-100 ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>
            )}
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              class={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((el) => (
                <li className="cursor-pointer">
                  <HashLink
                    // onClick={() => handleClick(el.route)}
                    onClick={() => setToggle(false)}
                    to={el.route}
                    activeClass={"text-white bg-blue-500"}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </HashLink>
                </li>
              ))}
              {currentUser && dashboard}
            </ul>
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt=""
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt=""
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <HashLink
                  // onClick={() => handleClick(el.route, true)}
                  onClick={() => setToggle(false)}
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    darkMode
                      ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                >
                  <li>{el.name}</li>
                </HashLink>
              ))}
              {dashboard}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
{
  /* <Link
onClick={() => handleClick(el.route)}
to={el.route}
activeClass={"text-white bg-blue-500"}
spy={true}
smooth={true}
className={
  darkMode
    ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
    : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
}
>
{el.name}
</Link> */
}
