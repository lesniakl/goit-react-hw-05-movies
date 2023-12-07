import CastItem from 'components/Cast/CastItem';
import { useTmdb } from 'hooks/useTmdb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { getCast } = useTmdb();
  const { movieId } = useParams();

  const fillCast = async () => {
    const cast = await getCast(movieId);
    setCast(cast);
  };

  useEffect(() => {
    fillCast();
  }, []);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <CastItem
            key={actor.id}
            photo={actor.photo}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </ul>
    </div>
  );
}
