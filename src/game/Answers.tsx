import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
} from 'react-native'

// NOTE: Import Pallets of colors &  Global state
import Colors from '../../assets/Colors'
import {
  useMathProblemDataHandler,
  useExerciseTrackingState,
} from '../../store/gameStates'

const { width } = Dimensions.get('window')

export default function Answers() {
  const [operationData, setSelectAnswer, selectAnswer] =
    useMathProblemDataHandler((state) => [
      state.operationData,
      state.setSelectAnswer,
      state.selectAnswer,
    ]) // Global State

  const isCorrect = useExerciseTrackingState((state) => state.isCorrect) // Global State

  const INTERACTIVE_MESSAGE = [
    '¿Cuál es tu respuesta?',
    '¡Respuesta correcta!',
    '¡Respuesta incorrecta!',
  ]

  return (
    <View
      style={[
        styles.container,
        isCorrect === true
          ? { borderColor: Colors.steelBlue }
          : isCorrect === false
            ? { borderColor: Colors.red }
            : isCorrect === undefined && { borderColor: 'transparent' },
      ]}
    >
      <View
        style={[
          styles.boxContent,
          isCorrect !== undefined && { borderColor: 'transparent' },
        ]}
      >
        <Text
          style={[
            styles.questionText,
            isCorrect === true
              ? { color: Colors.steelBlue }
              : isCorrect === false
                ? { color: Colors.red }
                : { color: Colors.lavanda },
          ]}
        >
          {isCorrect === true
            ? INTERACTIVE_MESSAGE[1]
            : isCorrect === false
              ? INTERACTIVE_MESSAGE[2]
              : INTERACTIVE_MESSAGE[0]}
        </Text>
        <View style={styles.boxOptions}>
          {operationData.optionsAnswers?.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectAnswer(item)}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 },
                styles.buttonOptions,
                selectAnswer === item && {
                  backgroundColor: Colors.steelBlue,
                },
                width > 500 && { paddingHorizontal: 15 },
              ]}
            >
              <Text
                style={[styles.responseAnswer, width > 500 && { fontSize: 40 }]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      {isCorrect !== undefined && (
        <View
          style={{
            position: 'absolute',
            top: -70,
            right: 0,
            width: 50,
            height: 50,
          }}
        >
          <Image
            source={
              isCorrect === true
                ? require('../../assets/check.png')
                : require('../../assets/warning.png')
            }
            style={{ width: '100%', height: '100%' }}
          />
        </View>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    width: 'auto',
    maxWidth: 500,
    marginHorizontal: '5%',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'red',
    position: 'relative',
  },
  // NOTE: Aqui va todo el contenido
  boxContent: {
    borderWidth: 1,
    borderColor: Colors.lavanda,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  questionText: {
    fontFamily: 'ComicNeue',
    fontSize: 27,
    marginBottom: 20,
    textAlign: 'center',
  },
  // NOTE: opciones para elegir la respuesta correcta.
  boxOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  buttonOptions: {
    borderWidth: 1,
    borderColor: Colors.steelBlue,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  responseAnswer: {
    fontFamily: 'Asap',
    fontSize: 35,
    color: Colors.gold,
    textShadowColor: Colors.dark,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
})
