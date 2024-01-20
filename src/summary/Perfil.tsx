import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

// NOTE: import palette & Global state
import Colors from '../../assets/Colors';
import {useUserData} from '../../store/introStates'; // Global State
import {useMathOperationSettings} from '../../store/homeStates'; // Global State

export default function Perfil() {
  const userName = useUserData(state => state.userName); // Global State
  const [operation, level, quantily] = useMathOperationSettings(state => [
    state.operation,
    state.level,
    state.quantily,
  ]); // Global State

  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          source={require('../../assets/users/user07.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <Text style={styles.textName}>{userName}</Text>
        <Text style={styles.text}>
          Operación: <Text style={styles.textFamily}>{operation}</Text>
        </Text>
        <Text style={styles.text}>
          Nivel: <Text style={styles.textFamily}>{level}</Text>
        </Text>
        <Text style={styles.text}>
          Nº de ejercicios: <Text style={styles.textFamily}>{quantily}</Text>
        </Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    columnGap: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.rock,
  },
  boxLogo: {width: 120, height: 120},
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
    borderWidth: 3,
    borderColor: Colors.gold,
  },
  textName: {
    fontSize: 25,
    fontFamily: 'Asap',
    color: Colors.gold,
    marginBottom: 5,
  },
  text: {fontSize: 18, fontFamily: 'ComicNeue', color: Colors.whiteSmoke},
  textFamily: {fontFamily: 'Asap'},
});
