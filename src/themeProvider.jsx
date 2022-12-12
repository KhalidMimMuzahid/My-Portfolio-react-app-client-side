import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const newTheme = localStorage.getItem("theme");
let initialState;
if (newTheme === "dark") {
  initialState = { darkMode: false };
} else if (newTheme === "light") {
  initialState = { darkMode: true };
} else {
  initialState = { darkMode: false };
}
// const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
