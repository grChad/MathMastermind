import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// NOTE: palette, data, Global state
import Colors from '../../assets/Colors';
import {OperationType as OpType} from '../utils/gameData';
import {useMathOperationSettings} from '../../store/homeStates'; // Global State

// components
import {SvgPlus, SvgMinus, SvgMultiplication, SvgDivision} from './SvgAnimated';

export default function SelectOperation() {
  const [operations, setOperations] = useMathOperationSettings(state => [
    state.operation,
    state.setOperations,
  ]); // Global State

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Que operacion haras?</Text>
      <View style={styles.boxContent}>
        <Pressable onPressIn={() => setOperations(OpType.Suma)}>
          <SvgPlus stroke={operations === OpType.Suma ? 'black' : '#0B6666'} />
        </Pressable>
        <Pressable onPressIn={() => setOperations(OpType.Resta)}>
          <SvgMinus
            stroke={operations === OpType.Resta ? 'black' : '#AD3838'}
          />
        </Pressable>
        <Pressable onPressIn={() => setOperations(OpType.Multiplicacion)}>
          <SvgMultiplication
            stroke={operations === OpType.Multiplicacion ? 'black' : '#D48F10'}
          />
        </Pressable>
        <Pressable onPressIn={() => setOperations(OpType.Divicion)}>
          <SvgDivision
            stroke={operations === OpType.Divicion ? 'black' : '#5947C8'}
          />
        </Pressable>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 10,
    minWidth: '70%',
    maxWidth: 950,
    marginHorizontal: '10%',
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 15,
    padding: 15,
  },
  title: {fontFamily: 'ComicNeue', fontSize: 23, color: Colors.dark},

  boxContent: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
