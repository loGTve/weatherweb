import axios from "axios";

interface WeatherData {
    City: string;
    Weather: string;
}


const WeatherApi = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&appid=78e51bed98e9822ef3a11410e31c8333',
    timeout: 10000
})

export function Weatherm(id: string) {
    return WeatherApi.get;
}