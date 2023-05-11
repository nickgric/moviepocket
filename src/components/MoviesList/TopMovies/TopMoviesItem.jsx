import {
  TopMoviesItemBox,
  TopMoviesItemPicture,
  TopMoviesItemTitleYearBox,
  TopMoviesItemTitle,
  TopMoviesItemYear,
  TopMoviesItemOverview,
  TopMoviesItemInfoBox,
} from "./TopMoviesItemStyled";

export const TopMoviesItem = ({ poster, title, year, overview, id }) => {
  return (
    <TopMoviesItemBox title={title} id={id}>
      <TopMoviesItemPicture poster={poster} />
      <TopMoviesItemInfoBox>
        <TopMoviesItemTitleYearBox>
          <TopMoviesItemTitle title={title} />
          <TopMoviesItemYear year={year} />
        </TopMoviesItemTitleYearBox>
        <TopMoviesItemOverview overview={overview} />
      </TopMoviesItemInfoBox>
    </TopMoviesItemBox>
  );
};
