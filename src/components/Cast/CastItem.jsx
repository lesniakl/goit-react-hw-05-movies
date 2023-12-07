import React from 'react';
import PropTypes from 'prop-types';

export default function CastItem({ name, character, photo }) {
  return (
    <li>
      <img src={photo} alt={name} />
      <span>{name}</span>
      <span>Character: {character}</span>
    </li>
  );
}

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
