import { PopularMoviesItem } from "./PopularMoviesItem";
import { PopularMoviesBox } from "./PopularMoviesStyled";

const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const PopularMovies = ({ movies }) => {
  return (
    <PopularMoviesBox>
      {movies.map((movie) => (
        <PopularMoviesItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={BASE_POSTER_URL + movie.poster_path}
        />
      ))}
    </PopularMoviesBox>
  );
};
