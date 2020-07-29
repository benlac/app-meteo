/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
// == Import npm
import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

// == Import
import './app.scss';
import Search from '../Search';
import City from '../City';
import Home from '../Home';
import NextDays from '../NextDays';
import NextDaysDetails from '../NextDaysDetails';
import FavoriteCities from '../FavoriteCities';
import Error from '../Error';

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
    // Si currentWeather et nextWeather n'existent pas dans favoriteCities et favoriteNextCities alors je l'ajoute
    if (!favoriteCities.includes(currentWeather) && !favoriteNextCities.includes(nextWeather)) {
      this.setState({
        favoriteCities: [...favoriteCities, currentWeather],
        favoriteNextCities: [...favoriteNextCities, nextWeather],
      });
    }
    // Si currentWeather et nextWeather existent dans favoriteCities et favoriteNextCities alors je le supprime du tableau
    if (favoriteCities.includes(currentWeather) && favoriteNextCities.includes(nextWeather)) {
      const indexVal = favoriteCities.indexOf(currentWeather);
      favoriteCities.splice(indexVal, 1);
      const indexNextVal = favoriteNextCities.indexOf(nextWeather);
      favoriteNextCities.splice(indexNextVal, 1);

      this.setState({
        favoriteCities,
        favoriteNextCities,
      });
    }
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

  resetError = () => {
    this.setState({
      error: null,
      searchValue: '',
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
      error,
    } = this.state;
    if (error) {
      return (
        <>
          <Error error={error} handleClick={this.resetError} />
        </>
      );
    }
    return (
      <div className="app">
        <Search value={searchValue} setValue={this.setValue} searchCity={this.searchCity} />
        {!currentWeather
        && <Home />}
        <Switch>
          <Route path="/" exact>
            {!loadingCurrent
            && <City current={currentWeather} handleClick={this.addFavorite} favorite={favoriteCities} />}
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
          <Route>
            <Error error={error} />
          </Route>
        </Switch>
      </div>
    );
  }
}

// == Export
export default App;
