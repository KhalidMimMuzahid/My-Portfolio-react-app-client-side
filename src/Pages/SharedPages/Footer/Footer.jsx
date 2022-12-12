import React from "react";
import khalidMimMuzahid from "../../../assets/images/Khalid Mim Muzahid.jpg";
import { contactLinks } from "../../../constants";
const Footer = () => {
  return (
    <div className="mx-auto ">
      <footer className="footer p-10 bg-neutral text-neutral-content flex flex-col md:flex-row md:justify-around items-center">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="avatar w-16 text-center mx-auto">
            <img
              className="w-full rounded-full"
              src={khalidMimMuzahid}
              alt=""
            />
          </div>
          <p className="font-bold">
            <span>Khalid Mim Muzahid</span>
            <br />
            MERN Stack Developer
          </p>
        </div>
        <div>
          <p className="footer-title  mx-auto">Social</p>
          {/* <div className="grid grid-flow-col gap-4">
          
          </div> */}
          <div className="flex md:justify-start ">
            {contactLinks.map((el) => (
              <a
                target="_blank"
                href={el.link}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt="" src={el.url} />
                {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
