import { Box, Checkbox, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

const Filter = ({ list, heading }) => {
  console.log(list);
  return (
    // <Box bgColor="#1c1c24" p={5} borderRadius={10}>
    <Box mb={10}>
      <Heading as="h5" size="md" mb={10}>
        {heading}
      </Heading>
      <List spacing={3}>
        {list.map((item, index) => {
          return (
            <ListItem key={index} display="flex" justifyContent="space-between">
              <Checkbox
                colorScheme="blue"
                value={item.label}
                color="#76767e"
                textTransform="capitalize"
                // iconColor="#76767e"
                spacing="1rem"
              >
                {item.label}
              </Checkbox>

              <Box as="span" bgColor="#1c1c24" p={2} borderRadius={10}>
                {item.value}
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Filter;
