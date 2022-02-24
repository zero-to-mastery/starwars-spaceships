import React, { Component } from 'react';
import apiCall from '../API/api';
import * as apiRoutes from '../API/api_routes';
import Header from '../Components/Header/Header';
// import Films from '../Components/Films/Films';
import Particles from 'react-particles-js';
import * as utility from '../utility/utility';
import Spaceship from '../Components/Spaceship/Spaceship'
import Searchbox from '../Components/Searchbox/Searchbox'
import CardList from '../Components/CardList/CardList'
import './App.css';
import Menu from '../Components/Menu/Menu';
import Home from '../Components/Home/Home';
import FilmList from '../Components/FilmList/FilmList';
import PlanetList from '../Components/PlanetList/PlanetList';
import PeopleList from '../Components/PeopleList/PeopleList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      spaceships: [],
      planets: [],
      people: [],
      searchfield: '',
      route: 'home'
    }
  }
  componentDidMount() {
    apiCall(apiRoutes.REQ_FILMS).then(films => {
      films.results.sort((a, b) => a.episode_id - b.episode_id);
      this.setState({ films: films.results });
    });
    apiCall(apiRoutes.REQ_STARSHIPS).then(ships => this.setState({ spaceships: ships.results }));
    apiCall(apiRoutes.REQ_PLANETS).then(planets => this.setState({ planets: planets.results }));
    apiCall(apiRoutes.REQ_PEOPLE).then(people => this.setState({people: people.results}));
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
    this.setState({ searchfield: '' });
  };
  render() {

    const filteredFilms = this.state.films.filter(filtfilms => {
      return filtfilms.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    const filteredShips = this.state.spaceships.filter(filtships => {
      return filtships.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    const filteredPlanets = this.state.planets.filter(filtplanets => {
      return filtplanets.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    const filteredPeople = this.state.people.filter(filtpeople => {
      return filtpeople.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })

    if (!this.state.spaceships.length) {
      return <h1 className='tc f1 courier  ' style={{ 'color': 'white' }}>LOADING..</h1>
    }
    else {
      return (
        <div className='tc'>
          <Particles className='pc' params={utility.particlesoptions} />
          <Header routeChange={this.onRouteChange} />
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
            this.state.route === 'films' ?
              <div>
                <Searchbox searchChange={this.onSearchChange} />
                <FilmList films={filteredFilms} />
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
          {
            this.state.route === 'people' ?
              <div>
                <Searchbox searchChange={this.onSearchChange} />
                <PeopleList people={filteredPeople} />
              </div>
              : null
          }
        </div>
      );
    }

  }
}
export default App;
