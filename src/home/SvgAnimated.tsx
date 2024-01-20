import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Path, Circle} from 'react-native-svg';

// NOTE: Global state, data
import {useMathOperationSettings} from '../../store/homeStates';
import {OperationType} from '../utils/gameData';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const SIZE = 80;
const SIZE_ZOOM = 100;

interface SvgAnimatedProps {
  stroke: string;
}

export const SvgPlus: React.FC<SvgAnimatedProps> = ({stroke}) => {
  const operation = useMathOperationSettings(state => state.operation); // state
  const size = useSharedValue(SIZE); // animated

  const handlePress = () => {
    operation === OperationType.Suma
      ? (size.value = SIZE_ZOOM)
      : (size.value = SIZE);
  };

  const animatedProps = useAnimatedProps(() => ({
    width: withTiming(size.value, {duration: 100}),
    height: withTiming(size.value, {duration: 100}),
  }));

  useEffect(() => {
    handlePress();
  }, [operation]);

  return (
    <AnimatedSvg animatedProps={animatedProps} viewBox="0 0 512 512">
      {/* Autor: Jesus Gabriel Rivera */}
      {/* Copyright: Copyright © Jesus Gabriel Rivera 2023 */}
      {/* Licencia: CC BY-SA 4.0 */}
      {/* Descripción: Este SVG fue creado por Jesus Gabriel Rivera. */}
      <Path
        d="M 90.063423,90.052578 C 122.884,56.655947 199.53887,56.010073 256.00547,56.000056 c 56.47546,-0.01002 131.71675,1.283308 165.98019,33.998987 34.26345,32.715677 34.01265,109.515977 34.01243,165.998397 -2.2e-4,56.48022 0.8652,131.03433 -34.01243,165.99171 -34.87763,34.95739 -109.50432,34.00468 -165.98019,34.00519 -56.48091,5.1e-4 -130.43333,1.25736 -165.995579,-34.00519 C 54.447647,386.72661 56.002064,312.47666 56.012374,255.99744 56.022681,199.52992 57.242843,123.4492 90.063423,90.052578 Z"
        fill="#008b8b"
        strokeWidth="10"
        stroke={stroke}
      />
      <Path
        d="m 213.29772,216.68925 c 3.49368,-4.09626 -2.57632,-65.67919 5.28885,-75.73258 21.39196,-27.3435 62.60311,-14.26461 71.18658,0.18865 8.5545,14.40449 5.6732,68.14808 8.58685,71.35237 2.91366,3.20428 63.33219,0.13938 74.02949,5.48718 19.36717,9.68204 18.23925,61.42727 3.89406,73.53017 -8.70226,7.34203 -71.59754,5.91451 -75.09157,9.52369 -3.49403,3.60918 -0.47997,60.01342 -7.11813,70.99562 -9.05798,14.98558 -52.51716,21.2933 -71.96172,6.71134 -13.0106,-9.75697 -8.52376,-72.73377 -12.04438,-76.91075 -3.52063,-4.17698 -61.59503,1.66314 -70.57076,-5.33058 -16.4626,-12.82738 -20.12109,-46.76682 -4.6272,-66.45812 8.39523,-10.66954 74.93423,-9.26075 78.42793,-13.35699 z"
        fill="white"
        strokeWidth="2"
        stroke="black"
      />
    </AnimatedSvg>
  );
};

export const SvgMinus: React.FC<SvgAnimatedProps> = ({stroke}) => {
  const operation = useMathOperationSettings(state => state.operation); // state
  const size = useSharedValue(SIZE); // animated

  const handlePress = () => {
    operation === OperationType.Resta
      ? (size.value = SIZE_ZOOM)
      : (size.value = SIZE);
  };

  const animatedProps = useAnimatedProps(() => ({
    width: withTiming(size.value, {duration: 100}),
    height: withTiming(size.value, {duration: 100}),
  }));

  useEffect(() => {
    handlePress();
  }, [operation]);

  return (
    <AnimatedSvg animatedProps={animatedProps} viewBox="0 0 512 512">
      {/* Autor: Jesus Gabriel Rivera */}
      {/* Copyright: Copyright © Jesus Gabriel Rivera 2023 */}
      {/* Licencia: CC BY-SA 4.0 */}
      {/* Descripción: Este SVG fue creado por Jesus Gabriel Rivera. */}
      <Path
        d="M 90.063423,90.052578 C 122.884,56.655947 199.53887,56.010073 256.00547,56.000056 c 56.47546,-0.01002 131.71675,1.283308 165.98019,33.998987 34.26345,32.715677 34.01265,109.515977 34.01243,165.998397 -2.2e-4,56.48022 0.8652,131.03433 -34.01243,165.99171 -34.87763,34.95739 -109.50432,34.00468 -165.98019,34.00519 -56.48091,5.1e-4 -130.43333,1.25736 -165.995579,-34.00519 C 54.447647,386.72661 56.002064,312.47666 56.012374,255.99744 56.022681,199.52992 57.242843,123.4492 90.063423,90.052578 Z"
        fill="#cd5c5c"
        strokeWidth="10"
        stroke={stroke}
      />
      <Path
        d="m 255.63984,215.32525 c 10.78936,-0.46474 108.74754,-1.47733 120.17297,5.8871 13.63994,8.79183 14.96637,54.48934 3.10238,64.06072 -16.60561,13.39669 -85.71988,10.51946 -115.38113,11.42947 -29.66125,0.90999 -118.60909,0.0878 -126.14941,-7.55691 -18.77896,-19.03905 -13.71071,-53.30265 -1.26426,-61.94395 14.37213,-9.97824 108.73009,-11.41169 119.51945,-11.87643 z"
        fill="white"
        strokeWidth="2"
        stroke="black"
      />
    </AnimatedSvg>
  );
};

