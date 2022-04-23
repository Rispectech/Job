import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const JobDescription = ({ jobString }) => {
  //   console.log(jobString);
  const DescRef = useRef(false);

  useEffect(() => {
    if (DescRef) {
      DescRef.current.innerHTML = jobString;
      //   console.log(div);
    }
  });
  return (
    <Box
      sx={{
        "& img": {
          width: "100% !important",
          maxW: "692px !important",
        },
        "& p": {
          width: "100% !important",
          maxW: "692px !important",
        },
      }}
    >
      <div ref={DescRef}></div>
    </Box>
  );
};

export default JobDescription;
