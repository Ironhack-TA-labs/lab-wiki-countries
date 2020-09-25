import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  console.log(countries);
  let countryList = countries.map((country) => (
    <Link
      className="list-group-item"
      key={country.cca3}
      to={`/countrydetail/${country.cca3}`}
    >
      {country.name.official}
    </Link>
  ));
  return <div className="list-group">{countryList}</div>;
}

// <h2 key={country.cca3}>
//   {country.name.official} and {country.cca3}
// </h2>
