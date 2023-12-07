import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { getTrending } = useTmdb();

  const fillHome = async () => {
    const trending = await getTrending();
    setMovies(trending);
  };

  useEffect(() => {
    fillHome();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies &&
        movies.map(movie => {
          const movieLink = `/movies/${movie.id}`;
          return (
            <Link key={movie.id} to={movieLink}>
              {movie.title}
            </Link>
          );
        })}
    </div>
  );
}
