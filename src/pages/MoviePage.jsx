import { MovieInfo } from "../components/MovieInfo/MovieInfo";

import { fetchMovie, fetchCast } from "../utils/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const { id } = useParams();

  console.log(movie);
  console.log(cast);

  useEffect(() => {
    fetchMovie(id).then(setMovie);
    fetchCast(id).then(({ cast }) => setCast(cast.slice(0, 20)));
  }, [id]);

  return <>{movie && cast && <MovieInfo movie={movie} cast={cast} />}</>;
};

export default MoviePage;
