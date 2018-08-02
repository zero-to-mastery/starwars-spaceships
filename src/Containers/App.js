import React, { Component } from 'react';
import Header from '../Components/Header/Header'
import Particles from 'react-particles-js';
import Spaceship from '../Components/Spaceship/Spaceship'
import Searchbox from '../Components/Searchbox/Searchbox'
import CardList from '../Components/CardList/CardList'
import Time from '../Components/Time/Time'
import './App.css';
import Menu from '../Components/Menu/Menu';

import Home from '../Components/Home/Home';
import PlanetList from '../Components/PlanetList/PlanetList';


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
  constructor() {
    super()
    this.state = {
      spaceships: [],
      planets: [],
      searhfield: '',
      route: 'home'
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(result => result = result.results)
      .then(ships => this.setState({ spaceships: ships }))
    fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(result => result = result.results)
      .then(planets => this.setState({ planets: planets }))
  }
  onSearchChange = (event) => {
    this.setState({ searhfield: event.target.value })
  }
  onRouteChange = (route) => {
    this.setState({route: route});
  };
  render() {

    const filteredShips = this.state.spaceships.filter(filtships => {
      return filtships.name.toLowerCase().includes(this.state.searhfield.toLowerCase())
    })

    const filteredPlanets = this.state.planets.filter(filtplanets => {
      return filtplanets.name.toLowerCase().includes(this.state.searhfield.toLowerCase())
    })

    if (!this.state.spaceships.length) {
      return <h1 className='tc f1 courier  ' style={{ 'color': 'white' }}>LOADING..</h1>
    }
    else {
      return (
        <div className='tc'>
          <Particles className='pc' params={particlesoptions} />
          <Menu routeChange={this.onRouteChange} />
          <h1 className='tc f1 courier  ' style={{ 'color': 'white' }}><Time  /></h1>
           <Header />
          <Spaceship />
          {
            this.state.route === 'home'?
            <div>
              <Home />
            </div>
            : null
          }
          {
            this.state.route === 'spaceship'?
            <div>
              <Searchbox searchChange={this.onSearchChange} />
              <CardList spaceships={filteredShips} />
            </div>
            : null
          }
          {
            this.state.route === 'planets'?
            <div>
              <Searchbox searchChange={this.onSearchChange} />
              <PlanetList planets={filteredPlanets}/>
            </div>
            : null
          }
        </div>
      );
    }

  }
}
export default App;
