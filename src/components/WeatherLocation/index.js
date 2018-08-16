import React from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'

import './styles.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const WeatherLocation = ({ onWLClick, city, data }) => (

    <div className="weatherLocationCont" onClick={onWLClick}>
        <Location city={city} />
        {
            data ?
                <WeatherData data={data} /> :
                <CircularProgress style={{ color: "#ab003c" }} />
        }
    </div>
);


WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWLClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    }),
}

export default WeatherLocation;