import React from 'react';
import PropTypes from 'prop-types';
import css from './Cast.module.css';

export default function CastItem({ name, character, photo }) {
  return (
    <li className={css.castItem}>
      <img src={photo} alt={name} />
      <div className={css.castDesc}>
        <span>
          <b>{name}</b>
        </span>
        <span>Character: {character}</span>
      </div>
    </li>
  );
}

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
