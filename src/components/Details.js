import React from 'react';

function Details(props) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat']
    const todayDate = new Date();
    return (
        <div>
            <h2>Details</h2>
            <div className="gridName">
                <div className="current-container mobile-padding">
                    <div>
                        <span className="orange-text">{`${days[todayDate.getDay()]}, ${months[todayDate.getMonth()]} ${todayDate.getDate()}, ${todayDate.getHours()}:${todayDate.getMinutes()}`}</span>
                        <h2>{props.state.selectedCity.name}, {props.state.selectedCity.sys.country}</h2>
                    </div>
                    <div>
                        <div className="current-temp">
                            {/* <svg width="50px" height="50px" viewBox="0 0 148 148" class="owm-weather-icon">
                                <path d="M46.533 68.506c.762 0 1.507.07 2.24.17a18.34 18.34 0 01-.409-3.834c0-10.112 8.198-18.31 18.313-18.31 9.838 0 17.843 7.765 18.269 17.5a10.935 10.935 0 017.367-2.852c6.067 0 10.986 4.922 10.986 10.989 0 1.382-.267 2.7-.734 3.918a13.1 13.1 0 012.565-.256c7.08 0 12.818 5.74 12.818 12.817 0 7.08-5.738 12.82-12.818 12.82H46.533c-9.103 0-16.481-7.38-16.481-16.482 0-9.101 7.378-16.48 16.481-16.48" fill="#efefed"></path>
                            </svg> */}
                            <span className="heading">{Math.round(props.state.selectedCityWeather.current.temp)}°{props.state.selectedTempType === "metric" ? 'C' : 'F'}</span>
                        </div>
                        <div className="bold">Feels like {Math.round(props.state.selectedCityWeather.current.feels_like)}°{props.state.selectedTempType === "metric" ? 'C' : 'F'}. {props.state.selectedCityWeather.current.weather[0].description}. </div>
                        <ul className="weather-items text-container orange-side standard-padding">
                            <li>
                                <svg width="20px" height="20px" viewBox="0 0 96 96" className="icon-pressure">
                                    <g transform="translate(0,96) scale(0.100000,-0.100000)" fill="#48484a" stroke="none">
                                        <path d="M351 854 c-98 -35 -179 -108 -227 -202 -27 -53 -29 -65 -29 -172 0 -107 2 -119 29 -172 38 -75 104 -141 180 -181 58 -31 66 -32 176 -32 110 0 118 1 175 32 77 40 138 101 178 178 31 57 32 65 32 175 0 110 -1 118 -32 176 -40 76 -106 142 -181 179 -49 25 -71 29 -157 32 -73 2 -112 -1 -144 -13z m259 -80 c73 -34 126 -86 161 -159 24 -50 29 -73 29 -135 0 -62 -5 -85 -29 -135 -57 -119 -161 -185 -291 -185 -130 0 -234 66 -291 185 -24 50 -29 73 -29 135 0 130 66 234 185 291 82 40 184 41 265 3z"></path>
                                        <path d="M545 600 c-35 -35 -68 -60 -80 -60 -27 0 -45 -18 -45 -45 0 -33 -50 -75 -89 -75 -18 0 -41 -5 -53 -11 -20 -11 -20 -11 3 -35 12 -13 33 -24 46 -24 17 0 23 -6 23 -23 0 -13 10 -33 23 -45 30 -28 47 -13 47 43 0 32 6 47 28 68 15 15 37 27 48 27 26 0 44 18 44 44 0 12 26 47 60 81 l60 61 -28 27 -28 27 -59 -60z"></path>
                                    </g>
                                </svg>
                                {props.state.selectedCityWeather.current.pressure}hPa
                            </li>
                            <li>
                                <span className="symbol">
                                    Humidity:
                                </span>
                                {props.state.selectedCityWeather.current.humidity}%
                            </li>
                            <li>
                                <span className="symbol">
                                    Dew point:
                                </span>
                                {Math.round(props.state.selectedCityWeather.current.dew_point)}°{props.state.selectedTempType === "metric" ? 'C' : 'F'}
                            </li>
                            <li>
                                <span className="symbol">
                                    Visibility:
                                </span>
                                {props.state.selectedCityWeather.current.visibility/1000}km
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;