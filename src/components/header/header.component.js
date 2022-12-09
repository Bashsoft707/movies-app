import { Heading, Box } from "@chakra-ui/react";
import React from "react";

export const HeaderComponent = () => {
  return (
    <Box
      bg="#292929"
      p={5}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="start"
      sx={{
        "@media screen and (max-width: 800px)": {
          textAlign: "center",
          pl: 0,
          justifyContent: "center",
        },
      }}
    >
      <Heading
        pl={5}
        border="2px"
        brderColor="white"
        variant="outline"
        p={2}
        sx={{
          "@media screen and (max-width: 800px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        MyTestApp
      </Heading>
    </Box>
  );
};
