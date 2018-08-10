import React from 'react'
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherstate: "windy",
//     wind: 'normal',
// }

const ForecasItem = ({ weekDay, hour, data }) => (
    <div>
        <h2>{weekDay} Hora: {hour}</h2>
        <WeatherData data={data} />
    </div>
);

ForecasItem.protoTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    }),
}
export default ForecasItem