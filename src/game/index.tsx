// HomeScreen.js
import { useEffect } from 'react'
import { SafeAreaView, StatusBar, View, BackHandler, Alert } from 'react-native'

import { useLinkPressHandler } from 'react-router-native'

// NOTE: import Global State
import { useMathOperationSettings } from '../../store/homeStates' // Global State
import {
  useExerciseTrackingState,
  useMathProblemDataHandler,
} from '../../store/gameStates' // Global State

// Import components
import NavBar from './NavBar'
import ProgressBar from './ProgressBar'
import Operations from './Operations'
import Answers from './Answers'
import ButtonNext from './ButtonNext'

export default function Game() {
  const [setOperations, setLevel, setQuantily] = useMathOperationSettings(
    (state) => [state.setOperations, state.setLevel, state.setQuantily],
  ) // Global State
  const [setCountProgress, setSuccess] = useExerciseTrackingState((state) => [
    state.setCountProgress,
    state.setSuccess,
  ]) // Global State
  const setSelectAnswer = useMathProblemDataHandler(
    (state) => state.setSelectAnswer,
  ) // Global State

  const newRouter = useLinkPressHandler('/home') // react-router-native
  const backActionHandler = () => {
    Alert.alert(
      '¡Salir!',
      'Si abandonas el juego, tendrás que empezar desde el principio.',
      [
        { text: '¡No quiero 😿! Miauuu', onPress: () => null, style: 'cancel' },
        {
          text: 'Esta bien 💪',
          onPress: () => {
            // HACK: El orden si importa
            setOperations('') // reiniciar 'Operations' = ''
            setLevel('') // reiniciar 'Level' = ''
            setQuantily(0) // reiniciar 'Quantily' = 0

            newRouter() // nueva ruta

            setCountProgress(false) // reiniciar 'CountProgress' = 0
            setSuccess(false) // reiniciar 'Success' = 0
            setSelectAnswer(0) // reiniciar 'SelectAnswer' = 0
          },
        },
      ],
    )
    return true
  }

  useEffect(() => {
    // Agregue el evento para el botón de back en Android
    BackHandler.addEventListener('hardwareBackPress', backActionHandler)

    return () =>
      // Limpiar/remover el evento
      BackHandler.removeEventListener('hardwareBackPress', backActionHandler)
  }, [])

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="#202f36" barStyle="light-content" />
      <NavBar />
      <ProgressBar />
      <View className="flex-1 items-center justify-around landscape:flex-row">
        <View className="landscape:flex-[4] items-center">
          <Operations />
        </View>
        <View className="landscape:flex-[6] items-center" style={{ gap: 30 }}>
          <Answers />
          <ButtonNext />
        </View>
      </View>
    </SafeAreaView>
  )
}
