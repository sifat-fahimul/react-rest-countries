import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;
    return (

        <div className='country'>
            <h1>name : {name}</h1>
            <h3>Capital name : {capital}</h3>
            <h4>Population : {population}</h4>
            <img src={flag} alt="" />
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;