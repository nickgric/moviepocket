import { Button } from "@chakra-ui/react";

import { MovieInfoCastItem } from "./MovieInfoCastItem";
import { MovieInfoCastBox } from "./MovieInfoCastStyled";

const BASE_CASTPHOTO_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieCast = ({ cast, closeCast }) => {
  return (
    <MovieInfoCastBox>
      <Button variant={"colorButton"} onClick={closeCast}>
        Close
      </Button>
      {cast.map((actor) => (
        <MovieInfoCastItem
          key={actor.id}
          id={actor.id}
          photo={BASE_CASTPHOTO_URL + actor.profile_path}
        />
      ))}
    </MovieInfoCastBox>
  );
};
