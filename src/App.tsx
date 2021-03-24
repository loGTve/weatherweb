import React, {CSSProperties, useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

//import './sub/callweather.ts';
import WormBG from './image/WormBg.jpg';
import ColdBG from './image/ColdBg.jpg';



type WeatherData = {
    temp: number;
    clouds: number;
    Weather: string;
    dt_txt: string;
    temp_min: number;
    temp_max: number;
}

/*function WeatherCall(){
    const UrlApi = `http://api.openweathermap.org/data/2.5/forecast?q=seoul&cnt=1&appid=a0ec87e9b660428c2d1a0e9ef0cddfc4`;
    const Weathers = axios.get(UrlApi).then((data) => data.data).catch((err) => console.error(err));

    return Weathers.
}
*/





//날씨가 15도 이상이면 worm 이하면 cold
const Container = styled.div`
  background: url(${WormBG});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`


const FontBox = styled.div`
  flex: 1;
  font-family: "Roboto Light";
  font-size: 50px;
`

function App() {

  return (
    <Container>
      <FontBox>
              <div>
                  hello????????????????????
              </div>
              <div>

              </div>
      </FontBox>
    </Container>
  );
}

export default App;
