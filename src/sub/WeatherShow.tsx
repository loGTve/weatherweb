import React from 'react';
import styled from 'styled-components';

import DataWea from "./api";


//Icons
import CloudSleetFill from '@styled-icons/bootstrap/CloudSleetFill';
import WeatherSunny from '@styled-icons/bootstrap/CloudSleetFill';
import Rainy from '@styled-icons/bootstrap/CloudSleetFill';
import Typhoon from '@styled-icons/bootstrap/CloudSleetFill';
import Thunderstorm from '@styled-icons/ionicons-outline/Thunderstorm';


const WeatherShowBox = styled.div`
  padding: 20px;
  text-align: left;
  border-radius: 35px;
  background: rgba(162, 162, 162, 0.6);
  box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.7);

  height: 500px;
  width: 300px;
  left:50%;
  position:absolute;
  transform: translate(-50%, 25%);
`

const Texts = styled.div`
    text-align: center;
  font-size: 30px;
`


function WeatherInfoPage() {
    return (
        <WeatherShowBox>
            <Texts>
                현재 날씨입니다.
            </Texts>
            <DataWea/>
        </WeatherShowBox>
    )
}

export default WeatherInfoPage;