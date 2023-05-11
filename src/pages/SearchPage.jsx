import { useState } from "react";

import { SearchEngine } from "../components/SearchEngine/SearchEngine";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  return (
    <SearchEngine
      movies={movies}
      page={page}
      query={query}
      totalPages={totalPages}
    />
  );
};

export default SearchPage;
