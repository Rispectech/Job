import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAppContextValue } from "../context/context";
import JobCard from "./JobCard";
import NextLink from "next/link";

const JobContainer = ({ preference }) => {
  const { state, fetchPreference } = useAppContextValue();

  useEffect(() => {
    fetchPreference();
  }, [preference]);
  // console.log(state.jobArray.slice(0, 5));
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
      {state.preference ? (
        state.prefArray.length > 0 ? (
          state.prefArray.map((item, index) => {
            const newItem = state.filterArray.filter((job) => {
              return job.id == item.id;
            });
            console.log(newItem);
            if (newItem) return <JobCard {...newItem[0]} />;
          })
        ) : (
          <Box
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={6}
            h="60vh"
          >
            <Heading>No saved job found</Heading>
            <Text color="#0b5fe6">Trying saving some jobs</Text>
            <NextLink href="/" passHref>
              <Button colorScheme="teal" size="md" mr={4}>
                <Link> All Jobs</Link>
              </Button>
            </NextLink>
          </Box>
        )
      ) : (
        state.jobArray.map((item, index) => {
          return <JobCard {...item} />;
        })
      )}
    </Box>
  );
};

export default JobContainer;
