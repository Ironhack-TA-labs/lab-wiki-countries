import React from 'react';
import countries from '../countries.json';

export default function CountriesDetails(props) {
  console.log(props.match.params.cca3);
  let countryCca3 = props.match.params.cca3;
  let country = countries.filter((country) => country.cca3 === countryCca3)[0];
  console.log(country);
  return (
    <div>
      <h1>{country.name.official}</h1>
      <p> Capital: {country.capital}</p>
      <p> Area: {country.area}</p>
    </div>
  );
}
