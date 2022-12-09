import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { MovieCard } from "../movies-card/movies-card.component";

export const MoviesList = (props) => {
  return (
    <Box p={5} w="100%">
      <Heading mb="20px">{props.search.toUpperCase()}</Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        sx={{
          "@media screen and (max-width: 800px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        }}
      >
        {props.movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </Grid>
    </Box>
  );
};
