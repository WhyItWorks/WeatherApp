import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'
import './styles.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const key = "3e7b9ed597a280ed467a54c1c02d399c"
const url = "http://api.openweathermap.org/data/2.5/weather"

class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            data: null,
            city
        };
    }


    componentWillMount = () => {
        const api_weather = `${url}?q=${this.state.city}&appid=${key}`

        fetch(api_weather).then(data => {
            return data.json()

        }).then(weather_data => {
            const data = transformWeather(weather_data)
            this.setState({ data })

        })
    }

    render = () => {
        const { onWLClick } = this.props
        const { city, data } = this.state
        return (
            <div className="weatherLocationCont" onClick={onWLClick}>
                <Location city={city} />
                {
                    data ?
                        <WeatherData data={data} /> :
                        <CircularProgress style={{ color: "#ab003c" }} />
                }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>

        );
    }
}
WeatherLocation.protoTypes = {
    city: PropTypes.string,
    onWLClick: PropTypes.func,
}

export default WeatherLocation;