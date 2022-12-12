import React, { useContext, useRef } from "react";
import { useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const [emailInfo, setEmailInfo] = useState({});
  const form = useRef();

  // const handleInputBlur = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const oldEmailInfo = { ...emailInfo };
  //   oldEmailInfo[field] = value;
  //   setEmailInfo(oldEmailInfo);
  // };
  const handleContactMe = (e) => {
    e.preventDefault();
    // console.log(emailInfo);
    // console.log("form", form);

    emailjs
      .sendForm(
        "service_ox9ikgr",
        "template_6zpk2f1",
        form.current,
        "bw_L8FvgP5FjUIS9Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("email sent successfully");
            e.target.reset();
          }
        },
        (error) => {
          toast.error("something went wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className={` pt-8 ${darkMode ? "bg-gray-100 " : "bg-black text-white "}
      `}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-8 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          {/* <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p> */}
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-12">
          <div className="w-full md:pr-8">
            <form onSubmit={handleContactMe} ref={form}>
              <div class="my-2">
                <label
                  for="name"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  // onBlur={handleInputBlur}
                  type="text"
                  name="user_name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="email"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  // onBlur={handleInputBlur}
                  type="email"
                  id="email"
                  name="user_email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="subject"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Subject
                </label>
                <input
                  // onBlur={handleInputBlur}
                  type="text"
                  id="subject"
                  name="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email subject"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="message"
                  class={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  // onBlur={handleInputBlur}
                  id="message"
                  name="message"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-20 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                {/* exta way to  confirm me that a client try to hire me  */}
                {/* <div className="underline ">
                  <a href="mailto:aakash.sh858791@gmail.com">
                    Send me email directly
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
            {/* <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="hello"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              +91 8285631499
            </a> */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="#"
              className="mb-12 mt-4 font-semibold text-blue-700 block"
            >
              khalidmimm@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="hello"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block"
            >
              Mirpur, Dhaka
              <br />
              Bangladesh
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  target="_blank"
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Aakash Sharma
      </div> */}
    </div>
  );
};

export default Contact;
