import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useLinkPressHandler} from 'react-router-native';

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

// NOTE: Import Pallets, Global State and Data
import Colors from '../../assets/Colors';
import {useMathOperationSettings, useComplete} from '../../store/homeStates'; // Global State
import {useMathProblemDataHandler} from '../../store/gameStates'; // Global State

// Component
import HomeProgressBar from './HomeProgressBar';

export default function Buttonrun() {
  const isComplete = useComplete(state => state.isComplete); // Global State
  const [operation, level, quantily] = useMathOperationSettings(state => [
    state.operation,
    state.level,
    state.quantily,
  ]); // Global State
  const setOperationData = useMathProblemDataHandler(
    state => state.setOperationData,
  ); // Global State

  const [showHomeProgressBar, setShowHomeProgressBar] = useState(false);

  const newRoute = useLinkPressHandler('/game'); // react-router-native
  const handlePress = (event: any) => {
    setOperationData(operation, level); // render operations
    newRoute(event);
  };

  const height = useSharedValue(5);
  const animatedStyles = useAnimatedStyle(() => ({
    height: withTiming(height.value, {duration: 500}),
  }));

  useEffect(() => {
    if (operation !== '' || level !== '' || quantily !== 0) {
      height.value = 50;
      setShowHomeProgressBar(true);
    } else {
      // Luego quitar el else
      height.value = 5;
      setShowHomeProgressBar(false);
    }
  }, [height, operation, level, quantily]);

  return (
    <>
      {isComplete ? (
        <Pressable
          onPress={handlePress}
          style={({pressed}) => [
            {opacity: pressed ? 0.7 : 1},
            styles.buttonPress,
          ]}>
          <Text style={styles.text}>Go 👉</Text>
        </Pressable>
      ) : (
        <Animated.View style={[styles.containerAnimated, animatedStyles]}>
          {showHomeProgressBar && <HomeProgressBar />}
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    width: 240,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.deepSkyBlue,
    borderRadius: 25,
  },
  text: {
    fontFamily: 'Asap',
    fontSize: 20,
    color: Colors.white,
    textShadowColor: Colors.black,
    textShadowRadius: 3,
  },

  containerAnimated: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.deepSkyBlue,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});
