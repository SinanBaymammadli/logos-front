import "./carousel.css";
import "dayjs/locale/az";
import Head from "next/head";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import dayjs from "dayjs";
import { SITE_DESCRIPTION, SITE_NAME } from "../data/constants";

dayjs.locale("az");

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>

        {/* general meta tags */}
        <meta name="description" content={SITE_DESCRIPTION} />
        {/* general meta tags */}

        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* favicon */}

        {/* social network meta tag */}
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/logo.jpeg" />
        <meta name="twitter:card" content="/logo.jpeg" />
        {/* social network meta tag */}
      </Head>

      <ChakraProvider>
        <Flex direction="column" minH="100vh">
          <Header />
          <Box flex="1">
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
