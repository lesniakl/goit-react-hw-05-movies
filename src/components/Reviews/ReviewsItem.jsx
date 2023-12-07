import PropTypes from 'prop-types';
import React from 'react';

export default function ReviewsItem({ author, content, url }) {
  return (
    <li>
      <span>Author: {author}</span>
      <span>{content}</span>
      <a href={url}>Read full article</a>
    </li>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
