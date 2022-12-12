import React from "react";
import { Link } from "react-router-dom";

const EachProject = ({ eachProject }) => {
  const {
    projectName,
    objective,
    systemFeatures,
    introduction,
    toolsAndTechnology,
    thumbNail,
    _id,
  } = eachProject;
  let intro = introduction;
  if (introduction.length > 100) {
    intro = introduction.slice(0, 100) + "...";
  }
  return (
    <div className="card w-full md:w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={thumbNail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{intro}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/projects/details/${_id}`}
            className="btn btn-primary btn-sm"
          >
            details
          </Link>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
};

export default EachProject;
