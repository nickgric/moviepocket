import {
  SearchEngineItemBox,
  SearchEngineItemPicture,
  SearchEngineItemTitleYearBox,
  SearchEngineItemTitle,
  SearchEngineItemYear,
  SearchEngineItemOverview,
  SearchEngineItemInfoBox,
} from "./SearchEngineItemStyled";

export const SearchEngineItem = ({ poster, title, year, overview, id }) => {
  return (
    <SearchEngineItemBox title={title} id={id}>
      <SearchEngineItemPicture poster={poster} />
      <SearchEngineItemInfoBox>
        <SearchEngineItemTitleYearBox>
          <SearchEngineItemTitle title={title} />
          <SearchEngineItemYear year={year} />
        </SearchEngineItemTitleYearBox>
        <SearchEngineItemOverview overview={overview} />
      </SearchEngineItemInfoBox>
    </SearchEngineItemBox>
  );
};
