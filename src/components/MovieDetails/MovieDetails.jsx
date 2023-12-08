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
import css from './MovieDetails.module.css';

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
      <Link to={backLinkHref} className={css.goBack}>
        Go back
      </Link>
      {movie.title && (
        <div className={css.detailsContainer}>
          <img
            src={movie.poster}
            alt={movie.title}
            className={css.detailsImg}
          />
          <div className={css.detailsDesc}>
            <h2>
              {movie.title} ({movie.release_year})
            </h2>
            <span>User score: {movie.score}</span>
            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <h4>Genres</h4>
            <div>
              {movie.genres.map((genre, index) => (
                <span key={index} className={css.detailsGenre}>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={css.detailsLinks}>
        <NavLink
          to="cast"
          state={{ from: backLinkHref }}
          className={css.detailsLink}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          state={{ from: backLinkHref }}
          className={css.detailsLink}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
