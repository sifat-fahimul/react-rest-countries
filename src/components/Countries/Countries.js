import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>this countries from its won file!!!</h1>
            <h2>countries available = {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.name}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;

/*
 <Country name={country.name} capital={country.capital}></Country>
*/