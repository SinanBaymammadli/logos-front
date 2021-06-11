import { Container, Heading, Box, Link } from "@chakra-ui/react";
import { PHONE_NUMBER, INSTAGRAM_LINK, FACEBOOK_LINK, LINKEDIN_LINK } from "../data/constants";

export default function Contact() {
  return (
    <Container maxW="6xl" py="10">
      <Heading pb="5">Əlaqə</Heading>

      <Box pb="5">
        <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
      </Box>
      <Box pb="5">
        <Link href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          {INSTAGRAM_LINK}
        </Link>
      </Box>
      <Box pb="5">
        <Link href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
          {FACEBOOK_LINK}
        </Link>
      </Box>
      <Box pb="5">
        <Link href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
          {LINKEDIN_LINK}
        </Link>
      </Box>
    </Container>
  );
}
