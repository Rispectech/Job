import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  ADD_PREFERENCE,
  RESEST_DATA,
  SET_FILTERS_LOCATION,
  SET_FILTERS_TYPE,
  SET_ITEM,
  SET_JOB,
  SET_LOADING,
  SET_PREFERENCE,
  SET_PREF_TRUE,
} from "../constants/actions";
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
  filterArray: [],
  pages: 0,
  curPage: 0,
  curItem: 0,
  jobType: [],
  jobLocation: [],
  prefArray: [],
  preference: false,
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

  console.log(state);

  const setItem = (id) => {
    console.log(id);
    dispatch({
      type: SET_ITEM,
      payload: id,
    });
  };

  const setFilterType = (filterArray) => {
    console.log(filterArray, "working");

    dispatch({
      type: RESEST_DATA,
    });
    dispatch({
      type: SET_FILTERS_TYPE,
      payload: filterArray,
    });
  };
  const setFilterLocation = (filterArray) => {
    dispatch({
      type: RESEST_DATA,
    });

    dispatch({
      type: SET_FILTERS_LOCATION,
      payload: filterArray,
    });
  };

  const fetchPreference = async () => {
    const response = await axios(localUrl + "/preference");
    console.log(response.data, response);
    dispatch({
      type: SET_PREFERENCE,
      payload: response.data,
    });
  };

  const addPreference = async (id) => {
    const response = await axios.post(`${localUrl}/preference/add`, { id });
    console.log(response);
  };

  const setPreference = (status = true) => {
    dispatch({
      type: SET_PREF_TRUE,
      payload: status,
    });
  };

  console.log(state);
  useEffect(() => {
    fetchData(localUrl);
  }, []);
  return (
    <AppContext.Provider
      value={{
        state,
        setItem,
        setFilterType,
        setFilterType,
        setFilterLocation,
        fetchPreference,
        addPreference,
        fetchPreference,
        setPreference,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { useAppContextValue, AppProvider };
