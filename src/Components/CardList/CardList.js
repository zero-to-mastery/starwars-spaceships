import React from 'react';
import Card from '../Card/Card'

const CardList = ({spaceships}) => {
	return(
		<div>
			{
			spaceships.map((user, i) => {
				return (
					<Card 
						key= {i}
						name= {spaceships[i].name}
						model= {spaceships[i].model}
						starship_class= {spaceships[i].starship_class}
						consumables= {spaceships[i].consumables}


					/>
				);
			})
			}
		</div>

	);
}


export default CardList;