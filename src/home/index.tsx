import React, { useEffect } from 'react'
import { View, SafeAreaView, BackHandler, Alert } from 'react-native'

// NOTE: import Global State
import { useComplete } from '../../store/homeStates'

// Components
import SelectOperation from './SelectOperation'
import SelectLevel from './SelectLevel'
import SelectQuantily from './SelectQuantily'
import Buttonrun from './ButtonRun'

export default function Home() {
  const setIsComplete = useComplete((state) => state.setIsComplete) // Global State

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
    ])
    return true
  }

  useEffect(() => {
    // Agregue el evento para el botón de back en Android
    BackHandler.addEventListener('hardwareBackPress', backActionHandler)

    return () => {
      setIsComplete(false)

      // Limpiar/remover el evento
      BackHandler.removeEventListener('hardwareBackPress', backActionHandler)
    }
  }, [setIsComplete])

  return (
    <SafeAreaView
      className="landscape:flex-row justify-evenly items-center h-full p-6"
      style={{ gap: 20 }}
    >
      <View className="h-full flex-1 justify-evenly">
        <SelectOperation />
        <SelectLevel />
      </View>
      <View className="h-full flex-1 justify-evenly items-center">
        <SelectQuantily />
        <Buttonrun />
      </View>
    </SafeAreaView>
  )
}
