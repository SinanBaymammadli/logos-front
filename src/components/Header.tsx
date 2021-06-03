import { Box, useColorModeValue, Container, Stack, Text, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Box borderBottom="1px" borderColor="gray.200">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Link href="/">
          <img src="/logo.png" style={{ height: 60 }} />
        </Link>

        <Stack direction={"row"} spacing={6}>
          <Link href="/">Ana səhifə</Link>
          <Link href="/about">Haqqımızda</Link>
          <Link href="/posts">Bloq</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Əlaqə</Link>
        </Stack>
      </Container>
    </Box>
  );
}
