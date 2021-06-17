import { Text, Container, Heading } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { About, getAbout } from "../data/about";
import Markdown from "markdown-to-jsx";
import React from "react";

interface Props {
  about: About;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about = await getAbout();

  return {
    props: {
      about,
    },
  };
};

export default function AboutPage({ about }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <Heading pb="5">Haqqımızda</Heading>

      <Markdown
        options={{
          overrides: {
            h1: {
              component: (props) => <Heading as="h1" size="xl" {...props} />,
            },
            p: {
              component: (props) => <Text {...props} mb="4" />,
            },
            img: {
              component: (props) => <img {...props} style={{ aspectRatio: "1000/667", width: "100%" }} />,
            },
          },
        }}
      >
        {about.description}
      </Markdown>
    </Container>
  );
}
