import react from 'react';
import styled from 'styled-components';

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


function WeatherInfoPage() {
    return (
    <WeatherShowBox/>
    )
}


export default WeatherInfoPage;