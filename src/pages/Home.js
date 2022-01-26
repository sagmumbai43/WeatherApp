import React, { useEffect, useState } from 'react';
import InputSearch from '../components/InputSearch';
import List from '../components/List';
import Details from '../components/Details';
import axios from 'axios';

const Home = props => {
    const [state, setState] = useState({
        selectedCity: '',
        selectedCityWeather: {},
        selectedTempType: 'metric',
        cityList: [],
    })

    const handleShowCityWeather = (city) => {
        setState((prevState) => ({
            ...prevState,
            selectedCity: city
        }))
        getWeatherData(city);
    }

    const handleDeleteCity = (index, city) => {
        let tempList = state.cityList;
        tempList.splice(index, 1);
        setState((prevState) => ({
            ...prevState,
            cityList: tempList
        }))
    }

    const getWeatherData = (cityDetails) => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/onecall`, {
            params: {
                lat: cityDetails.coord.lat,
                lon: cityDetails.coord.lon,
                units: state.selectedTempType,
                appid: process.env.REACT_APP_API_KEY
            }
          })
          .then(function (response) {
            if(response.status === 200) {
                setState((prevState) => ({
                    ...prevState,
                    selectedCityWeather: response.data
                }))
            }
          })
          .catch(function (error) {
          })
    }

    useEffect(() => {
        if(state.cityList.length === 0) {
            navigator.geolocation.getCurrentPosition(function(position) {
                axios.get(`${process.env.REACT_APP_BASE_URL}/weather`, {
                    params: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        appid: process.env.REACT_APP_API_KEY
                    }
                })
                .then(function (response) {
                    if(response.status === 200) {
                        setState((prevState) => ({
                            ...prevState,
                            cityList: [...prevState.cityList, response.data]
                        }))
                        handleShowCityWeather(response.data);
                    }
                })
                .catch(function (error) {
                })
            });
        }
    }, [])

    
    return (
        <div className="container">
            <div className="sides left-side">
                <div className="top">
                    <InputSearch state={state} setState={setState} />
                </div>
                <div className="bottom">
                    <List 
                        state={state} 
                        handleShowCityWeather={handleShowCityWeather}
                        handleDeleteCity={handleDeleteCity}
                    />
                </div>
            </div>
            {Object.keys(state.selectedCityWeather).length > 0 ?
                <div className="sides right-side">
                    <Details state={state} />
                </div>
            : null}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;