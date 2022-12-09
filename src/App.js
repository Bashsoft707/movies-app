import React from "react";
import axios from "axios";
import { HeaderComponent } from "./components/header/header.component";
import { Hero } from "./components/hero.component";
import { SearchComponent } from "./components/search/search.component";
import { MoviesList } from "./components/movies-list/movies-list.component";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("batman");
  const API_KEY = "c0c1e65f";

  React.useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
      );

      if (response.data.Error) {
        return [];
      }

      const data = await response.data.Search;
      setMovies(data);
    };
    getMovies();
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <HeaderComponent />
      <Hero />
      <SearchComponent handleChange={handleSearch} />
      <MoviesList movies={filteredMovies} search={search} />
    </>
  );
}

export default App;
