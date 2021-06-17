import { GetStaticProps } from "next";
import { Faq, getFaqs } from "../data/faq";
import { Heading, Text, Container, Box } from "@chakra-ui/react";

interface Props {
  faqs: Faq[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const faqs = await getFaqs();

  return {
    props: {
      faqs,
    },
  };
};

export default function FAQ({ faqs }: Props) {
  return (
    <Container maxW="6xl" py="10">
      <Heading pb="5">FAQ</Heading>

      {faqs.map((faq, index) => {
        return (
          <Box key={faq.id} pb="8">
            <Heading size="sm" pb="1">
              {index + 1}. {faq.question}
            </Heading>
            <Text fontSize="md">{faq.answer}</Text>
          </Box>
        );
      })}
    </Container>
  );
}
