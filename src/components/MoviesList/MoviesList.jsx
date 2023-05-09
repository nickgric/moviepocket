import InfiniteScroll from "react-infinite-scroller";

import { PageContainer } from "../PageContainer";
import { MoviesListItem } from "../MoviesList/MoviesListItem";
import { MovieListTrendMovie } from "./MovieListTrendMovie";

import {
  MoviesListBox,
  MoviesListTrendMoviesBox,
  MoviesListTrendMoviesProgress,
} from "./MoviesListStyled";
import { Link } from "@chakra-ui/react";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const MoviesList = ({ movies, nextPage, hasMore, page, totalPages }) => {
  const trendMovie = movies[0];

  return (
    <MoviesListBox backdrop={BASE_BACKDROP_URL + trendMovie.backdrop_path}>
      <MoviesListTrendMoviesProgress value={page} max={totalPages} />
      <PageContainer>
        <MovieListTrendMovie movies={movies} />
        <InfiniteScroll loadMore={nextPage} hasMore={hasMore} useWindow={false}>
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
          <Link
            href="http://localhost:3000/"
            position={"fixed"}
            bottom={"20px"}
            right={"20px"}
            color={"white"}
          >
            TOP
          </Link>
        </InfiniteScroll>
      </PageContainer>
    </MoviesListBox>
  );
};
