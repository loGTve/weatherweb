import React, {CSSProperties} from 'react';
import styled from 'styled-components';

import './sub/callweather.ts';


//날씨가 15도 이상이면 worm 이하면 cold
const Container = styled.div`
  //background: url(./image/WormBg.jpg);
  //background-image: url("./image/WormBg.jpg");
  background-size: cover;
  position: center;
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

      <FontBox>
          <Container>
              <div>
                  날씨
              </div>
              <div>
              날씨2
              </div>
          </Container>
      </FontBox>

  );
}

export default App;
