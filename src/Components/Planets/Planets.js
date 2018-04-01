import React from 'react';
import './Planets.css';


const Planets = (name, races, galaxy_grade) => {
  return (
    <div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
    	<p>planets placeholder</p>
    	<img alt='planets' className='br3 grow bw2 shadow-5' src='http://via.placeholder.com/200x200' />
    	<div>
    		<dl className="lh-title pt3 ph1 mt0">
    			<dt className='f6 b'>Name</dt>
    			<dt className="f6 b mt2">Races</dt>
    			<dt className="f6 b mt2">Grade in Galaxy</dt>
    		</dl>
    	</div>
    </div>
  );
}

export default Planets;