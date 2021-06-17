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
        {/* general meta tags */}
        <title>{SITE_NAME}</title>
        <meta name="title" content={SITE_NAME} />
        <meta name="description" content={SITE_DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.logospublishing.az/" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content="/logo.jpeg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.logospublishing.az/" />
        <meta property="twitter:title" content={SITE_NAME} />
        <meta property="twitter:description" content={SITE_DESCRIPTION} />
        <meta property="twitter:image" content="/logo.jpeg" />
        <meta
          name="keywords"
          content={`${SITE_NAME} Logos nesriyyat, logosnesriyyat, logos publishing, logospublishing, 
          xarici dil oyren, ingilisce azerbaycanca kitablar, kitab, dil kitablari, 
          rusca azerbaycanca kitablar, almanca azerbaycanca kitablar`}
        />
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
