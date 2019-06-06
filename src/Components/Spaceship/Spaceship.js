import React from 'react';
import Tilt from 'react-tilt'
import './Spaceship.css'
import image from './spaceship.png'

const Spaceship = () => {
	return(
		<div className='abc pt3'>
			<Tilt className="Tilt" options={{ max : 45, scale : 1.25 }} 
			style={{ height: 75, width: 200 }} >
 				<div className="Tilt-inner"> 
 					<img alt='ship' src={image} />
 				</div>
			</Tilt>
		</div>
	);
}

export default Spaceship;