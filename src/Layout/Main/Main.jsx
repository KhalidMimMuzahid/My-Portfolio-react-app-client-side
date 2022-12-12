import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../../Pages/SharedPages/Navbar/Navbar";
import Footer from "../../Pages/SharedPages/Footer/Footer";

const Main = () => {
  const route = useLoaderData();
  // console.log("route", route);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
