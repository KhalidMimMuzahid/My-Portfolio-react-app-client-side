import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="mt-20 py-0">
      <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center py-4">
          <Outlet />
        </div>
        <div className="drawer-side border-r-4 border-slate-500">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/add-project" className="btn my-1">
                Add Project
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-project" className="btn my-1">
                My Projects
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-skill" className="btn my-1">
                Add Skill
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-skill" className="btn my-1">
                My Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
