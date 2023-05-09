import { getTimeFromMins } from "../../utils/getTimeFromMins";
import { PageContainer } from "../PageContainer";

import { useState } from "react";

import { MovieInfoCast } from "./MovieInfoCast";

import {
  MovieInfoBox,
  MovieInfoTitle,
  MovieInfoInfoBox,
  MovieInfoYear,
  MovieInfoOverview,
  MovieInfoRuntime,
  MovieInfoMainInfoBox,
  MovieInfoCastNames,
} from "./MovieInfoStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const MovieInfo = ({ movie, cast }) => {
  const [castActive, setCastActive] = useState(false);

  const castActiveHandler = () => {
    setCastActive(!castActive);
  };

  return (
    <MovieInfoBox backdrop={BASE_BACKDROP_URL + movie.backdrop_path}>
      <PageContainer>
        <MovieInfoInfoBox>
          <MovieInfoTitle title={movie.title} />
          <MovieInfoMainInfoBox>
            <MovieInfoYear year={movie.release_date.slice(0, 4)} />
            <MovieInfoRuntime runtime={getTimeFromMins(movie.runtime)} />
          </MovieInfoMainInfoBox>
          <MovieInfoOverview overview={movie.overview} />
          {!castActive && (
            <MovieInfoCastNames cast={cast} onClick={castActiveHandler} />
          )}
          {castActive && (
            <MovieInfoCast cast={cast} closeCast={castActiveHandler} />
          )}
        </MovieInfoInfoBox>
      </PageContainer>
    </MovieInfoBox>
  );
};
