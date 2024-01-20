import React from 'react'
import Svg, { Rect, Defs, LinearGradient, Stop, Text } from 'react-native-svg'

interface ButtonProps {
  keyName: string
  keyColor: string
}

const YesOrNotSvg: React.FC<ButtonProps> = ({ keyName, keyColor }) => {
  return (
    <Svg width={80} height={50} viewBox="0 0 400 250">
      <Defs>
        <LinearGradient
          id="grad-exterior"
          x1="133.63428"
          y1="203.16054"
          x2="290.48901"
          y2="48.742001"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.0854042,0,0,1.0466891,-20.504614,-3.1726648)"
        >
          <Stop offset="0" stopColor={keyColor} stopOpacity="1" />
          <Stop offset="1" stopColor="#f0f0f0" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient
          id="grad-interior"
          x1={249.35866}
          y1={89.91909}
          x2={36.604374}
          y2={318.98776}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.0981292,0,0,1.0630944,-21.203791,-3.9067682)"
        >
          <Stop stopColor="#ffffff" stopOpacity={1} offset={0} />
          <Stop stopColor="#dfdfdf" stopOpacity={0} offset={1} />
        </LinearGradient>

        <LinearGradient
          id="linearGradien01"
          x1={69.386154}
          y1={121.25618}
          x2={333.48775}
          y2={121.25618}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.0981292,0,0,1.0630944,-21.203791,-3.9067682)"
        >
          <Stop stopColor="#a6a6a6" stopOpacity={0.75294101} offset={0} />
          <Stop stopColor="#333333" stopOpacity={0} offset={1} />
        </LinearGradient>
      </Defs>
      <Rect
        width={318.93411}
        height={208.93413}
        x={40.53294}
        y={20.532938}
        ry={37.251114}
        fill="url(#grad-exterior)"
        strokeWidth={1.06588}
        stroke="#838383"
        strokeOpacity={0.752941}
      />

      <Rect
        width={288.91953}
        height={178.91953}
        x={55.540234}
        y={35.540234}
        ry={32.151482}
        fill="url(#grad-interior)"
        strokeWidth={1.08047}
        stroke="url(#linearGradien01)"
        strokeOpacity={0.752941}
      />
      <Text
        x={205}
        y={180}
        fontSize="150"
        fontWeight="bold"
        fill={keyColor}
        textAnchor="middle"
        strokeWidth={2}
        stroke="#777777"
      >
        {keyName}
      </Text>
    </Svg>
  )
}

export default YesOrNotSvg
