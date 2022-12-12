import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import EachProject from "../Pages/Projects/ShowAllProjects/EachProject/EachProject";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("https://my-portfolio-snowy-zeta.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  return (
    <div className="my-12 max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
      <h1 className="font-bold text-2xl text-center my-8">What i built</h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProjects.length > 0 &&
          allProjects?.map((eachProject) => (
            <EachProject
              key={allProjects.indexOf(eachProject)}
              eachProject={eachProject}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
