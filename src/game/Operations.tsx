import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

// NOTE: Import Pallets, Global state and dates
import Colors from '../../assets/Colors'
import { useMathProblemDataHandler } from '../../store/gameStates' // Global State
import { useMathOperationSettings } from '../../store/homeStates' // Global State
import { OperationType } from '../utils/gameData'

// Components
import { SvgPlus, SvgMinus, SvgMultiplication, SvgDivision } from '../ImagesSVG'

const { width } = Dimensions.get('window')

export default function Operations() {
  const operation = useMathOperationSettings((state) => state.operation) // Global State
  const [operationData, selectAnswer] = useMathProblemDataHandler((state) => [
    state.operationData,
    state.selectAnswer,
  ]) // Global State

  return (
    <View style={styles.container}>
      <Text style={styles.floatingTitle}>{operation}</Text>
      <View style={styles.boxOperations}>
        <View style={styles.operators}>
          <Text
            style={[
              styles.textNumber,
              width > 500 && styles.textNumberBigScreen,
            ]}
          >
            {operationData.operatorA}
          </Text>
          <Text
            style={[
              styles.textNumber,
              width > 500 && styles.textNumberBigScreen,
            ]}
          >
            {operationData.operatorB}
          </Text>
        </View>

        <View style={styles.separateLine} />

        <View style={styles.result}>
          <Text
            style={[
              selectAnswer === 0 ? styles.textNumber_init : styles.textNumber,
              width > 500 && styles.textNumberBigScreen,
            ]}
          >
            {selectAnswer}
          </Text>
        </View>
      </View>
      <View className="h-full">
        {operation === OperationType.Suma ? (
          <SvgPlus size={80} fill="#D65E69" />
        ) : operation === OperationType.Resta ? (
          <SvgMinus size={80} fill="#D65E69" />
        ) : operation === OperationType.Multiplicacion ? (
          <SvgMultiplication size={80} fill="#D65E69" />
        ) : (
          operation === OperationType.Divicion && (
            <SvgDivision size={80} fill="#D65E69" />
          )
        )}
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 20,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    borderTopRightRadius: 0,
    backgroundColor: Colors.rock,
    position: 'relative',
  },
  floatingTitle: {
    position: 'absolute',
    top: -12,
    right: 0,
    fontFamily: 'ComicNeue',
    fontSize: 18,
    backgroundColor: Colors.gold,
    paddingHorizontal: 8,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    color: Colors.rock,
  },
  // NOTE: Box operators
  boxOperations: { alignItems: 'flex-end' },
  operators: {
    paddingHorizontal: 7, // sale 7 sumando los 3.5 de los bordes y los 3.5 de los paddings => boxAnswer
  },
  textNumber: {
    fontFamily: 'Asap',
    textAlign: 'right',
    fontSize: 55,
    color: 'white',
    lineHeight: 55,
    textShadowColor: Colors.black,
    textShadowRadius: 2,
  },
  textNumberBigScreen: { fontSize: 65, lineHeight: 65 },
  textNumber_init: {
    fontFamily: 'Asap',
    textAlign: 'right',
    fontSize: 55,
    color: Colors.rock,
    lineHeight: 55,
  },
  // NOTE: Separate line
  separateLine: {
    width: '100%',
    height: 8,
    backgroundColor: Colors.gold,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 5,
    marginBottom: 8,
  },
  // NOTE: Box answer | border (0.5 + 2.5 + 0.5 = 3.5) + paddingHorizontal (3.5) = 7
  result: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: Colors.gold,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
})
