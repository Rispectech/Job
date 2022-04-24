import { Box, Checkbox, Heading, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContextValue } from "../context/context";

const Filter = ({ list, heading, type }) => {
  const [label, setLabel] = useState(false);
  const { setFilterType, setFilterLocation } = useAppContextValue();
  console.log(list);
  const handleClick = (e, label) => {
    e.preventDefault();
    console.log(e.target.checked);
    setLabel(label);
    const stateList = [...list]
      .map((item) => {
        if (item.label === label) return { ...item, ischecked: true };
        else {
          e.target.checked = false;
          return { ...item, ischecked: false };
        }
      })
      .filter((item) => item.ischecked === true && item.label === label);
    console.log(stateList);
    if (type) setFilterType(...stateList);
    else setFilterLocation(...stateList);
  };
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
                isChecked={label === item.label}
                colorScheme="blue"
                value={item.label}
                color="#76767e"
                textTransform="capitalize"
                // iconColor="#76767e"
                spacing="1rem"
                onChange={(e) => handleClick(e, item.label)}
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
