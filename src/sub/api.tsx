import axios, {AxiosResponse} from 'axios';
import react from 'react';
import styled from 'styled-components';

import MainWeather from "./MainPage";

interface WeatherDatas {
    data: WeatherMainData;
}

type mains = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number;
}

type weathers = {
    id: number,
    main: string,
    description: string,
    icon: string;
}

type cloud = {
    all: number;
}

type winds = {
    speed: number,
    deg: number;
}

type syss ={
    pod: string;
}

type lists = {
    dt: number,
    main: mains,
    weather: weathers[],
    clouds: cloud,
    wind: winds,
    visibility: number,
    pop: number,
    sys: syss,
    dt_txt: string;
}

type coords = {
    lat: number,
    lon: number;
}

type citys = {
    id: number,
    name: string,
    coord: coords,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number;
}

type WeatherMainData = {
    cod: string,
    message: number,
    cnt: number,
    list: lists[],
    city: citys,
}

function DataWeather() {
    axios.get<WeatherDatas>('http://api.openweathermap.org/data/2.5/forecast?q=${cityss}&cnt=1&appid=a0ec87e9b660428c2d1a0e9ef0cddfc4')
}



export default function DataWea() {
    return(
        <></>
    )
}