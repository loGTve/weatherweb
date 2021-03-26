import React, {CSSProperties, useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import WeatherShow from './sub/WeatherShowPage';

//import but not used
import {Search} from '@styled-icons/boxicons-regular/Search';

//Icons
import CloudSleetFill from '@styled-icons/bootstrap/CloudSleetFill';
import WeatherSunny from '@styled-icons/bootstrap/CloudSleetFill';
import Rainy from '@styled-icons/bootstrap/CloudSleetFill';
import Typhoon from '@styled-icons/bootstrap/CloudSleetFill';
import Thunderstorm from '@styled-icons/ionicons-outline/Thunderstorm';




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
  font-size: 15px;
  background: rgba(162, 162, 162, 0.6);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.5);
  width: 500px;
  top:50%;
  left:50%;
  position:absolute;
  transform: translate(-50%, 25%);
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
                    <SearchBar/>
        </Container>
    );
}

export default App;
