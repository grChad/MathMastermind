import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

// NOTE: Import Colors, dates and statusGlobal
import Colors from '../../assets/Colors'
import { Messages } from './IntroData'
import Typewriter from '../utils/Typewriter' // library local
import {
  useUserData,
  useCommunication,
  useShowViewFloat,
} from '../../store/introStates' // Global States

// Import components
import ButtonTriangleClick from './ButtonTriangleClick'
import ButtonsYesOrNot from './ButtonsYesOrNot'

export default function MessageIntro() {
  const [countMessage, setIsTalking] = useCommunication((state) => [
    state.countMessage,
    state.setIsTalking,
  ]) // Global State

  const [userName, userGenre] = useUserData((state) => [
    state.userName,
    state.userGenre,
  ]) // Global State

  const [setHasViewGenre, setHasViewUserName] = useShowViewFloat((state) => [
    state.setHasViewGenre,
    state.setHasViewUserName,
  ])

  const [showTriangleButton, setShowTriangleButton] = useState(false)
  const [showYesOrNot, setShowYesOrNot] = useState(false)

  console.log(`MessageIntro: Genre = ${userGenre}, Name = ${userName} hola`)

  const handlePress = () => {
    setShowTriangleButton(false)
    setShowYesOrNot(false)
  }

  const typingEnd = () => {
    setIsTalking(false)

    if (countMessage === 4) {
      setHasViewGenre(true)
    } else if (countMessage === 6) {
      setHasViewUserName(true)
    }

    if (countMessage === 5 || countMessage === 7) {
      setShowTriangleButton(false)
      setShowYesOrNot(true)
    } else {
      setShowYesOrNot(false)
      setTimeout(() => {
        setShowTriangleButton(true)
      }, 300)
    }
  }

  return (
    <View
      className="w-[80%] max-w-[500] relative flex-row justify-between border-4 border-sky-500
      bg-white rounded-2xl"
    >
      <View
        className="justify-center min-h-[100] w-full pl-4 pr-10"
        style={[countMessage === 10 && { alignItems: 'center' }]}
      >
        {countMessage === 0 && <Text style={[styles.textMessage]}>¡Hola!</Text>}

        <Typewriter
          text={Messages(userGenre, userName)[countMessage].text}
          delay={70}
          style={styles.textMessage}
          onTypingEnd={typingEnd}
        />
      </View>
      {showTriangleButton && countMessage !== 10 && (
        <ButtonTriangleClick getOnPress={handlePress} />
      )}
      {showYesOrNot && countMessage === 5 && <ButtonsYesOrNot />}
      {showYesOrNot && countMessage === 7 && <ButtonsYesOrNot />}
    </View>
  )
}

export const styles = StyleSheet.create({
  textMessage: {
    fontFamily: 'Pokemon',
    color: Colors.dark,
    fontSize: 13,
    lineHeight: 25,
    textShadowColor: Colors.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
})
