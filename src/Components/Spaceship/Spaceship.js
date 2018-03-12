import React from 'react';
import Tilt from 'react-tilt'
import './Spaceship.css'
import image from './spaceship.png'

const Spaceship = () => {
	return(
		<div className='abc pa3'>
			<Tilt className="Tilt" options={{ max : 25 }} 
			style={{ height: 50, width: 150 }} >
 				<div className="Tilt-inner"> 
 					<img alt='ship' src={image} />
 				</div>
			</Tilt>
		</div>
	);
}

export default Spaceship;