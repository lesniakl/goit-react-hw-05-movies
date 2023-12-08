import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { getTrending } = useTmdb();

  const fillHome = async () => {
    const trending = await getTrending();
    setMovies(trending);
  };

  useEffect(() => {
    fillHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeHeader}>Trending today</h1>
      <ol className={css.homeList}>
        {movies &&
          movies.map(movie => {
            const movieLink = `/movies/${movie.id}`;
            return (
              <li key={movie.id} className={css.homeItem}>
                <Link to={movieLink}>{movie.title}</Link>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
