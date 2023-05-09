import { useEffect, useState } from "react";

import { fetchHome } from "../utils/fetch";
import { MoviesList } from "../components/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchHome(page).then(({ results, total_pages }) => {
      page === 1 && setMovies(results);
      page > 1 && setMovies((movies) => [...movies, ...results]);
      total_pages > 20 ? setTotalPages(20) : setTotalPages(total_pages);
      setHasMore(true);
    });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies.length > 0 && (
        <>
          <MoviesList
            movies={movies}
            nextPage={nextPage}
            hasMore={hasMore}
            page={page}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
