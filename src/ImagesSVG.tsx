import React from 'react';
import Svg, {Rect, Path, Polygon} from 'react-native-svg';

interface WidthSizeProps {
  size: number;
  fill?: string;
  stroke?: string;
}

export const SvgPlus: React.FC<WidthSizeProps> = ({
  size,
  fill = '#FA8072',
  stroke = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 448 512">
    <Path
      d="M256 80a32 32 0 10-64 0v144H48a32 32 0 100 64h144v144a32 32 0 1064 0V288h144a32 32 0 100-64H256V80z"
      fill={fill}
      strokeWidth="5"
      stroke={stroke}
    />
  </Svg>
);

export const SvgMinus: React.FC<WidthSizeProps> = ({
  size,
  fill = '#FA8072',
  stroke = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 448 512">
    <Path
      d="M432 256a32 32 0 01-32 32H48a32 32 0 110-64h352a32 32 0 0132 32z"
      fill={fill}
      strokeWidth="5"
      stroke={stroke}
    />
  </Svg>
);

export const SvgMultiplication: React.FC<WidthSizeProps> = ({
  size,
  fill = '#FA8072',
  stroke = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 375 512">
    <Path
      d="M342.6 150.6a32 32 0 00-45.3-45.3L192 210.7 86.6 105.4a32 32 0 00-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0045.3 45.3L192 301.3l105.4 105.3a32 32 0 0045.3-45.3L237.3 256l105.3-105.4z"
      fill={fill}
      strokeWidth="5"
      stroke={stroke}
    />
  </Svg>
);

export const SvgDivision: React.FC<WidthSizeProps> = ({
  size,
  fill = '#FA8072',
  stroke = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 448 512">
    <Path
      d="M272 96a48 48 0 10-96 0 48 48 0 1096 0zm0 320a48 48 0 10-96 0 48 48 0 1096 0zm128-128a32 32 0 100-64H48a32 32 0 100 64h352z"
      fill={fill}
      strokeWidth="5"
      stroke={stroke}
    />
  </Svg>
);

export const FrameImage: React.FC<WidthSizeProps> = ({size}) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 400 400"
      strokeWidth="3"
      stroke="#000000">
      <Path
        d="M30 90 l-30 -25 l36 -10 a64 64 0 0 1 24 -18 l15 -35 l18 28 h236a64 64 0 0 1 64 64v236a64 64 0 0 1-64 64H94a64 64 0 0 1-64-64V94z"
        fill="#8e67ad"
      />
      <Rect x="70" y="70" width="280" height="280" fill="white" />
    </Svg>
  );
};

export const TouchTriangle: React.FC<WidthSizeProps> = ({size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 400 400">
      <Polygon
        points="50,110 350,110 350,170 320,170 320,200 290,200 290,230 260,230 260,260 230,260 230,290 170,290 170,260 140,260 140,230, 110,230 110,200 80,200 80,170 50,170"
        fill="#4E494E"
      />
      <Polygon
        points="50,110 320,110 320,140 290,140 290,170, 260,170 260,200 230,200 230,230 200,230 200,260 170,260 170,230 140,230 140,200 110,200 110,170 80,170 80,140 50,140"
        fill="#A2A1A9"
        stroke="#000000"
        strokeWidth="5"
      />
    </Svg>
  );
};
