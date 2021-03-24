import axios from 'axios';

type WeatherData = {
    temp: number;
    clouds: number;
    Weather: string;
    dt_txt: string;
    temp_min: number;
    temp_max: number;
}

type wind = {
    speed: number;
    deg: number;
}

async function Weathercall(){
const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=seoul&cnt=3&appid=a0ec87e9b660428c2d1a0e9ef0cddfc4`);
return response;
}

console.log(Weathercall);
