import NextLink from "next/link";
import { Box, Container, Link, Flex } from "@chakra-ui/react";

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
          <NextLink href="/" passHref>
            <Link>
              <img src="/logo.jpeg" height={60} width={66} style={{ height: 60 }} loading="lazy" />
            </Link>
          </NextLink>

          <Flex style={{ gap: 24 }}>
            <NextLink href="/" passHref>
              <Link display={["none", "block"]}>Ana səhifə</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>Haqqımızda</Link>
            </NextLink>
            <NextLink href="/posts" passHref>
              <Link>Bloq</Link>
            </NextLink>
            <NextLink href="/faq" passHref>
              <Link>FAQ</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Əlaqə</Link>
            </NextLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
