import InfiniteScroll from "react-infinite-scroller";
import { useState, useEffect } from "react";

import { fetchSearch, fetchTrend } from "../../utils/fetch";

import { PageContainer } from "../PageContainer";
import { ScrollProgress } from "../ScrollProgress";

import {
  SearchEngineBox,
  SearchEngineInput,
  SearchEngineResultsBox,
  SearchEngineTitle,
} from "./SearchEngineStyled";

import { SearchEngineItem } from "./SearchEngineItem";

const BASE_BACKDROP_URL = "https://image.tmdb.org/t/p/w1280";
const BASE_POSTER_URL = "https://www.themoviedb.org/t/p/w1280";

export const SearchEngine = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    setPage(1);
    setQuery(event.target.elements.input.value);
  };

  useEffect(() => {
    if (!query) {
      fetchTrend(page).then(({ results, total_pages }) => {
        page === 1 && setMovies(results);
        page > 1 && setMovies((movies) => [...movies, ...results]);
        total_pages > 20 ? setTotalPages(20) : setTotalPages(total_pages);
        setHasMore(true);
      });
    }
    if (query) {
      fetchSearch(query, page).then(({ results, total_pages }) => {
        page === 1 && setMovies(results);
        page > 1 && setMovies((movies) => [...movies, ...results]);
        total_pages > 20 ? setTotalPages(20) : setTotalPages(total_pages);
        setHasMore(true);
      });
    }
  }, [query, page]);

  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
    setHasMore(false);
  };

  return (
    <>
      {movies.length > 0 && (
        <SearchEngineBox backdrop={BASE_BACKDROP_URL + movies[0].backdrop_path}>
          {totalPages && <ScrollProgress value={page} max={totalPages} />}
          <PageContainer>
            <SearchEngineInput submitHandler={submitHandler} />
            {movies.length > 0 && (
              <InfiniteScroll
                loadMore={nextPage}
                hasMore={hasMore}
                useWindow={false}
              >
                <SearchEngineResultsBox>
                  {movies.map(
                    ({ id, title, release_date, poster_path, overview }) => (
                      <>
                        <SearchEngineItem
                          key={id}
                          id={id}
                          title={title}
                          year={release_date.slice(0, 4)}
                          poster={BASE_POSTER_URL + poster_path}
                          overview={overview}
                        />
                      </>
                    )
                  )}
                </SearchEngineResultsBox>
              </InfiniteScroll>
            )}
          </PageContainer>
        </SearchEngineBox>
      )}
    </>
  );
};
