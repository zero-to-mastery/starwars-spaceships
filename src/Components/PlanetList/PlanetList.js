import React from 'react';
import Planets from '../Planets/Planets';

const PlanetList = ({ planets }) => {
	return(
		<div className='planet_container'>
			{
				planets.map((user, i) => {
					return(
						<Planets 
							key={i}
							name={planets[i].name}
							terrain={planets[i].terrain}
							population={planets[i].population}
						/>
					);
				})
			}
		</div>
	);
}

export default PlanetList;