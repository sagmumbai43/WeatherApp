import React from 'react';

function List(props) {
    return (
        <div>
            <h2>List of Cities</h2>
            <ul className="list">
                {props.state.cityList && props.state.cityList.length > 0 &&
                props.state.cityList.map((item, index) => {
                    return (
                        <li key={index}>
                            <span className="no">{index+1}) </span>
                            <span className="name" onClick={() => props.handleShowCityWeather(item)}> {item.name} </span>
                            <button className="action btn-wrap" onClick={() => props.handleDeleteCity(index, item)}> Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default List;