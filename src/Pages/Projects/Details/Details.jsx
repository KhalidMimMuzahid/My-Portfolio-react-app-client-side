import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const project = useLoaderData();
  const {
    projectName,
    objectives,
    systemFeatures,
    introduction,
    toolsAndTechnologies,
    thumbNail,
    clientSide,
    serverSide,
    liveSite,
    _id,
  } = project;
  return (
    <div className="card mx-2 md:mx-20 lg:mx-28 xl:mx-36 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={thumbNail} alt="Shoes" />
      </figure>
      <div className="card-body mx-0 px-0">
        <h2 className="card-title font-extrabold">{projectName}</h2>
        <p className=" text-justify">
          <span className="font-extrabold">Introduction: </span>
          {introduction}
        </p>
        <p>
          <span className="font-extrabold">Objective:</span>
          <ul className="list-disc ml-8">
            {objectives.map((eachObjective) => (
              <li
                className=" text-justify"
                key={objectives.indexOf(eachObjective)}
              >
                {eachObjective}
              </li>
            ))}
          </ul>
        </p>
        <p>
          <span className="font-extrabold">System Features:</span>
          <ul className="list-disc ml-8">
            {systemFeatures.map((eachSystem) => (
              <li
                className="text-justify"
                key={systemFeatures.indexOf(eachSystem)}
              >
                {eachSystem}
              </li>
            ))}
          </ul>
        </p>
        <p>
          <span className="font-extrabold">Tools and Technology:</span>{" "}
          {toolsAndTechnologies?.map((eachTools) => (
            <span key={toolsAndTechnologies.indexOf(eachTools)}>
              {eachTools},{" "}
            </span>
          ))}{" "}
        </p>
        <div className="card-actions justify-end">
          <a
            target="_blank"
            href={clientSide}
            className="btn btn-primary btn-sm"
          >
            Client Side
          </a>
          <a
            target="_blank"
            href={serverSide}
            className="btn btn-primary btn-sm"
          >
            Server Side
          </a>
          <a target="_blank" href={liveSite} className="btn btn-primary btn-sm">
            Live Site
          </a>
          {/* <div className="badge badge-outline">Products</div> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
