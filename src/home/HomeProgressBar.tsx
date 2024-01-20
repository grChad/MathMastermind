import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {useMathOperationSettings, useComplete} from '../../store/homeStates';

export default function HomeProgressBar() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 550);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      {showComponent && (
        <View style={styles.container}>
          <ComponentAnimated />
        </View>
      )}
    </>
  );
}

const ComponentAnimated = () => {
  const setIsComplete = useComplete(state => state.setIsComplete); // Global State
  const [operation, level, quantily] = useMathOperationSettings(state => [
    state.operation,
    state.level,
    state.quantily,
  ]); // Global State

  const [isOperation, setIsOperation] = useState(0);
  const [isLevel, setIsLevel] = useState(0);
  const [isQuantily, setIsQuantily] = useState(0);

  const width = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(width.value, {duration: 800}),
  }));

  useEffect(() => {
    operation !== '' && setIsOperation(1);
    level !== '' && setIsLevel(1);
    quantily !== 0 && setIsQuantily(1);

    if (isOperation + isLevel + isQuantily === 1) {
      width.value = 65;
    } else if (isOperation + isLevel + isQuantily === 2) {
      width.value = 130;
    } else if (isOperation + isLevel + isQuantily === 3) {
      width.value = 196;
      setTimeout(() => setIsComplete(true), 1500);
    } else {
      width.value = 0;
    }
  }, [
    isOperation,
    isLevel,
    isQuantily,
    width,
    operation,
    level,
    quantily,
    setIsComplete,
  ]);

  return (
    <Animated.View style={[styles.coveringBox, animatedStyles]}>
      <Image
        source={require('../../assets/progress-bar/startup.png')}
        style={styles.rocket}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 15,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
  },
  coveringBox: {
    height: '100%',
    backgroundColor: '#4282A0',
    borderRadius: 10,
  },
  rocket: {
    width: 40,
    height: 20,
    position: 'absolute',
    right: -20,
    top: -5,
  },
});
