import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
