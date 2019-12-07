import React from 'react';
import './Card.css'

const Card = ({ name, model, starship_class, consumables, image }) => {

  //in case a picture doesn't exist, it will catch the error and set the image to the default one
  try {
    require(`../../images/${image}.jpg`)
  }
  catch(err) {
    image = 'default'
  }

  return (
    <div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
      <img alt='ships' className='br3 grow bw2 shadow-5' 
        style={{ width: '300px', height: '300px' }}
        src = {require(`../../images/${image}.jpg`)} />
      <div>
        <dl className="lh-title pt3 ph1 mt0">
          <dt className="f6 b">Name</dt>
          <dd className="ml0">{name}</dd>
          <dt className="f6 b mt2">Model</dt>
          <dd className="ml0">{model}</dd>
          <dt className="f6 b mt2">Starship Class</dt>
          <dd className="ml0">{starship_class}</dd>
          <dt className="f6 b mt2">Consumables</dt>
          <dd className="ml0">{consumables}</dd>
        </dl>
      </div>
    </div>
  );
}
export default Card;
