import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Particles from 'react-particles-js';
import Spaceship from '../Components/Spaceship/Spaceship'
import Searchbox from '../Components/Searchbox/Searchbox'
import CardList from '../Components/CardList/CardList'
import './App.css';


const particlesoptions = {
	
      	particles: {
        number: {
        	value: 50,
        	density: {
        		enabl: true,
        		value_area: 800
        	}
        }
    }  	
            	
}



class App extends Component {
  
  constructor(){
    super()
    this.state = {
      spaceships: [],
      searhfield: '',
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/starships/')
    .then(response => response.json())
    .then(result => result = result.results)
    .then(ships => this.setState({ spaceships: ships}))
   }


   onSearchChange = (event) =>{
       this.setState({searhfield: event.target.value})
   }



  render() {

    const filteredShips = this.state.spaceships.filter(filtships => {
      return filtships.name.toLowerCase().includes(this.state.searhfield.toLowerCase())
    })

      if(!this.state.spaceships.length){
      return <h1 className='tc f1 courier  ' style={{'color':'white'}}>LOADING..</h1>
    }
      else{
        return (
                <div className='tc'>
                    <Particles className='pc' params={particlesoptions} />
                    <Header />
                    <Spaceship />
                    <Searchbox searchChange={this.onSearchChange} />
                    <CardList spaceships={filteredShips} />
                </div>
            );
      }
    
  }
}

export default App;
