import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BgImg from "../assets/Rectangle5.png";

export const Hero = () => {
  return (
    <Box
      bgImage={BgImg}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="75vh"
      pl={10}
      display="flex"
      alignItems="center"
      justify-content="start"
      sx={{
        "@media screen and (max-width: 800px)": {
          justifyContent: "center",
          textAlign: "center",
          pl: 0,
        },
      }}
    >
      <Text
        color="white"
        fontSize="5xl"
        lineHeight={1.7}
        fontWeight="bold"
        sx={{
          "@media screen and (max-width: 400px)": {
            fontSize: "1.5rem",
          },
        }}
      >
        Watch <br /> something <br /> incredible
      </Text>
    </Box>
  );
};
