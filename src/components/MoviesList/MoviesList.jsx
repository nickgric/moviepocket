import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";

import { fetchTrend } from "../../utils/fetch";

import { PageContainer } from "../PageContainer";

import { TrendMovie } from "./TrendMovie";
import { PopularMovies } from "./PopularMovies";
import { TopMovies } from "./TopMovies/TopMovies";

import { ScrollProgress } from "../ScrollProgress";

import { MoviesListBox } from "./MoviesListStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchTrend(page).then(({ results, total_pages }) => {
      page === 1 && setMovies(results);
      page > 1 && setMovies((movies) => [...movies, ...results]);
      total_pages > 20 ? setTotalPages(20) : setTotalPages(total_pages);
      setHasMore(true);
    });
  }, [page]);

  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies.length > 0 && totalPages && (
        <MoviesListBox backdrop={BASE_BACKDROP_URL + movies[0].backdrop_path}>
          <ScrollProgress value={page} max={totalPages} />
          <PageContainer>
            <InfiniteScroll
              loadMore={nextPage}
              hasMore={hasMore}
              useWindow={false}
            >
              <TrendMovie movie={movies[0]} />
              <TopMovies movies={movies.slice(1, 4)} />
              <PopularMovies movies={movies.slice(4)} />
            </InfiniteScroll>
          </PageContainer>
        </MoviesListBox>
      )}
    </>
  );
};
