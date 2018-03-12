import React from 'react';
import './Searchbox.css';


const Searchbox = ({searchChange}) => {
	return(
		<div className='tc pa3'>
			<h1 className='xx'><span className="flick-1">S</span>earch yo<span className="flick-2">u</span>r favo<span className="flick-3">r</span>ite on<span className="flick-4">e</span></h1>
			<input 
				className='pa2 bw1 tc br2 ba b--green bg-washed-green ma0'
				type='search' 
				placeholder='search spaceships'
				onChange = {searchChange}
			/>
		</div>	
	);
}

export default Searchbox;