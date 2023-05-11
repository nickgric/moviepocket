import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimeFromMins } from "../../utils/getTimeFromMins";
import { PageContainer } from "../PageContainer";

import { fetchMovie, fetchCast } from "../../utils/fetch";

import { MovieInfoCast } from "./MovieInfoCast";

import {
  MovieInfoBox,
  MovieContainer,
  MovieInfoTitle,
  MovieInfoInfoBox,
  MovieInfoYear,
  MovieInfoOverview,
  MovieInfoRuntime,
  MovieInfoMainInfoBox,
  MovieInfoCastNames,
  MovieMoreInfoBox,
  MovieMoreInfoTypeBox,
  MovieType,
  MovieGenre,
  MovieRating,
} from "./MovieInfoStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieInfo = () => {
  const [castActive, setCastActive] = useState(false);
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id).then(setMovie).then(console.log);
    fetchCast(id).then(({ cast }) => setCast(cast.slice(0, 10)));
  }, [id]);

  const castActiveHandler = () => {
    setCastActive(!castActive);
  };

  return (
    <>
      {movie && cast && (
        <MovieInfoBox backdrop={BASE_BACKDROP_URL + movie.backdrop_path}>
          <PageContainer>
            <MovieContainer>
              <MovieInfoInfoBox>
                <MovieInfoTitle title={movie.title} />
                <MovieInfoMainInfoBox>
                  <MovieInfoYear year={movie.release_date.slice(0, 4)} />
                  <MovieInfoRuntime runtime={getTimeFromMins(movie.runtime)} />
                </MovieInfoMainInfoBox>
                <MovieInfoOverview overview={movie.overview} />
              </MovieInfoInfoBox>
              <MovieMoreInfoBox>
                <MovieMoreInfoTypeBox>
                  <MovieType />
                  <MovieGenre />
                </MovieMoreInfoTypeBox>
                <MovieRating rating={movie.vote_average.toFixed(1)} />
              </MovieMoreInfoBox>

              {!castActive && (
                <MovieInfoCastNames cast={cast} onClick={castActiveHandler} />
              )}
              {castActive && (
                <MovieInfoCast cast={cast} closeCast={castActiveHandler} />
              )}
            </MovieContainer>
          </PageContainer>
        </MovieInfoBox>
      )}
    </>
  );
};
