import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimeFromMins } from "../../utils/getTimeFromMins";
import { PageContainer } from "../PageContainer";

import { fetchMovie, fetchCast, fetchTrailer } from "../../utils/fetch";

import { MovieCast } from "./MovieCast";

import {
  MovieBox,
  MovieContainer,
  MovieTitle,
  MovieInfoBox,
  MovieYear,
  MovieOverview,
  MovieRuntime,
  MovieMainInfoBox,
  MovieCastNames,
  MovieMoreInfoBox,
  MovieMoreInfoTypeBox,
  MovieType,
  MovieGenre,
  MovieRating,
  MovieTrailer,
} from "./MovieStyled";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";

export const Movie = () => {
  const [castActive, setCastActive] = useState(false);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id).then(setMovie).then(console.log);
    fetchCast(id).then(({ cast }) => setCast(cast.slice(0, 10)));
    fetchTrailer(id).then(({ results }) =>
      setTrailer(results.find((item) => item.type === "Trailer"))
    );
  }, [id]);

  const castActiveHandler = () => {
    setCastActive(!castActive);
  };

  return (
    <>
      {movie && cast.length > 0 && trailer && (
        <MovieBox backdrop={BASE_BACKDROP_URL + movie.backdrop_path}>
          <PageContainer>
            <MovieContainer>
              <MovieInfoBox>
                <MovieTitle title={movie.title} />
                <MovieTrailer trailer={trailer} />
                <MovieMoreInfoBox>
                  <MovieMoreInfoTypeBox>
                    <MovieType />
                    <MovieGenre />
                  </MovieMoreInfoTypeBox>
                  <MovieRating rating={movie.vote_average.toFixed(1)} />
                </MovieMoreInfoBox>
                <MovieMainInfoBox>
                  <MovieYear year={movie.release_date.slice(0, 4)} />
                  <MovieRuntime runtime={getTimeFromMins(movie.runtime)} />
                </MovieMainInfoBox>
                <MovieOverview overview={movie.overview} />
              </MovieInfoBox>

              {!castActive && (
                <MovieCastNames cast={cast} onClick={castActiveHandler} />
              )}
              {castActive && (
                <MovieCast cast={cast} closeCast={castActiveHandler} />
              )}
            </MovieContainer>
          </PageContainer>
        </MovieBox>
      )}
    </>
  );
};
