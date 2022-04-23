import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useAppContextValue } from "../context/context";
import Filter from "./Filter";
import JobContainer from "./JobContainer";
import JobInfoContainer from "./JobInfoContainer";

//utility
const Acc_func = (acc, value, attribute) => {
  // const { attribute } = value;
  if (!attribute) return acc;
  if (!acc[attribute]) acc[attribute] = { label: attribute, value: 1, ischecked: false };
  else {
    acc[attribute] = {
      ...acc[attribute],
      value: acc[attribute].value + 1,
    };
  }
  return acc;
};

const Arr_func = (obj) => {
  return Object.values(obj)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
};

//objects

const JobSection = () => {
  const { state } = useAppContextValue();
  // console.log(useAppContextValue());

  const jobType = [...state.jobArray].reduce((acc, value) => {
    const { job_type } = value;
    // // console.log(job_type);
    // if (!job_type) return acc;

    // if (!acc[job_type]) acc[job_type] = { label: job_type, value: 1 };
    // else {
    //   acc[job_type] = {
    //     ...acc[job_type],
    //     value: acc[job_type].value + 1,
    //   };
    // }
    // return acc;
    return Acc_func(acc, value, job_type);
  }, {});

  const jobLocation = [...state.jobArray].reduce((acc, value) => {
    const { candidate_required_location } = value;
    // console.log(job_type);
    // if (!candidate_required_location) return acc;

    // if (!acc[candidate_required_location])
    //   acc[candidate_required_location] = { label: candidate_required_location, value: 1 };
    // else {
    //   acc[candidate_required_location] = {
    //     ...acc[candidate_required_location],
    //     value: acc[candidate_required_location].value + 1,
    //   };
    // }
    // return acc;
    return Acc_func(acc, value, candidate_required_location);
  }, {});

  // console.log(jobType, jobLocation);

  const typeArray = Arr_func(jobType);
  const locationArray = Arr_func(jobLocation);

  // console.log(typeArray, locationArray);
  return (
    <Grid as="section" gridTemplateColumns="1fr 2fr 3fr" gap={10}>
      {/* <GridItem w="100%" bgColor="#1c1c24" borderRadius="10" p={5}> */}
      <GridItem w="100%">
        <Filter list={typeArray} heading="Type of Employment" />
        <Filter list={locationArray} heading="Job Location" />
      </GridItem>

      <GridItem w="100%">
        <JobContainer />
      </GridItem>

      <GridItem w="100%" maxW="100%">
        <JobInfoContainer />
      </GridItem>
    </Grid>
  );
};

export default JobSection;
