import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
import { MyContext } from "../../contexts/MyProvider/MyProvider";

const PrivetRoute = ({ children }) => {
  const { isLoading, currentUser } = useContext(MyContext);
  console.log(isLoading, ":::::::", currentUser);
  if (isLoading) {
    return <Loader />;
  }
  console.log("current user", currentUser);
  if (!currentUser) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default PrivetRoute;
