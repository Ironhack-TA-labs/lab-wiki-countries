import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountriesDetails from './Components/CountriesDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Route
            exact
            path="/countrydetail/:cca3"
            component={CountriesDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
