import React, {CSSProperties, useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Search} from '@styled-icons/boxicons-regular/Search';

interface WeatherResponse{
    data: WeatherData
}

type WeatherData = {
    temp: number;
    clouds: number;
    Weather: string;
    dt_txt: string;
    temp_min: number;
    temp_max: number;
}

function WeatherCall(){

    const UrlApi = `http://api.openweathermap.org/data/2.5/forecast?q=seoul&cnt=1&appid=a0ec87e9b660428c2d1a0e9ef0cddfc4`;
    const Weathers = axios.get<{temp: number; temp_min: number;}>(UrlApi)
        .then((data) => data.data)
        .catch((err) => console.error(err));


    return Weathers;
}




//날씨가 15도 이상이면 worm 이하면 cold
const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  
`

const FontBox = styled.div`
  font-family: "Roboto Light";
  font-size: 50px;
`

const SearchBar = styled.input`
  padding: 15px;
  text-align: left;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.5);
`

const Box = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
`

const SearchIcon = styled(Search)`
  float: right;
  width: 20px;
  margin-top: 2px;
  margin-right: 10px;
  color: white;
`


function App(){

    return (
        <Container>
            <FontBox>
                <div>
                   aa
                </div>
                <Box>
                    <SearchBar type={"text"}/>
                </Box>
            </FontBox>
        </Container>
    );
}

export default App;
