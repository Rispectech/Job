import React, { createContext, useContext, useEffect, useReducer } from "react";
import { SET_ITEM, SET_JOB, SET_LOADING } from "../constants/actions";
import reducer from "../reducer/reducer";
import axios from "axios";

const AppContext = createContext();
const localUrl = "http://localhost:8000/api/v1";

const useAppContextValue = () => {
  return useContext(AppContext);
};

const defaultState = {
  isLoading: true,
  jobArray: [],
  pages: 0,
  curPage: 0,
  curItem: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios(url);
      console.log(response.data);
      dispatch({
        type: SET_JOB,
        payload: { jobArray: response.data.jobs, pages: response.data["job-count"] },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setItem = (id) => {
    console.log(id);
    dispatch({
      type: SET_ITEM,
      payload: id,
    });
  };
  useEffect(() => {
    fetchData(localUrl);
  }, []);
  return <AppContext.Provider value={{ state, setItem }}>{children}</AppContext.Provider>;
};

export { useAppContextValue, AppProvider };
