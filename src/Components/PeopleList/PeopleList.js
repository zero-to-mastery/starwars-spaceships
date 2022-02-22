import React from 'react';
import People from '../People/People'

const PeopleList = ({ people }) => {
  return (
    <div className='card__container' >
      {
        people.map((user, i) => {
          return (
            <People
              key={i}
              name={people[i].name}
              height={people[i].height}
              mass={people[i].mass}
              hairColor={people[i].hair_color}
              eyeColor={people[i].eye_color}
              birthYear={people[i].birth_year}
              image={people[i].name}
            />
          );
        })
      }
    </div>
  );
}


export default PeopleList;