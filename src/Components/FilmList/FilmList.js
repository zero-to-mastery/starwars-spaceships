import React from 'react';
import Films from '../Films/Films';

const FilmList = ({ films }) => {
  return (
    <div className='film_container'>
      {
        films.map((user, i) => {
          return (
            <Films
              key={i}
              title={films[i].title}
              episode_id={films[i].episode_id}
              director={films[i].director}
              release_date={films[i].release_date}
              image={films[i].title}
            />
          );
        })
      }
    </div>
  );
}

export default FilmList;