import { PopularMoviesItemBox } from "./PopularMoviesItemStyled";

export const PopularMoviesItem = ({ poster, id, title }) => {
  return <PopularMoviesItemBox poster={poster} id={id} title={title} />;
};
