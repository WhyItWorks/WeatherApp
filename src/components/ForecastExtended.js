import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecasItem from './ForecastItem';
import transformForecast from './../services/transformForecast'
import "./styles.css";

const key = "3e7b9ed597a280ed467a54c1c02d399c"
const url = "http://api.openweathermap.org/data/2.5/forecast"

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.state = {
      forecastData: null
    }
  }

  componentDidMount() {
    this.updateContent(this.props.city)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.city) {
      this.setState({ forecastData: null })
      this.updateContent(nextProps.city)
    }
  }

  updateContent = city => {
    const api_weather = `${url}?q=${city}&appid=${key}`
    fetch(api_weather).then(data => {
      return data.json()
    }).then(weather_data => {
      const forecastData = transformForecast(weather_data)
      this.setState({ forecastData })
    })
  }

  renderForecastItemDays(forecastData) {
    return (
      forecastData.map(forecast =>
        <ForecasItem key={`${forecast.weekDay}${forecast.hour}`}
          weekDay={forecast.weekDay}
          hour={forecast.hour}
          data={forecast.data} />
      )
    )
  }

  renderProgress = () => {
    return <h3> Cargando... </h3>
  }

  render(props) {
    const { city } = this.props
    const { forecastData } = this.state
    return (
      <div>
        <h2 className="forecast-title">
          {`Pronóstico extendido para ${city}`}
        </h2>
        {
          forecastData ? this.renderForecastItemDays(forecastData)
            : this.renderProgress()
        }

      </div>
    );
  }
}

ForecastExtended.protoTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,

  }),
}


export default ForecastExtended;
