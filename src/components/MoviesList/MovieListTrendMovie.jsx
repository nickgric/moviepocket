import { PageContainer } from "../PageContainer";
import { MoviesListItem } from "../MoviesList/MoviesListItem";

import Media from "react-media";

import {
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
} from "./MovieListTrendMovieStyled";

export const MovieListTrendMovie = ({ movies }) => {
  const trendMovie = movies[0];

  return (
    <MoviesListTrendMovieBox>
      <MoviesListTrendMovieTitle title={trendMovie.title} />
      <MoviesListTrendMovieRatingYearBox>
        <MoviesListTrendMovieRating
          rating={trendMovie.vote_average.toFixed(1)}
        />
        <MoviesListTrendMovieYear year={trendMovie.release_date.slice(0, 4)} />
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
  );
};
