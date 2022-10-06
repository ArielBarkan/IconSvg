import React from 'react';
import styled from 'styled-components';

import {IconSVG} from "./IconSVG";

import './App.css';



const LogoContainer = styled.div`
  span,svg {
    width: 50px;
  }

  p,path {
    fill: red;
    &:hover {
      fill: blue;
    };
    &:active {
      fill: green;
    }
  }

`


function App() {
    return (
        <div className="App">
            <LogoContainer>
                <IconSVG url={"https://unpkg.com/mdi-svg@2.2.43/svg/access-point-network.svg"}/>
            </LogoContainer>

            <LogoContainer>
                <IconSVG url={"https://cdn.svgporn.com/logos/react.svg"}/>
            </LogoContainer>
        </div>
    );
}

export default App;
