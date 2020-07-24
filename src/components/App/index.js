/* eslint-disable react/no-unused-state */
// == Import npm
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// == Import
import './app.scss';
import Search from '../Search';
import City from '../City';
import Home from '../Home';
import NextDays from '../NextDays';
import NextDaysDetails from '../NextDaysDetails';
import FavoriteCities from '../FavoriteCities';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextWeather: {},
      currentWeather: null,
      loadingCurrent: true,
      loadingNext: true,
      error: null,
      searchValue: '',
      favoriteCities: [],
      favoriteNextCities: [],
    };
    this.setValue = this.setValue.bind(this);
  }

  setValue = (searchValue) => {
    // console.log(searchValue);
    this.setState({
      searchValue,
    });
  }

  searchCity = () => {
    const { searchValue } = this.state;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=612b8c5fac6e2ef50282f36ab900c6a2&lang=fr`)
      .then((response) => {
        this.setState({
          currentWeather: response.data,
          loadingCurrent: false,
          searchValue: '',
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });

    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=612b8c5fac6e2ef50282f36ab900c6a2&lang=fr`)
      .then((response) => {
        this.setState({
          nextWeather: response.data,
          loadingNext: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  addFavorite = () => {
    const {
      favoriteCities,
      currentWeather,
      favoriteNextCities,
      nextWeather,
    } = this.state;
    this.setState({
      favoriteCities: [...favoriteCities, currentWeather],
      favoriteNextCities: [...favoriteNextCities, nextWeather],
    });
  };

  favoriteCity = (name) => {
    const { favoriteCities, favoriteNextCities } = this.state;
    const cityToDisplay = favoriteCities.find((city) => city.name === name);
    const nextCityToDisplay = favoriteNextCities.find((city) => city.city.name === name);
    this.setState({
      currentWeather: cityToDisplay,
      nextWeather: nextCityToDisplay,
    });
  }

  render() {
    const {
      currentWeather,
      loadingCurrent,
      loadingNext,
      searchValue,
      nextWeather,
      favoriteCities,
    } = this.state;
    return (
      <div className="app">
        <Search value={searchValue} setValue={this.setValue} searchCity={this.searchCity} />
        {!currentWeather
        && <Home />}
        <Route path="/" exact>
          {!loadingCurrent
          && <City current={currentWeather} handleClick={this.addFavorite} />}
        </Route>
        <Route path="/next-days">
          {!loadingNext
          && <NextDays nextWeather={nextWeather} />}
        </Route>
        {!loadingNext
        && <Route path="/details/:id" component={(props) => <NextDaysDetails {...props} data={nextWeather} />} />}
        <Route path="/favorite">
          <FavoriteCities favoriteCities={favoriteCities} setFavoriteCity={this.favoriteCity} />
        </Route>
      </div>
    );
  }
}

// == Export
export default App;
