/* eslint-disable react-hooks/exhaustive-deps */
import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { getDetails } = useTmdb();
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  const fillDetails = async () => {
    const details = await getDetails(movieId);
    setMovie(details);
  };

  useEffect(() => {
    fillDetails();
  }, []);

  return (
    <>
      {movie.title && (
        <div>
          <Link to={backLinkHref}>Go back</Link>
          <img src={movie.poster} alt={movie.title} />
          <h2>
            {movie.title} ({movie.release_year})
          </h2>
          <span>User score: {movie.score}</span>
          <h3>Overview</h3>
          <span>{movie.overview}</span>
          <h4>Genres</h4>
          <span>{movie.genres}</span>
          <NavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </NavLink>
          <NavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </NavLink>
        </div>
      )}

      <Outlet />
    </>
  );
}
