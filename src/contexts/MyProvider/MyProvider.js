import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToggle, setRefreshToggle] = useState(false);
  useEffect(() => {
    fetch("https://my-portfolio-snowy-zeta.vercel.app/checkCurrentUser", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Barerer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          logOut();
          setCurrentUser(null);
          setIsLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.status === "active-user") {
          setIsLoading(false);
          setCurrentUser(true);
        }
      });
  }, [refreshToggle]);
  const emailPasswordSignIn = (email, password) => {
    return fetch(
      `https://my-portfolio-snowy-zeta.vercel.app/signin?email=${email}&password=${password}`
    );
  };

  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("accessToken");
  };

  const info = {
    isLoading,
    currentUser,
    setCurrentUser,
    emailPasswordSignIn,
    logOut,
    setRefreshToggle,
  };
  return <MyContext.Provider value={info}>{children}</MyContext.Provider>;
};

export default MyProvider;
