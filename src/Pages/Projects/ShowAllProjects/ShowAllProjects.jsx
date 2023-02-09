import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Loader from "../../../Component/Loader/Loader";
import EachProject from "./EachProject/EachProject";
const ShowAllProjects = () => {
  // const [allProjects, setAllProjects] = useState([]);
  // useEffect(() => {
  //   fetch("https://my-portfolio-snowy-zeta.vercel.app/projects")
  //     .then((res) => res.json())
  //     .then((data) => setAllProjects(data));
  // }, []);

  const {
    data: allProjects = [],
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        "https://my-portfolio-snowy-zeta.vercel.app/projects"
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="my-12">
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

export default ShowAllProjects;
