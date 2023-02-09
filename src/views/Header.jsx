import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import developerPNG from "../assets/images/developer cover photo PNG.png";
const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const downloadResume = () => {
  //   // using Java Script method to get PDF file
  //   fetch("Khalid Mim Muzahid resume.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "Khalid Mim Muzahid resume.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am <br />
                Khalid Mim Muzahid
              </motion.span>
              <span className="block text-5xl text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "React JS Developer",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Front-End / MERN-Stack Developer. I am currently working
              for upgrading my skills as a MERN-Stack Developer
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                {/* <Link
                  onClick={downloadResume}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </Link> */}
                <a
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1kzy_mYXAwu0neBwzVf4i-eeJYCoRF0PL/view"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={developerPNG}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Header;
