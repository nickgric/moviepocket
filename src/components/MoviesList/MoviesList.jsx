import InfiniteScroll from "react-infinite-scroller";
import { useEffect, useState } from "react";

import { fetchTrend } from "../../utils/fetch";

import { PageContainer } from "../PageContainer";
import { MoviesListItem } from "../MoviesList/MoviesListItem";
import { MovieListTrendMovie } from "./MovieListTrendMovie";
import { MoviesScrollProgress } from "../MoviesScrollProgress";

import { MoviesListBox, MoviesListTrendMoviesBox } from "./MoviesListStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

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

  const trendMovie = movies[0];

  return (
    <>
      {movies.length > 0 && (
        <MoviesListBox backdrop={BASE_BACKDROP_URL + trendMovie.backdrop_path}>
          {totalPages && <MoviesScrollProgress value={page} max={totalPages} />}
          <PageContainer>
            <MovieListTrendMovie movies={movies} />
            <InfiniteScroll
              loadMore={nextPage}
              hasMore={hasMore}
              useWindow={false}
            >
              <MoviesListTrendMoviesBox>
                {movies.map((movie) => (
                  <MoviesListItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={BASE_POSTER_URL + movie.poster_path}
                  />
                ))}
              </MoviesListTrendMoviesBox>
            </InfiniteScroll>
          </PageContainer>
        </MoviesListBox>
      )}
    </>
  );
};
