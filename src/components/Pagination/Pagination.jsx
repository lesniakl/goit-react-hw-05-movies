import React from 'react';
import css from './Pagination.module.css';

export default function Pagination({
  page,
  pageCount,
  handleNext,
  handlePrev,
}) {
  return (
    <>
      <p>
        <b>Page:</b> {page}
      </p>
      <div>
        {page > 1 && (
          <button type="button" onClick={handlePrev} className={css.pageButton}>
            Previous
          </button>
        )}
        {page < pageCount && (
          <button type="button" onClick={handleNext} className={css.pageButton}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
