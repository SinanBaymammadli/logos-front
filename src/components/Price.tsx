import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export function Price({ amount }: { amount: number }) {
  return (
    <Flex alignItems="center">
      <Box fontSize="lg">₼</Box>
      {amount.toFixed(2)}
    </Flex>
  );
}
