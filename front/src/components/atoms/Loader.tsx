import React, { ReactElement } from 'react'
import styled, { keyframes, css } from 'styled-components'

// This linear loading bar is referred to:
// https://codepen.io/dotup/pen/xQqymX
const loaderStyle = {
  height: '5px',
  linearBackground: '#BBDEFB',
  linearBarColor: '#1565C0',
}

const growBar1 = keyframes`
  0% {
    animation-timing-function: linear;
    transform: scaleX(.1);
  }
  36.6% {
    animation-timing-function: cubic-bezier(.33473, .12482, .78584, 1);
    transform: scaleX(.1);
  }
  69.15% {
    animation-timing-function: cubic-bezier(.22573, 0, .23365, 1.37098);
    transform: scaleX(.83);
  }
  100% {
    transform: scaleX(.1);
  }
`

const moveBar1 = keyframes`
  0% {
    left: -105.16667%;
    animation-timing-function: linear;
  }
  20% {
    left: -105.16667%;
    animation-timing-function: cubic-bezier(.5, 0, .70173, .49582);
  }
  69.15% {
    left: 21.5%;
    animation-timing-function: cubic-bezier(.30244, .38135, .55, .95635);
  }
  100% {
    left: 95.44444%;
  }
`

const growBar2 = keyframes`
  0% {
    animation-timing-function: cubic-bezier(.20503,.05705,.57661,.45397);
    transform: scaleX(.1);
  }
  19.15% {
    animation-timing-function: cubic-bezier(.15231,.19643,.64837,1.00432);
    transform: scaleX(.57);
  }
  44.15% {
    animation-timing-function: cubic-bezier(.25776,-.00316,.21176,1.38179);
    transform: scaleX(.91);
  }
  100% {
    transform: scaleX(.1);
  }
`

const moveBar2 = keyframes`
  0% {
    left: -54.88889%;
    animation-timing-function: cubic-bezier(.15,0,.51506,.40968);
  }
  25% {
    left: -17.25%;
    animation-timing-function: cubic-bezier(.31033,.28406,.8,.73372);
  }
  48.35% {
    left: 29.5%;
    animation-timing-function: cubic-bezier(.4,.62703,.6,.90203);
  }
  100% {
    left: 117.38889%;
  }
`

const start = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 2px;
    opacity: 1;
  }
`

const LoaderContainer = styled.div`
  background: ${loaderStyle.linearBackground};
  height: ${loaderStyle.height};
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  overflow: hidden;
  animation: ${start} .3s ease-in;
`

const LoaderBar = styled.div<{primary: boolean}>`
  position: absolute;
  background: ${loaderStyle.linearBarColor};
  transition: transform .2s linear;
  left 0;
  top 0;
  bottom: 0;
  width: 100%;
  ${props => props.primary ? css`
    animation: ${growBar1} 2.5s infinite, ${moveBar1} 2.5s infinite  
  ` : css`
    animation: ${growBar2} 2.5s infinite, ${moveBar2} 2.5s infinite
  `}
`

function Loader(): ReactElement {
  return (
    <LoaderContainer>
      <LoaderBar primary={true} />
      <LoaderBar primary={false} />
    </LoaderContainer>
  )
}

export default Loader
