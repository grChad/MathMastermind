import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, Alert, View } from 'react-native'
import { useLinkPressHandler } from 'react-router-native'

// NOTE: Import Colors and Global State
import Colors from '../../assets/Colors'
import {
  useMathProblemDataHandler,
  useExerciseTrackingState,
} from '../../store/gameStates' // Global State
import { useMathOperationSettings } from '../../store/homeStates'

export default function ButtonNext() {
  const [operationData, setOperationData, selectAnswer, setSelectAnswer] =
    useMathProblemDataHandler((state) => [
      state.operationData,
      state.setOperationData,
      state.selectAnswer,
      state.setSelectAnswer,
    ]) // Global State

  const [countProgress, setCountProgress, setSuccess, setIsCorrect] =
    useExerciseTrackingState((state) => [
      state.countProgress,
      state.setCountProgress,
      state.setSuccess,
      state.setIsCorrect,
    ]) // Global State

  const [operation, level, quantily] = useMathOperationSettings((state) => [
    state.operation,
    state.level,
    state.quantily,
  ]) // Global State

  const [showComponent, setShowComponent] = useState(true)

  const route = useLinkPressHandler('/summary') // react-router-native

  const handlePress = (event: any) => {
    if (countProgress < quantily - 1) {
      if (selectAnswer === 0) {
        Alert.alert('Ups!!', 'tienes que seleccionar una respuesta', [
          {
            text: 'Esta bien, se me olvido',
            onPress: () => null,
            style: 'cancel',
          },
        ])
      } else {
        if (selectAnswer === operationData.result) {
          setSuccess(true)
          setIsCorrect(true)
        } else {
          setIsCorrect(false)
        }

        setShowComponent(false) // show component

        setTimeout(() => {
          setShowComponent(true) // show component

          setCountProgress(true)
          setIsCorrect() // undefined
          setOperationData(operation, level) // render operations
          setSelectAnswer(0)
        }, 1000)
      }
    } else {
      if (selectAnswer === operationData.result) {
        setSuccess(true)
        setIsCorrect(true)
      } else {
        setIsCorrect(false)
      }
      setCountProgress(true)
      setShowComponent(false) // show component

      setTimeout(() => {
        setShowComponent(true) // show component
        setIsCorrect() // undefined
        route(event)
      }, 3000)
    }
  }

  return (
    <>
      {showComponent ? (
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1.0 },
            styles.container,
          ]}
          onPress={handlePress}
        >
          <Text style={styles.title}>
            {countProgress < quantily - 1
              ? 'Siguiente Pregunta'
              : 'Última Pregunta'}
          </Text>
        </Pressable>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            {countProgress < quantily - 1
              ? 'Siguiente Pregunta'
              : 'Última Pregunta'}
          </Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.steelBlue,
    color: Colors.whiteSmoke,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontFamily: 'Asap',
    fontSize: 20,
    textShadowColor: Colors.black,
    textShadowRadius: 1,
  },
})
