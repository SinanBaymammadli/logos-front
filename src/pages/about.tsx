import { Box, Container, Heading } from "@chakra-ui/react";
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

      <Markdown>{about.description}</Markdown>
    </Container>
  );
}
