import React from 'react';
import Svg, {Defs, Stop, RadialGradient, Path} from 'react-native-svg';

interface SvgProps {
  fill: string;
}
const MySVGComponent: React.FC<SvgProps> = ({fill = '#f2f2d4'}) => (
  <Svg width="60" height="60" viewBox="0 0 180 180">
    {/* Autor: Jesus Gabriel Rivera */}
    {/* Copyright: Copyright © Jesus Gabriel Rivera 2023 */}
    {/* Licencia: CC BY-SA 4.0 */}
    {/* Descripción: Este SVG fue creado por Jesus Gabriel Rivera. */}
    <Defs>
      <RadialGradient
        id="radialBorder"
        cx="90.063553"
        cy="90"
        fx="90.063553"
        fy="90"
        r="55.295143"
        gradientTransform="matrix(1,0,0,1.3563578,0,-32.072203)"
        gradientUnits="userSpaceOnUse">
        <Stop offset="0" stopColor="#23bad8" stopOpacity="0" />
        <Stop offset="1" stopColor="#20b5c7" stopOpacity="1" />
      </RadialGradient>
      <RadialGradient
        id="radialCenter"
        cx="90.345924"
        cy="90.702202"
        fx="90.345924"
        fy="90.702202"
        r="47.061264"
        gradientTransform="matrix(1,0,0,1.3563579,0,-32.322448)"
        gradientUnits="userSpaceOnUse">
        <Stop offset="0" stopColor="#23c5d8" stopOpacity="1" />
        <Stop offset="1" stopColor="#23c5d8" stopOpacity="0" />
      </RadialGradient>
    </Defs>
    <Path
      fill={fill}
      strokeWidth="1"
      stroke="#ADA8A8"
      d="m 30,90 c 2.034424,-33.271192 26.666667,-80 60,-80 33.33333,0 57.54122,46.757474 60,80 4.09725,55.39458 -26.66667,80 -60,80 -33.333333,0 -63.21075,-27.49104 -60,-80 z"
    />
    <Path
      fill="url(#radialBorder)"
      strokeWidth="2"
      stroke="#1b99a9"
      d="m 35,90 c 1.91561,-31.328102 23.998208,-75 55,-75 31.00179,0 52.68482,43.698889 55,75 3.85797,52.15944 -23.99821,75 -55,75 -31.001792,0 -58.023237,-25.55765 -55,-75 z"
    />
    <Path
      fill="url(#radialCenter)"
      d="m 43.481764,90.702205 c 1.630361,-26.663104 20.424689,-63.831919 46.810074,-63.831919 26.385392,0 44.839642,37.191786 46.810062,63.831919 3.2835,44.392495 -20.42467,63.831915 -46.810062,63.831915 -26.385385,0 -49.383128,-21.75192 -46.810074,-63.831915 z"
    />
  </Svg>
);

export default MySVGComponent;
