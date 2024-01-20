import React from 'react'
import { Pressable, View } from 'react-native'

// NOTE: import  Globa State
import { useUserData, useCommunication } from '../../store/introStates'

// import Component
import YesOrNotSvg from '../utils/YesOrNotSvg'

export default function ButtonsYesOrNot() {
  const [countMessage, setCountMessage, setIsTalking] = useCommunication(
    (state) => [state.countMessage, state.setCountMessage, state.setIsTalking],
  ) // Global State

  const [setUserGenre, setUserName] = useUserData((state) => [
    state.setUserGenre,
    state.setUserName,
  ]) // Global State

  return (
    <View className="absolute bottom-[100%] right-[-10] flex-row mb-5">
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
        onPress={() => {
          if (countMessage === 5 || countMessage === 7) {
            setCountMessage(true)
            setIsTalking(true)
          }
        }}
      >
        <YesOrNotSvg keyName="Si" keyColor="#108EE2" />
      </Pressable>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
        onPress={() => {
          if (countMessage === 5) {
            // se reinicia 'genre' y se regresa un paso atras
            setUserGenre('')
            setCountMessage(false, 4)
          }
          if (countMessage === 7) {
            // se reinicia 'el input Name' y se regresa un paso atras
            setUserName('')
            setCountMessage(false, 6)
          }
          setIsTalking(true)
        }}
      >
        <YesOrNotSvg keyName="No" keyColor="#E55940" />
      </Pressable>
    </View>
  )
}
