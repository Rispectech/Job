import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const useAppContextValue = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return <AppContext.Provider value="value">{children}</AppContext.Provider>;
};

export { useAppContextValue, AppProvider };
