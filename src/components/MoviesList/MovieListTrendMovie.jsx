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
    <Media
      queries={{
        mobMax: "(min-width: 480px)",
      }}
    >
      {(matches) => (
        <MoviesListTrendMovieBox>
          {matches.mobMax && (
            <MoviesListTrendMovieTitle title={trendMovie.title} />
          )}
          {matches.mobMax && (
            <MoviesListTrendMovieRatingYearBox>
              <MoviesListTrendMovieRating
                rating={trendMovie.vote_average.toFixed(1)}
              />
              <MoviesListTrendMovieYear
                year={trendMovie.release_date.slice(0, 4)}
              />
            </MoviesListTrendMovieRatingYearBox>
          )}
          {matches.mobMax && (
            <MoviesListTrendMovieOverview overview={trendMovie.overview} />
          )}
          {matches.mobMax && (
            <MoviesListTrendMovieButtonsBox>
              <MoviesListTrendMovieTrailerButton />
              <MoviesListTrendMovieSideButtonsBox>
                <MoviesListTrendMovieInfoButton />
                <MoviesListTrendMoviePocketButton />
              </MoviesListTrendMovieSideButtonsBox>
            </MoviesListTrendMovieButtonsBox>
          )}
        </MoviesListTrendMovieBox>
      )}
    </Media>
  );
};
