import React from 'react';
import './Planets.css';


const Planets = ({name, terrain, population, image}) => {

  let imagePath = '';
  try{
    require(`../../images/${image}.jpg`);
    imagePath = image + '.jpg';
  }
  catch(err){
    try{
      require(`../../images/${image}.png`)
      imagePath = image + '.png';
    }
    catch(err){
      imagePath = 'default.jpg';
    }
  }

  return (
    <div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
        <img alt='planets' className='br3 grow bw2 shadow-5' 
          style={{maxWidth:'200px', maxHeight:'200px'}} 
          src={require(`../../images/${imagePath}`)} />
        <div>
            <dl className="lh-title pt3 ph1 mt0">
                <dt className='f6 b'>Name</dt>
                <dd className='ml0'>{name}</dd>
                <dt className="f6 b mt2">Terrain</dt>
                <dd className='ml0'>{terrain}</dd>
                <dt className="f6 b mt2">Population</dt>
                <dd className='ml0'>{population}</dd>
            </dl>
        </div>
    </div>
  );
}

export default Planets;