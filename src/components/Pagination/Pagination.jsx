import React from 'react';

export default function Pagination({
  page,
  pageCount,
  handleNext,
  handlePrev,
}) {
  return (
    <div>
      <span>{page}</span>
      {page > 1 && (
        <button type="button" onClick={handlePrev}>
          Previous
        </button>
      )}
      {page < pageCount && (
        <button type="button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}
