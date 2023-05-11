import { PageContainer } from "../PageContainer";
import { SearchEngineBox, SearchEngineInput } from "./SearchEngineStyled";

export const SearchEngine = () => {
  return (
    <SearchEngineBox>
      <PageContainer>
        <SearchEngineInput />
      </PageContainer>
    </SearchEngineBox>
  );
};
