import slugify from "react-slugify";
import { Link } from "react-router-dom";

import { MoviesListItemBox } from "./MoviesListItemStyled";

export const MoviesListItem = ({ poster, id, title }) => {
  return (
    <Link to={`/search/${slugify(title)}/${id}`}>
      <MoviesListItemBox poster={poster}></MoviesListItemBox>
    </Link>
  );
};
