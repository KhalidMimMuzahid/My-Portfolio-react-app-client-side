import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import khalidMimMuzahid from "../assets/images/Khalid Mim Muzahid.jpg";
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div className=" mt-12 flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full">
              <h4 className=" text-3xl font-semibold text-blue-500">
                A bit about me
              </h4>
              <p
                className={
                  darkMode
                    ? "mt-4 text-xl text-justify text-gray-500"
                    : "mt-4 text-xl text-justify text-white"
                }
              >
                Hey, This is Khalid, A Quick Learner, and a self-motivated
                person. Actually, programming is my passion. I like so much to
                solve problems and I enjoy it. I mostly like to implement a full
                system with a unique idea. First, I think about the problem and
                then analyze it, how to break down this problem part by part and
                then merge it into a single process. Always i love learning new
                technologies and new things. This should be told that I love the
                error that occurred in my code because this helps to make me
                very thoughtful and internally strong and teaches me new things.
              </p>
            </div>
            <div className="ml-4">
              <div className="">
                <img
                  className="w-48 md:w-52 rounded-full"
                  src={khalidMimMuzahid}
                  alt=""
                />
              </div>
            </div>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Learning new technologies is my addiction and I know only learning
              can make me updated and confident. The technologies that I learned
              in my professional life, are given below
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 justify-between ">
            {techStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
