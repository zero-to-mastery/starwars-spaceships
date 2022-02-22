import React from 'react';
import './People.css'

const People = ({ name, height, mass, hairColor, eyeColor, birthYear, image }) => {

  //in case a picture doesn't exist, it will catch the error and set the image to the default one
  try {
    require(`../../images/${image}.jpg`)
  }
  catch(err) {
    image = 'default'
  }

  return (
    <div className='hashir br3 pa2 dib ma4 grow'>
      <img alt='people' className='br3 fl'
        width='240px'
        height='320px'
        src = {require(`../../images/${image}.jpg`)} />
      <div className='tl fl textBox'>
        <dl className="lh-title ph3">
          <dt className="f6 b mt2">Name</dt>
          <dd className="ml0 pl2">{name}</dd>
          <dt className="f6 b mt2">Height</dt>
          <dd className="ml0 pl2">{height}</dd>
          <dt className="f6 b mt2">Weight</dt>
          <dd className="ml0 pl2">{mass}</dd>
          <dt className='f6 b mt2'>Hair Colour</dt>
          <dd className='ml0 pl2'>{hairColor}</dd>
          <dt className='f6 b mt2'>Eye Colour</dt>
          <dd className='ml0 pl2'>{eyeColor}</dd>
          <dt className='f6 b mt2'>Year of Birth</dt>
          <dd className='ml0 pl2'>{birthYear}</dd>
        </dl>
      </div>
    </div>
  );
}
export default People;
