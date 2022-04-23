import { ExternalLinkIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getRandomIntInclusive } from "../constants/functions";
import { useAppContextValue } from "../context/context";
import JobDescription from "./JobDescription";

const getDay = (date, num = 1) => {
  const diff = Math.round((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
  // console.log(diff);
  return [diff > num, `${diff} Days ago`];
};

const JobInfoContainer = () => {
  const { state } = useAppContextValue();
  const [jobItem, setJobItem] = useState(state.jobArray[0]);

  useEffect(() => {
    // console.log(state);
    if (state.jobArray && state.curItem) {
      console.log(state.curItem, "working");
      const tempItem = state.jobArray.filter((item) => item.id === state.curItem);
      //   console.log(tempItem);
      setJobItem(...tempItem);
      return;
    }
    setJobItem(state.jobArray[0]);
  }, [state]);
  console.log(jobItem);

  return (
    jobItem && (
      <Box
        as="section"
        bgColor="#1c1c24"
        borderRadius="10"
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
        <Box
          overflow="hidden"
          borderTopLeftRadius="10"
          borderTopRadius="10"
          maxH="240px"
          position="relative"
          zIndex="999"
        >
          <Image src={`/Images/${jobItem.aImage}`} h="100%" objectFit="cover" w="100%" />
        </Box>

        <Box zIndex="999" position="relative" p={10}>
          <Box w="10%" top="-10" zIndex="99" position="absolute">
            <Box bgColor="white" p={2} borderRadius="10" w="min-content" margin="auto">
              <Box w="5rem" h="5rem" borderRadius="10" overflow="hidden">
                <Image src={jobItem.company_logo} h="100%" w="100%" />
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt={10}
            py={2}
          >
            <Heading size="md">{jobItem.title}</Heading>

            <Box>
              <Box
                as="span"
                border="1px solid #9898a1"
                w="min-content"
                h="min-content"
                borderRadius="10"
                p={3}
                mr={2}
              >
                <SmallAddIcon color={"#9898a1"} w={5} h={5} />
              </Box>

              <Box
                as="span"
                border="1px solid #9898a1"
                w="min-content"
                h="min-content"
                borderRadius="10"
                p={3}
              >
                <ExternalLinkIcon color={"#9898a1"} w={5} h={5} />
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            py={2}
            mt={2}
          >
            <Text color="#1668fa">{jobItem.candidate_required_location}</Text>

            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
              <Text as="span" color="#76767e">
                Posted {getDay(jobItem.publication_date)[1]}
              </Text>
              <Text as="span" bg="white" borderRadius="50%" w={1} h={1}></Text>
              <Text as="span">{`${getRandomIntInclusive(20, 200)} Applicants`}</Text>
            </Box>
          </Box>
          <JobDescription jobString={jobItem.description} />
        </Box>
      </Box>
    )
  );
};

export default JobInfoContainer;
