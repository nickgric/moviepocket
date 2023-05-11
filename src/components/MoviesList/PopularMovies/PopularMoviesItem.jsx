import slugify from "react-slugify";
import { Link } from "react-router-dom";

import { PopularMoviesItemBox } from "./PopularMoviesItemStyled";

export const PopularMoviesItem = ({ poster, id, title }) => {
  return (
    <Link to={`/search/movie/${slugify(title)}/${id}`}>
      <PopularMoviesItemBox poster={poster} />
    </Link>
  );
};
