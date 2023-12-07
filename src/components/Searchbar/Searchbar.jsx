import React from 'react';

export default function Searchbar({ handleSearch }) {
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="search"
          type="text"
          autoFocus
          placeholder="Enter a title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
