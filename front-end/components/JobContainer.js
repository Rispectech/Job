import React from "react";
import { useAppContextValue } from "../context/context";

const JobContainer = () => {
  const value = useAppContextValue();
  console.log(useAppContextValue());
  return <div>JobContainer</div>;
};

export default JobContainer;
