import React, { Component } from 'react';
import apiCall from '../API/api';
import * as apiRoutes from '../API/api_routes';
import Header from '../Components/Header/Header'
import Particles from 'react-particles-js';
import * as utility from '../utility/utility';
import Spaceship from '../Components/Spaceship/Spaceship'
import Searchbox from '../Components/Searchbox/Searchbox'
import CardList from '../Components/CardList/CardList'
import Time from '../Components/Time/Time'
import './App.css';
import Menu from '../Components/Menu/Menu';
import Home from '../Components/Home/Home';
import PlanetList from '../Components/PlanetList/PlanetList';


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
    apiCall(apiRoutes.REQ_STARSHIPS).then(ships => this.setState({ spaceships: ships.results }));
    apiCall(apiRoutes.REQ_PLANETS).then(planets => this.setState({ planets: planets.results }));
  }
  onSearchChange = (event) => {
    this.setState({ searhfield: event.target.value })
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
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
          <Particles className='pc' params={utility.particlesoptions} />
          <Header routeChange={this.onRouteChange} />
          <h1 className='tc f1 courier  ' style={{ 'color': 'white' }}><Time /></h1>
          <Menu />
          <Spaceship />
          {
            this.state.route === 'home' ?
              <div>
                <Home />
              </div>
              : null
          }
          {
            this.state.route === 'spaceship' ?
              <div>
                <Searchbox searchChange={this.onSearchChange} />
                <CardList spaceships={filteredShips} />
              </div>
              : null
          }
          {
            this.state.route === 'planets' ?
              <div>
                <Searchbox searchChange={this.onSearchChange} />
                <PlanetList planets={filteredPlanets} />
              </div>
              : null
          }
        </div>
      );
    }

  }
}
export default App;
