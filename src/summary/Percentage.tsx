import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import Svg, {Circle} from 'react-native-svg';

// NOTE: Import Colors & Global State
import Colors from '../../assets/Colors';
import {useMathOperationSettings} from '../../store/homeStates'; // Global State
import {useExerciseTrackingState} from '../../store/gameStates'; // Global State

const {width} = Dimensions.get('window');
const HEIGHT_BOX = 210;

const CIRCLE_LENGTH = 550; // 2PI*R
const RADIO = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Percentage() {
  const quantily = useMathOperationSettings(state => state.quantily); // Global State
  const success = useExerciseTrackingState(state => state.success); // Global State

  const progress = useSharedValue(0); // reanimated

  const PERCENTAGE = success / quantily;

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}%`;
  });

  useEffect(() => {
    progress.value = withTiming(PERCENTAGE, {duration: 3000});
  }, []);

  return (
    <View style={{width}}>
      <Text style={styles.textTitle}>Obtuviste un resultado del:</Text>

      <View style={styles.container}>
        <ReText style={styles.progressText} text={progressText} />
        <Svg style={styles.styleSVG}>
          <Circle
            cx={width / 2}
            cy={HEIGHT_BOX / 2}
            r={RADIO}
            stroke={Colors.rock}
            strokeWidth={15}
          />
          <AnimatedCircle
            cx={width / 2}
            cy={HEIGHT_BOX / 2}
            r={RADIO}
            stroke={Colors.steelBlue}
            strokeWidth={15}
            strokeDasharray={CIRCLE_LENGTH}
            animatedProps={animatedProps}
            strokeLinecap={'round'}
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'ComicNeue',
    fontSize: 23,
    textAlign: 'center',
    color: Colors.deepSkyBlue,
  },
  container: {
    width: '100%',
    height: HEIGHT_BOX,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  progressText: {
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    fontFamily: 'Asap',
    color: Colors.whiteSmoke,
    width: 200,
    textAlign: 'center',
  },
  styleSVG: {
    position: 'absolute',
    zIndex: 5,
    fill: 'transparent',
  },
});
