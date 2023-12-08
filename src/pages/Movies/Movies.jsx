import { useTmdb } from 'hooks/useTmdb';
import React from 'react';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Searchbar = lazy(() => import('components/Searchbar/Searchbar'));
const Pagination = lazy(() => import('components/Pagination/Pagination'));

export default function Movies() {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getSearch } = useTmdb();

  const fillSearch = async (query, page) => {
    const results = await getSearch(query, page);
    setPageCount(results.pageCount);
    setSearch(results.results);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      setPageCount(0);
      setCurrentPage(0);
      setSearch([]);
      return;
    }
    const page = searchParams.get('page');
    const currPage = page ? Number(page) : 1;
    setCurrentPage(currPage);
    fillSearch(query, currPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.search.value;
    setSearchParams({ query, page: 1 });
    setCurrentPage(1);
    fillSearch(query, 1);
  };

  const nextPage = () => {
    const query = searchParams.get('query');
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    fillSearch(query, newPage);
    setSearchParams({ query, page: newPage });
  };

  const previousPage = () => {
    const query = searchParams.get('query');
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    fillSearch(query, newPage);
    setSearchParams({ query, page: newPage });
  };

  return (
    <div className={css.moviesContainer}>
      <Searchbar handleSearch={handleSearch} />
      <ul className={css.moviesList}>
        {search &&
          search.map(result => {
            const movieLink = `/movies/${result.id}`;
            return (
              <li key={result.id} className={css.moviesItem}>
                <Link
                  to={movieLink}
                  state={{
                    from: `/movies/?query=${searchParams.get(
                      'query'
                    )}&page=${currentPage}`,
                  }}
                >
                  {result.title} ({result.release_year})
                </Link>
              </li>
            );
          })}
      </ul>
      {pageCount > 1 && (
        <Pagination
          page={currentPage}
          pageCount={pageCount}
          handleNext={nextPage}
          handlePrev={previousPage}
        />
      )}
    </div>
  );
}
