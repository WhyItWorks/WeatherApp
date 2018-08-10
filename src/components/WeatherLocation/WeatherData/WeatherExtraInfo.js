import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div className="weatherExtraInfoCont">

            <span className="extraInfoText">
                <h6>
                    {`Humedad  ${humidity}% `}
                </h6>
            </span>
            <span className="extraInfoText">
                <h6>
                    {`Viento ${wind}`}
                </h6>
            </span>
        </div>
    )
}
WeatherExtraInfo.protoTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo


