import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../Component/Loader/Loader";
import { MyContext } from "../../../contexts/MyProvider/MyProvider";
import uploadImageToImageBB from "../../../utilities/uploadImageToImageBB/uploadImageToImageBB";

const AddProject = () => {
  const { logOut } = useContext(MyContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isPosting, setIsPosting] = useState(false);
  const [objective, setObjective] = useState([Date.now()]);
  const [systemFeature, setSystemFeature] = useState([`${Date.now()}1`]);

  const handleFormSubmit = (data) => {
    setIsPosting(true);
    // console.log(data);
    const {
      projectIntroduction,
      projectName,
      toolsAndTechnologies: toolsAndTechnologiesString,
      coverPhoto,
      clientSide,
      serverSide,
      liveSite,
    } = data;
    let toolsAndTechnologies = toolsAndTechnologiesString.split(",");
    const image = coverPhoto[0];
    const objectives = objective.map((eachObjective) => data[eachObjective]);
    const systemFeatures = systemFeature.map(
      (eachSystemFeature) => data[eachSystemFeature]
    );
    const postDate = moment().format();
    uploadImageToImageBB(image)
      .then((res) => res.json())
      .then((imageData) => {
        // console.log("image data", imageData);
        const imageLink = imageData?.data?.display_url;
        // console.log("imageLink", imageLink);
        // if image succesfully uploaded the image link have a link otherwise have a undefined value
        // if image succesfully uploaded , then ,
        if (imageLink) {
          const projectInfo = {
            projectName,
            objectives,
            introduction: projectIntroduction,
            systemFeatures,
            toolsAndTechnologies,
            thumbNail: imageLink,
            postDate,
            clientSide,
            serverSide,
            liveSite,
          };
          // console.log({ projectInfo });

          fetch("https://my-portfolio-snowy-zeta.vercel.app/add-project", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Barerer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(projectInfo),
          })
            .then((res) => {
              if (res.satus === 401 || res.status === 403) {
                logOut();
                toast.error("something went wrong, please try again");
                setIsPosting(false);
                reset();
                setObjective([Date.now()]);
                setSystemFeature([`${Date.now()}1`]);
                navigate("/signin");
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              if (data?.acknowledged) {
                toast.success("project inserted successfully");
                setIsPosting(false);
                reset();
                setObjective([Date.now()]);
                setSystemFeature([`${Date.now()}1`]);
              } else {
                toast.error("something went wrong, please try again");
                setIsPosting(false);
                reset();
                setObjective([Date.now()]);
                setSystemFeature([`${Date.now()}1`]);
              }
            });
        } else {
          toast.error("something went wrong, please try again");
        }
      });
  };
  return (
    <div className="w-full px-2 md:px-16 xl:px-28">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-6">
          <label
            for="project-name"
            className="block mb-2 text-lg font-medium light:text-black dark:text-white w-full"
          >
            Project Name
          </label>
          <input
            {...register("projectName", {
              required: {
                value: true,
                message: "you must provide project name",
              },
            })}
            type="text"
            id="project-name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your project name"
          />
          {errors?.projectName && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.projectName?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="project-introduction"
            className="block mb-2 text-lg font-medium light:text-gray-900 dark:text-white w-full"
          >
            project Introduction
          </label>
          <textarea
            {...register("projectIntroduction", {
              required: {
                value: true,
                message: "you must provide project Introduction",
              },
            })}
            type="text"
            id="project-introduction"
            className="bg-gray-50 border h-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your project Introduction"
          />
          {errors?.projectIntroduction && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.projectIntroduction?.message}
            </p>
          )}
        </div>

        <div className="mb-6" id="objective-parent">
          <div className="flex">
            <label
              for="project-name"
              className=" mb-2 text-lg font-medium light:text-gray-900 dark:text-white w-full"
            >
              Objectives
            </label>
            <span
              onClick={() => {
                setTimeout(() => {
                  // const thisObjective = moment().format();
                  const thisObjective = Date.now();
                  setObjective((prev) => {
                    const newObjective = [...prev, thisObjective];
                    return newObjective;
                  });
                }, 0);
              }}
              className="inline ml-4 hover:cursor-pointer hover:font-bold hover:text-green-700"
              title="add field"
            >
              {/* add field */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          {objective.map((eachObjective, index) => (
            <div id={eachObjective} key={eachObjective}>
              <div className="flex items-center">
                <input
                  {...register(`${eachObjective}`, {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                  })}
                  type="text"
                  // id={eachObjective}
                  className="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`type your Objective No ${index + 1}`}
                />
                <span
                  onClick={() => {
                    if (objective.length === 1) {
                      return alert("you must provide at least one objective");
                    }
                    setObjective((prev) => {
                      let newObjective = [...prev];
                      newObjective.splice(objective.indexOf(eachObjective), 1);
                      return newObjective;
                    });
                  }}
                  title="remove field"
                  className="font-extrabold text-lg ml-4 hover:cursor-pointer  hover:font-bold hover:text-green-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>

              {errors[`${eachObjective}`] && (
                <p role="alert" className="text-red-500 text-sm ">
                  {errors[`${eachObjective}`].message}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mb-6" id="system-features-parent">
          <div className="flex">
            <label
              for="system-features"
              className=" mb-2 text-lg font-medium light:text-gray-900 dark:text-white w-full"
            >
              System Features
            </label>
            <span
              onClick={() => {
                const thisSystemFeature = Date.now();
                setSystemFeature((prev) => {
                  const newSystemFeature = [...prev, thisSystemFeature];
                  return newSystemFeature;
                });
              }}
              className="inline ml-4 hover:cursor-pointer hover:font-bold hover:text-green-700"
              title="add field"
            >
              {/* add field */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
          {systemFeature.map((eachSystemFeature, index) => (
            <div id={eachSystemFeature} key={eachSystemFeature}>
              <div className="flex items-center">
                <input
                  {...register(`${eachSystemFeature}`, {
                    required: {
                      value: true,
                      message: "this field is required",
                    },
                  })}
                  type="text"
                  // id={eachObjective}
                  className="bg-gray-50 border my-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`type your SystemFeature No ${index + 1}`}
                />
                <span
                  onClick={() => {
                    if (systemFeature.length === 1) {
                      return alert(
                        "you must provide at least one SystemFeature"
                      );
                    }
                    setSystemFeature((prev) => {
                      let newSystemFeature = [...prev];
                      newSystemFeature.splice(
                        systemFeature.indexOf(eachSystemFeature),
                        1
                      );
                      return newSystemFeature;
                    });
                  }}
                  title="remove field"
                  className="font-extrabold text-lg ml-4 hover:cursor-pointer  hover:font-bold hover:text-green-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
              </div>

              {errors[`${eachSystemFeature}`] && (
                <p role="alert" className="text-red-500 text-sm ">
                  {errors[`${eachSystemFeature}`].message}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mb-6">
          <label
            for="tools-technologies"
            className="block mb-2 text-lg font-medium light:text-black dark:text-white w-full"
          >
            Tools & Technologies{" "}
            <span className="text-sm font-light">
              (seperate them using comma ",")
            </span>
          </label>
          <input
            {...register("toolsAndTechnologies", {
              required: {
                value: true,
                message: "you must provide tools And Technologies",
              },
            })}
            type="text"
            id="tools-technologies"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your tools And Technologies"
          />
          {errors?.toolsAndTechnologies && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.toolsAndTechnologies?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="client-side"
            className="block mb-2 text-lg font-medium light:text-black dark:text-white w-full"
          >
            GitHub client Side Link
          </label>
          <input
            {...register("clientSide", {
              required: {
                value: true,
                message: "you must provide GitHub client Side Link",
              },
            })}
            type="text"
            id="client-side"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your GitHub client Side Link"
          />
          {errors?.clientSide && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.clientSide?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="server-side"
            className="block mb-2 text-lg font-medium light:text-black dark:text-white w-full"
          >
            GitHub Server Side Link
          </label>
          <input
            {...register("serverSide", {
              required: {
                value: true,
                message: "you must provide GitHub Server Side Link",
              },
            })}
            type="text"
            id="server-side"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your GitHub Server Side Link"
          />
          {errors?.serverSide && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.serverSide?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            for="live-site"
            className="block mb-2 text-lg font-medium light:text-black dark:text-white w-full"
          >
            live Site Link
          </label>
          <input
            {...register("liveSite", {
              required: {
                value: true,
                message: "you must provide live Site Link",
              },
            })}
            type="text"
            id="server-side"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type your live Site Link"
          />
          {errors?.liveSite && (
            <p role="alert" className="text-red-500 text-sm ">
              {errors?.liveSite?.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            htmlFor="cover-photo"
          >
            Cover Photo
          </label>
          <input
            {...register("coverPhoto", {
              required: {
                value: true,
                message: "you must provide your Cover photo",
              },
            })}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="cover-photo"
            type="file"
            required
          />
          {errors?.coverPhoto && (
            <p role="alert" className="text-red-500 text-sm">
              {errors?.coverPhoto?.message}
            </p>
          )}
        </div>
        <button
          disabled={isPosting}
          type="submit"
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {isPosting && <Loader type="progressor" />}
    </div>
  );
};

export default AddProject;
