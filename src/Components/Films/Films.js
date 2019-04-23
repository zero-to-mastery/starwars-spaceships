import React from 'react';
import './Films.css';


const Films = ({ title, episode_id, director, release_date, image }) => {

  let imagePath = '';
  try {
    require(`../../images/${image}.jpg`);
    imagePath = image + '.jpg';
  }
  catch (err) {
    try {
      require(`../../images/${image}.png`)
      imagePath = image + '.png';
    }
    catch (err) {
      imagePath = 'default.jpg';
    }
  }

  return (
    <div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
      <img alt='films' className='br3 grow bw2 shadow-5'
        style={{ maxWidth: '500px', maxHeight: '300px' }}
        src={require(`../../images/${imagePath}`)} />
      <div>
        <dl className="lh-title pt3 ph1 mt0">
          <dt className='f6 b'>Title</dt>
          <dd className='ml0'>{title}</dd>
          <dt className="f6 b mt2">Episode</dt>
          <dd className='ml0'>{episode_id}</dd>
          <dt className="f6 b mt2">Director</dt>
          <dd className='ml0'>{director}</dd>
          <dt className="f6 b mt2">Release Date</dt>
          <dd className='ml0'>{release_date}</dd>
        </dl>
      </div>
    </div>
  );
}

export default Films;