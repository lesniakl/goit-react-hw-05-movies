import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { getDetails } = useTmdb();
  const { movieId } = useParams();

  const fillDetails = async () => {
    const details = await getDetails(movieId);
    setMovie(details);
  };

  useEffect(() => {
    fillDetails();
  }, []);

  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <span>User score: {movie.score}</span>
      <h3>Overview</h3>
      <span>{movie.overview}</span>
      <h4>Genres</h4>
      <span>{movie.genres}</span>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
}
