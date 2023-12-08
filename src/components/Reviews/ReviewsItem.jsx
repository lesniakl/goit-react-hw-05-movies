import PropTypes from 'prop-types';
import React from 'react';
import css from './Reviews.module.css';

export default function ReviewsItem({ author, content, url }) {
  return (
    <li className={css.reviewItem}>
      <span>
        <b>Author:</b> {author}
      </span>
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
