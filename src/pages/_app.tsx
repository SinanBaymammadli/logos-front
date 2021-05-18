import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box flex="1">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
