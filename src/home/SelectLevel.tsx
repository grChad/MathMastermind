import React from 'react';
import {View, Text, Pressable, StyleSheet, ImageBackground} from 'react-native';

// NOTE: Import palette, global states & data
import Colors from '../../assets/Colors';
import {useMathOperationSettings} from '../../store/homeStates';
import {LevelType} from '../utils/gameData';

import {type HomeSelectedLevelProps} from '../types';

import {RoundedSquare} from '../utils/CustomSvgs';

export default function PruevaLevel() {
  const level = useMathOperationSettings(state => state.level); // Global State

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elige un nivel</Text>
      <View style={styles.boxMain}>
        <View style={styles.boxLeft}>
          <View style={styles.boxLeftUp}>
            <ButtonCustom name={LevelType.Facil} index={1} />
            <ButtonCustom name={LevelType.Normal} index={2} />
          </View>
          <View style={styles.boxLeftDown}>
            <ButtonCustom name={LevelType.Dificil} index={3} />
            <ButtonCustom name={LevelType.Genio} index={4} />
          </View>
        </View>
        <ImageBackground
          resizeMode="contain"
          imageStyle={styles.styleImage}
          style={styles.boxRight}
          source={require('../../assets/images/levels.webp')}>
          <Text style={styles.textLevel}>{level}</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

export const ButtonCustom: React.FC<HomeSelectedLevelProps> = ({
  name,
  index,
}) => {
  const [level, setLevel] = useMathOperationSettings(state => [
    state.level,
    state.setLevel,
  ]); // Global State

  return (
    <Pressable
      onPressIn={() => setLevel(name)}
      style={({pressed}) => [
        {opacity: pressed ? 0.7 : 1.0},
        styles.ButtonPressOperation,
      ]}>
      <RoundedSquare stroke={level === name ? 'tomato' : '#026ab3'} size={65} />
      <Text style={[styles.textButton, level === name && {color: 'tomato'}]}>
        {index}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    rowGap: 10,
    minWidth: '70%',
    maxWidth: 950,
    marginHorizontal: '10%',
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 15,
    padding: 15,
  },
  title: {fontFamily: 'ComicNeue', fontSize: 23, color: Colors.red},
  boxMain: {flexDirection: 'row', columnGap: 30},
  boxLeft: {rowGap: 5},
  boxLeftUp: {flexDirection: 'row'},
  boxLeftDown: {flexDirection: 'row'},
  boxRight: {
    width: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5,
  },
  styleImage: {borderRadius: 10},
  textLevel: {fontSize: 30, fontFamily: 'Asap', color: Colors.white},

  // NOTE: segundo componente "ButtonCustom()"
  ButtonPressOperation: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    position: 'absolute',
    fontFamily: 'Asap',
    fontSize: 30,
    color: Colors.deepSkyBlue,
    textShadowColor: Colors.black,
    textShadowRadius: 1,
  },
});
