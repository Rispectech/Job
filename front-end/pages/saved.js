import React, { useEffect } from "react";
import JobContainer from "../components/JobContainer";
import { useAppContextValue } from "../context/context";
import { Box, Button, Fade, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import JobSection from "../components/JobSection";

const saved = () => {
  const { state, setPreference } = useAppContextValue();

  useEffect(() => {
    setPreference();
  }, []);
  return (
    <Fade in={state.preference}>
      <Box>
        <main>
          <Box w="90%" m="auto">
            <Box
              mt={10}
              mb={10}
              bgColor="#1c1c24"
              borderRadius="10"
              p={5}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Heading as="h1" size="md">
                  Preferences
                </Heading>

                <Text fontSize="sm" mt={2}>
                  Find your saved jobs here
                </Text>
              </Box>

              <Box>
                <NextLink href="/" passHref>
                  <Button colorScheme="teal" size="md" mr={4}>
                    <Link> All Jobs</Link>
                  </Button>
                </NextLink>
                <NextLink href="/saved" passHref>
                  <Button colorScheme="teal" size="md">
                    <Link>Saved</Link>
                  </Button>
                </NextLink>
              </Box>
            </Box>

            {!state.isLoading && <JobSection preference={true} />}
          </Box>
        </main>
      </Box>
    </Fade>
  );
};

export default saved;
