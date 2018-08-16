import transformForecast from './../services/transformForecast'
import transformWeather from './../services/transformWeather'


export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_WEATHER = 'SET_WEATHER'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

const setCity = payload => ({ type: 'SET_CITY', payload })
const setForecastData = payload => ({ type: 'SET_FORECAST_DATA', payload })
const getWeatherCity = payload => ({ type: 'GET_WEATHER_CITY', payload })
const setWeatherCity = payload => ({ type: 'SET_WEATHER_CITY', payload })


const url = "http://api.openweathermap.org/data/2.5/forecast"
const url_weather = "http://api.openweathermap.org/data/2.5/weather"
const key = "3e7b9ed597a280ed467a54c1c02d399c"

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const api_weather = `${url}?q=${payload}&appid=${key}`
        //Activar indicador de busqueda de datos 
        dispatch(setCity(payload))

        const state = getState()
        const date = state.cities[payload] && state.cities[payload].forecastDataDate
        const now = new Date()

        if (date && (now - date) < 1 * 60 * 1000) {
            return
        }
        return fetch(api_weather).then(data => {
            return data.json()
        }).then(weather_data => {
            const forecastData = transformForecast(weather_data)
            //Modificar resultado
            dispatch(setForecastData({ city: payload, forecastData }))
        })
    }
}

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city))

            const api_weather = `${url_weather}?q=${city}&appid=${key}`
            fetch(api_weather).then(data => {
                return data.json()
            }).then(weather_data => {
                const weather = transformWeather(weather_data)
                dispatch(setWeatherCity({ city, weather }))
            })
        });
    }


}