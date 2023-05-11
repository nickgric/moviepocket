import {
  TrendMovieBox,
  TrendMovieTitle,
  TrendMovieRatingYearBox,
  TrendMovieRating,
  TrendMovieYear,
  TrendMovieOverview,
  TrendMovieTrailerButton,
  TrendMovieInfoButton,
  TrendMoviePocketButton,
  TrendMovieButtonsBox,
  TrendMovieSideButtonsBox,
} from "./TrendMovieStyled";

export const TrendMovie = ({
  movie: { title, vote_average, release_date, overview, id },
}) => {
  return (
    <TrendMovieBox>
      <TrendMovieTitle title={title} />
      <TrendMovieRatingYearBox>
        <TrendMovieRating rating={vote_average.toFixed(1)} />
        <TrendMovieYear year={release_date.slice(0, 4)} />
      </TrendMovieRatingYearBox>
      <TrendMovieOverview overview={overview} />
      <TrendMovieButtonsBox>
        <TrendMovieTrailerButton />
        <TrendMovieSideButtonsBox>
          <TrendMovieInfoButton id={id} title={title} />
          <TrendMoviePocketButton />
        </TrendMovieSideButtonsBox>
      </TrendMovieButtonsBox>
    </TrendMovieBox>
  );
};
