import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsItem from './ReviewsItem';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { getReviews } = useTmdb();
  const { movieId } = useParams();

  const fillReviews = async () => {
    const reviews = await getReviews(movieId);
    setReviews(reviews);
  };

  useEffect(() => {
    fillReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {reviews.map(review => (
        <ReviewsItem
          key={review.id}
          author={review.author}
          content={review.content}
          url={review.url}
        />
      ))}
    </ul>
  );
}
