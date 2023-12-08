import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div>
      <nav className={css.sharedNav}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
