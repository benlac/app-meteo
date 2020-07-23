/* eslint-disable react/no-unused-state */
// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import './app.scss';
import Search from '../Search';
import City from '../City';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextWeather: {},
      currentWeather: {},
      loading: true,
      error: null,
      searchValue: '',
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
          loading: false,
          searchValue: '',
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  render() {
    const { currentWeather, loading, searchValue } = this.state;
    return (
      <div className="app">
        <Search value={searchValue} setValue={this.setValue} searchCity={this.searchCity} />
        {!loading
        && <City current={currentWeather} />}
      </div>
    );
  }
}

// == Export
export default App;
