import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  BackHandler,
  Alert,
} from 'react-native';

// NOTE: import Colors and Global Status
import Colors from '../../assets/Colors';

// Import components
import NavBar from './NavBar';
import Perfil from './Perfil';
import Percentage from './Percentage';
import Message from './Message';
import ButtonEnd from './ButtonEnd';

export default function Summary() {
  const backActionHandler = () => {
    Alert.alert('¡Salir!', '¿Estás seguro que quieres salir?', [
      {
        text: 'No seguire estudiando',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Si soy una Gallina 🐔 ¡ki kiriki!',
        onPress: () => BackHandler.exitApp()(),
      },
    ]);
    return true;
  };

  useEffect(() => {
    // Agregue el evento para el botón de back en Android
    BackHandler.addEventListener('hardwareBackPress', backActionHandler);

    return () =>
      // Limpiar/remover el evento
      BackHandler.removeEventListener('hardwareBackPress', backActionHandler);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.darkAbeto} />
      <NavBar />
      <Perfil />
      <View style={styles.boxMain}>
        <Percentage />
        <Message />
        <ButtonEnd />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.darkAbeto,
  },
  boxMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 25,
  },
});
