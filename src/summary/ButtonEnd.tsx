import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useLinkPressHandler} from 'react-router-native';

// NOTE: Import Colors & Global State & Components
import Colors from '../../assets/Colors';
import {useMathOperationSettings} from '../../store/homeStates'; // Global State
import {
  useExerciseTrackingState,
  useMathProblemDataHandler,
} from '../../store/gameStates'; // Global State

export default function ButtonEnd() {
  const [setOperations, setLevel, setQuantily] = useMathOperationSettings(
    state => [state.setOperations, state.setLevel, state.setQuantily],
  ); // Global State
  const [setCountProgress, setSuccess] = useExerciseTrackingState(state => [
    state.setCountProgress,
    state.setSuccess,
  ]); // Global State
  const setSelectAnswer = useMathProblemDataHandler(
    state => state.setSelectAnswer,
  ); // Global State

  const router = useLinkPressHandler('/home');

  const handleChick = () => {
    setOperations(''); // reiniciar 'Operations' = ''
    setLevel(''); // reiniciar 'Level' = ''
    setQuantily(0); // reiniciar 'Quantily' = 0

    router(); // new router

    setCountProgress(false); // reiniciar 'CountProgress' = 0
    setSuccess(false); // reiniciar 'Success' = 0
    setSelectAnswer(0); // reiniciar 'SelectAnswer' = 0
  };

  // FIXME: ver si el div es necesario
  return (
    <Pressable
      onPress={handleChick}
      style={({pressed}) => [
        {opacity: pressed ? 0.7 : 1.0},
        styles.buttonPress,
      ]}>
      <Text style={styles.button}>¿Quieres echar otra partida?</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  buttonPress: {
    backgroundColor: Colors.deepSkyBlue,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  button: {
    color: Colors.whiteSmoke,
    fontFamily: 'Asap',
    fontSize: 20,
    textShadowColor: Colors.black,
    textShadowRadius: 1,
  },
});
