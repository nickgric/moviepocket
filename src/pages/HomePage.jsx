import { useState } from "react";
import { useEffect } from "react";

import { fetchHome } from "../utils/fetch";
import { MoviesList } from "../components/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchHome(page).then(({ results }) => setMovies(results));
  }, [page]);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default HomePage;
