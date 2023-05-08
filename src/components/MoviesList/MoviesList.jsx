import { PageContainer } from "../PageContainer";
import { MoviesListItem } from "../MoviesListItem/MoviesListItem";

import {
  MoviesListBox,
  MoviesListTrendMovieBox,
  MoviesListTrendMovieTitle,
  MoviesListTrendMovieRatingYearBox,
  MoviesListTrendMovieRating,
  MoviesListTrendMovieYear,
  MoviesListTrendMovieOverview,
  MoviesListTrendMovieTrailerButton,
  MoviesListTrendMovieInfoButton,
  MoviesListTrendMoviePocketButton,
  MoviesListTrendMovieButtonsBox,
  MoviesListTrendMovieSideButtonsBox,
  MoviesListTrendMoviesBox,
} from "./MoviesListStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const MoviesList = ({ movies }) => {
  const trendMovie = movies[0];

  console.log(movies[0]);

  return (
    <MoviesListBox backdrop={BASE_BACKDROP_URL + trendMovie.backdrop_path}>
      <PageContainer>
        <MoviesListTrendMovieBox>
          <MoviesListTrendMovieTitle title={trendMovie.title} />
          <MoviesListTrendMovieRatingYearBox>
            <MoviesListTrendMovieRating
              rating={trendMovie.vote_average.toFixed(2)}
            />
            <MoviesListTrendMovieYear
              year={trendMovie.release_date.slice(0, 4)}
            />
          </MoviesListTrendMovieRatingYearBox>
          <MoviesListTrendMovieOverview overview={trendMovie.overview} />
          <MoviesListTrendMovieButtonsBox>
            <MoviesListTrendMovieTrailerButton />
            <MoviesListTrendMovieSideButtonsBox>
              <MoviesListTrendMovieInfoButton />
              <MoviesListTrendMoviePocketButton />
            </MoviesListTrendMovieSideButtonsBox>
          </MoviesListTrendMovieButtonsBox>
        </MoviesListTrendMovieBox>
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
      </PageContainer>
    </MoviesListBox>
  );
};
