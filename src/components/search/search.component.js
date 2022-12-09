import React from "react";
import { Box, Input, Text } from "@chakra-ui/react";

export const SearchComponent = (props) => {
  return (
    <Box p={5}>
      <Text mb="8px">Search</Text>
      <Input
        size="lg"
        w="100%"
        color="black"
        variant="outline"
        border="1px"
        borderColor="black"
        borderRadius="none"
        onChange={props.handleChange}
      />
    </Box>
  );
};
