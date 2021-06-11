import { Box, Container, Stack, Link, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Box borderBottom="1px" borderColor="gray.200">
      <Container maxW={"6xl"} py={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          style={{ gap: 16 }}
        >
          <Link href="/">
            <img src="/logo.jpeg" height={60} width={66} style={{ height: 60 }} loading="lazy" />
          </Link>

          <Flex style={{ gap: 24 }}>
            <Link href="/" display={["none", "block"]}>
              Ana səhifə
            </Link>
            <Link href="/about">Haqqımızda</Link>
            <Link href="/posts">Bloq</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Əlaqə</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