export const SvgMultiplication: React.FC<SvgAnimatedProps> = ({stroke}) => {
  const operation = useMathOperationSettings(state => state.operation); // state
  const size = useSharedValue(SIZE); // animated

  const handlePress = () => {
    operation === OperationType.Multiplicacion
      ? (size.value = SIZE_ZOOM)
      : (size.value = SIZE);
  };

  const animatedProps = useAnimatedProps(() => ({
    width: withTiming(size.value, {duration: 100}),
    height: withTiming(size.value, {duration: 100}),
  }));

  useEffect(() => {
    handlePress();
  }, [operation]);

  return (
    <AnimatedSvg animatedProps={animatedProps} viewBox="0 0 512 512">
      {/* Autor: Jesus Gabriel Rivera */}
      {/* Copyright: Copyright © Jesus Gabriel Rivera 2023 */}
      {/* Licencia: CC BY-SA 4.0 */}
      {/* Descripción: Este SVG fue creado por Jesus Gabriel Rivera. */}
      <Path
        d="M 90.063423,90.052578 C 122.884,56.655947 199.53887,56.010073 256.00547,56.000056 c 56.47546,-0.01002 131.71675,1.283308 165.98019,33.998987 34.26345,32.715677 34.01265,109.515977 34.01243,165.998397 -2.2e-4,56.48022 0.8652,131.03433 -34.01243,165.99171 -34.87763,34.95739 -109.50432,34.00468 -165.98019,34.00519 -56.48091,5.1e-4 -130.43333,1.25736 -165.995579,-34.00519 C 54.447647,386.72661 56.002064,312.47666 56.012374,255.99744 56.022681,199.52992 57.242843,123.4492 90.063423,90.052578 Z"
        fill="#ffa500"
        strokeWidth="10"
        stroke={stroke}
      />
      <Path
        d="m 125.03822,187.36186 c 4.23214,-32.58333 32.65933,-56.36908 51.37557,-58.08426 21.64414,-1.9835 79.74585,56.50804 79.74585,56.50804 0,0 53.32574,-61.62275 71.58129,-60.77701 29.30063,1.35744 55.6972,34.2553 55.08612,49.50062 -0.90574,22.59614 -53.54125,78.53902 -53.54125,78.53902 0,0 59.57187,57.96451 57.66959,78.01702 -3.06797,32.34026 -39.81411,55.52116 -52.98275,55.80673 -20.8637,0.45243 -76.65004,-57.34728 -76.65004,-57.34728 0,0 -55.59724,57.17097 -73.36508,57.4718 -24.3478,0.41224 -58.87202,-36.06393 -56.09061,-54.7148 3.54685,-23.78355 56.36151,-74.1878 56.36151,-74.1878 0,0 -60.97008,-57.02865 -59.1902,-70.73208 z"
        fill="white"
        strokeWidth="2"
        stroke="black"
      />
    </AnimatedSvg>
  );
};

export const SvgDivision: React.FC<SvgAnimatedProps> = ({stroke}) => {
  const operation = useMathOperationSettings(state => state.operation); // state
  const size = useSharedValue(SIZE); // animated

  const handlePress = () => {
    operation === OperationType.Divicion
      ? (size.value = SIZE_ZOOM)
      : (size.value = SIZE);
  };

  const animatedProps = useAnimatedProps(() => ({
    width: withTiming(size.value, {duration: 100}),
    height: withTiming(size.value, {duration: 100}),
  }));

  useEffect(() => {
    handlePress();
  }, [operation]);

  return (
    <AnimatedSvg
      animatedProps={animatedProps}
      viewBox="0 0 512 512"
      fill="white"
      strokeWidth="2"
      stroke="black">
      {/* Autor: Jesus Gabriel Rivera */}
      {/* Copyright: Copyright © Jesus Gabriel Rivera 2023 */}
      {/* Licencia: CC BY-SA 4.0 */}
      {/* Descripción: Este SVG fue creado por Jesus Gabriel Rivera. */}
      <Path
        d="M 90.063423,90.052578 C 122.884,56.655947 199.53887,56.010073 256.00547,56.000056 c 56.47546,-0.01002 131.71675,1.283308 165.98019,33.998987 34.26345,32.715677 34.01265,109.515977 34.01243,165.998397 -2.2e-4,56.48022 0.8652,131.03433 -34.01243,165.99171 -34.87763,34.95739 -109.50432,34.00468 -165.98019,34.00519 -56.48091,5.1e-4 -130.43333,1.25736 -165.995579,-34.00519 C 54.447647,386.72661 56.002064,312.47666 56.012374,255.99744 56.022681,199.52992 57.242843,123.4492 90.063423,90.052578 Z"
        fill="#7b68ee"
        strokeWidth="10"
        stroke={stroke}
      />
      <Path d="m 255.63984,215.32525 c 10.78936,-0.46474 108.74754,-1.47733 120.17297,5.8871 13.63994,8.79183 14.96637,54.48934 3.10238,64.06072 -16.60561,13.39669 -85.71988,10.51946 -115.38113,11.42947 -29.66125,0.90999 -118.60909,0.0878 -126.14941,-7.55691 -18.77896,-19.03905 -13.71071,-53.30265 -1.26426,-61.94395 14.37213,-9.97824 108.73009,-11.41169 119.51945,-11.87643 z" />
      <Circle cx="256" cy="351" r="41" />
      <Circle cx="256" cy="161" r="41" />
    </AnimatedSvg>
  );
};
