import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export function Price({ amount }: { amount: number }) {
  return (
    <Flex alignItems="center" style={{ textDecoration: "none" }}>
      <Box fontSize="lg" pr="1">
        ₼
      </Box>
      {amount.toFixed(2)}
    </Flex>
  );
}
