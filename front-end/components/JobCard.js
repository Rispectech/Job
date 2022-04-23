import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import React from "react";
import { useAppContextValue } from "../context/context";

const getDay = (date, num = 1) => {
  const diff = Math.round((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
  // console.log(diff);
  return [diff > num, `${diff}d`];
};

const JobCard = ({
  company_logo,
  title,
  company_name,
  tags,
  category,
  job_type,
  candidate_required_location: location,
  id,
  publication_date,
}) => {
  const { setItem, state } = useAppContextValue();
  // console.log(state, id);
  const isActive = state.curItem === id;
  return (
    <Box
      bgColor={isActive ? "#3756d0" : "#1c1c24"}
      borderRadius="10"
      p={5}
      mb={4}
      onClick={() => setItem(id)}
    >
      <Box display="flex" flexDirection="row" gap="1rem" justifyContent="space-between" mb={4}>
        <Box display="flex" flexDirection="row" gap="1rem">
          <Box w="4.5rem" h="4.5rem" borderRadius="10" overflow="hidden" flexShrink="0">
            <Image src={company_logo} w="100%" h="100%" />
          </Box>

          <Box>
            <Heading size="md" mb={1}>
              {title}
            </Heading>
            <Text color={isActive ? "#9a9ce9" : "#76767e"}> {location}</Text>
          </Box>
        </Box>

        <Box
          border="1px solid #76767e"
          w="min-content"
          h="min-content"
          borderRadius="10"
          p={1}
        >
          <SmallAddIcon color={isActive ? "white" : "#76767e"} w={5} h={5} />
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between" mt={2}>
        <Box>
          <Box
            as="span"
            bgColor={isActive ? "#575bd8" : "#292932"}
            p={3}
            borderRadius={10}
            textTransform="capitalize"
            mr={2}
            fontWeight={400}
          >
            {job_type.replace("_", "-")}
          </Box>
          <Box
            as="span"
            bgColor={isActive ? "#575bd8" : "#292932"}
            p={3}
            borderRadius={10}
            textTransform="capitalize"
            fontWeight={400}
          >
            {category}
          </Box>
        </Box>

        <Box>
          {getDay(publication_date)[0] && (
            <Text as="span" color={isActive ? "White" : "#0b5fe6"} mr={2}>
              New
            </Text>
          )}
          <Box as="span" color="#76767e">
            {getDay(publication_date)[1]}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;
