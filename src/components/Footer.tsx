import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";

interface SocialButtonProps {
  label: string;
  href: string;
  children: ReactNode;
}

function SocialButton({ children, label, href }: SocialButtonProps) {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <Box borderTop="1px" borderColor="gray.200">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {YEAR} Logos Nəşriyyat</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Instagram" href="https://www.instagram.com/logosnesriyyati/">
            <FaInstagram />
          </SocialButton>
          <SocialButton label="Facebook" href="https://www.facebook.com/logosnesriyyati/">
            <FaFacebook />
          </SocialButton>
          <SocialButton label="Linkedin" href="https://www.linkedin.com/company/logosnesriyyati/">
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
