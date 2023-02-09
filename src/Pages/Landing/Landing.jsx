import React from "react";
import About from "../../views/About";
import Contact from "../../views/Contact";
import Header from "../../views/Header";
import Projects from "../../views/Projects";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import About from "../../views/About";
// import Contact from "../../views/Contact";
// import Home from "../../views/Home";
// import Projects from "../../views/Projects";
// import Services from "../../views/Services";

const Landing = () => {
  // const navigate = useNavigate();
  // let route = "home";
  // route = useLoaderData();
  // console.log("route", route);
  // navigate(route);
  return (
    <div>
      <Header />
      <About />
      {/* <Services /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
