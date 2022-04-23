import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProvider } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
  };
  // 1. Using a style object
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          color: "white",
          backgroundColor: "#13131a",
          lineHeight: "tall",
        },
        a: {
          color: "teal.500",
        },
      },
      ...config,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
