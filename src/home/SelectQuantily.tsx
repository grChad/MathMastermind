import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// NOTE: Import palette, Global state & data
import Colors from '../../assets/Colors';
import {useMathOperationSettings} from '../../store/homeStates';
import {QuantilyType} from '../utils/gameData';

import {type HomeSelectedQuantilyProps} from '../types';
import {RoundedSquare} from '../utils/CustomSvgs';

export default function SelectOperation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cuantos harás?</Text>
      <View style={styles.boxContent}>
        <ButtonCustom amount={QuantilyType.Uno} />
        <ButtonCustom amount={QuantilyType.Dos} />
        <ButtonCustom amount={QuantilyType.Tres} />
        <ButtonCustom amount={QuantilyType.Cuatro} />
      </View>
    </View>
  );
}

export const ButtonCustom: React.FC<HomeSelectedQuantilyProps> = ({amount}) => {
  const [quantily, setQuantily] = useMathOperationSettings(state => [
    state.quantily,
    state.setQuantily,
  ]); // Global State

  return (
    <Pressable
      onPressIn={() => setQuantily(amount)}
      style={({pressed}) => [
        {opacity: pressed ? 0.7 : 1.0},
        styles.ButtonPressOperation,
      ]}>
      <RoundedSquare stroke={quantily === amount ? 'tomato' : '#026ab3'} />
      <Text
        style={[styles.textButton, quantily === amount && {color: 'tomato'}]}>
        {amount}
      </Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 10,
    minWidth: '70%',
    maxWidth: 950,
    marginHorizontal: '10%',
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 15,
    padding: 15,
  },
  boxContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {fontFamily: 'ComicNeue', fontSize: 23, color: Colors.dark},

  // NOTE: segundo componente "ButtonCustom()"
  ButtonPressOperation: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    position: 'absolute',
    fontFamily: 'Asap',
    fontSize: 30,
    marginVertical: 3,
    color: Colors.deepSkyBlue,
    textShadowColor: Colors.black,
    textShadowRadius: 1,
  },
});
