import convert from 'convert-units'
import { CLOUDY, SUNNY, RAIN, SNOW, THUNDER, SHOWERS } from './../constans/weathers'


const getWeatherState = weather_data => {
    const { id } = weather_data[0]

    if (id < 300) {
        return THUNDER;
    }
    else if (id < 400) {
        return SHOWERS;
    }
    else if (id < 600) {
        return RAIN;
    }
    else if (id < 700) {
        return SNOW;
    }
    else if (id === 800) {
        return SUNNY;
    }
    else {
        return CLOUDY;
    }
}

const getTemp = kelvin => {
    const temp = convert(kelvin).from('K').to('C').toFixed(0)
    return parseInt(temp, 10)
}

const transformWather = weather_data => {
    const { weather } = weather_data
    const { humidity, temp } = weather_data.main
    const { speed } = weather_data.wind
    const weatherState = getWeatherState(weather)
    const temperature = getTemp(temp)
    const data = {
        humidity,
        temperature,
        weatherstate: weatherState,
        wind: `${speed} m/s`
    }
    return data
}

export default transformWather