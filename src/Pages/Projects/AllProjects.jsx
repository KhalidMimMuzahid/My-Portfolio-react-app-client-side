import React from "react";
import { Outlet } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="mt-16 py-2">
      <Outlet />
    </div>
  );
};

export default AllProjects;
