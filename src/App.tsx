import React, {CSSProperties} from 'react';
import styled from 'styled-components';

import './sub/callweather.ts';
import ColdBG from './image/ColdBg.jpg';
import WormBG from './image/WormBg.jpg';

const FontBox = styled.div`
  flex: 1;
  font-family: "Roboto-italic";
  font-size: 30px;
`

function App() {
  return (

      <FontBox>
          <img src={WormBG} className={WormBG}/>
          <header>
              <div>
                  날씨
              </div>
          </header>
          <body>
          <div>
              날씨2
          </div>
          </body>
      </FontBox>

  );
}

export default App;
