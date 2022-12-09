import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export const MovieCard = (props) => {
  return (
    <Box
      key={props.movie.imdbID}
      bg="#000000"
      h="300px"
      w="300px"
      p={5}
      borderRadius="12px"
      boxShadow="md"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"

        sx={{
            "@media screen and (max-width: 800px)": {
                width: '200px',
                height: '200px',
                p: 2,
            },
            }}
    >
      <Text fontSize="xl" fontWeight="bold" mt="10px" color="white">
        {props.movie.Title}
      </Text>
    </Box>
  );
};
