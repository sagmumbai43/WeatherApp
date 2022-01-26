import React from 'react';
import axios from 'axios';

InputSearch.propTypes = {
    
};

function InputSearch(props) {
    const [inputVal, setInputVal] = React.useState('');
    const [searchCityData, setSearchCityData] = React.useState([]);
    const handleSearchCity = (e) => {
        setInputVal(e.target.value);
    }

    const handleCitySearch = () => {
        if(inputVal !== '') {
            axios.get(`${process.env.REACT_APP_BASE_URL}/find`, {
                params: {
                    q: inputVal,
                    units: props.state.selectedTempType,
                    appid: process.env.REACT_APP_API_KEY
                }
            })
            .then(function (response) {
                if(response.status === 200) {
                    setSearchCityData(response.data)
                }
            })
            .catch(function (error) {
            })
        }
    }

    const handleAddCity = (item) => {
        let temp = props.state.cityList.filter((element) =>  {
            return element.name === item.name && element.sys.country === item.sys.country
        })
        if(temp.length > 0) {
            alert('City already added in list');
        } else {
            props.setState((prevState) => ({
                ...prevState,
                cityList: [...prevState.cityList, item]
            }))
            setSearchCityData([])
            setInputVal('')
        }
    }
    return (
        <div>
            <h2>Input Search</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Search City:</label>
                    <input type="text" onChange={handleSearchCity} value={inputVal} />
                    <button onClick={handleCitySearch}>Search</button>
                    <ul className="list">
                        {searchCityData.list && searchCityData.list.length > 0 ? 
                        searchCityData.list.map((item, index) => {
                            return (
                                <li key={index} className="item" >
                                    {item.name}, {item.sys.country} 
                                    <button className="btnSet" onClick={() => handleAddCity(item)}>Add</button>
                                </li>
                            )
                        }) : null}
                    </ul>
                </div>
            </div>
            <div className="action-wrap">
                
            </div>
        </div>
    );
}

export default InputSearch;