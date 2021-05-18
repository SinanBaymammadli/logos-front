import { Box, useColorModeValue, Container, Stack, Text, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Logos</Text>

        <Stack direction={"row"} spacing={6}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Container>
    </Box>
  );
}
