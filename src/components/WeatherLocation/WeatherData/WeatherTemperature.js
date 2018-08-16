import React from 'react'
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUNNY, RAIN, SNOW, WINDY, THUNDER, SHOWERS } from '../../../constans/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const getWeather = weatherstate => {
    switch (weatherstate) {

        case CLOUD:
            return "cloud"
        case CLOUDY:
            return "cloudy"
        case SUNNY:
            return "day-sunny"
        case RAIN:
            return "rain"
        case SNOW:
            return "snow"
        case WINDY:
            return "windy"
        case THUNDER:
            return "day-thunderstorm"
        case SHOWERS:
            return "showers"
        default:
            return "day-sunny"
    }
}
const getWeatherIcon = weatherstate => {
    return (
        <WeatherIcons className="wicon" name={getWeather(weatherstate)} size="2x" />
    )
}
const WeatherTemperature = ({ temperature, weatherstate }) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherstate)}
        <span className="temperature">{`${temperature} °C`}</span>
    </div>
)
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string,
}
export default WeatherTemperature


