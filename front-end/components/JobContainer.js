import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppContextValue } from "../context/context";
import JobCard from "./JobCard";

const JobContainer = () => {
  const { state } = useAppContextValue();
  console.log(state.jobArray.slice(0, 5));
  return (
    <Box
      as="section"
      overflow="scroll"
      maxH="80vh"
      overflowX="hidden"
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
    >
      {state.jobArray.slice(0, 10).map((item, index) => {
        return <JobCard {...item} />;
      })}
    </Box>
  );
};

export default JobContainer;
