import React, { useEffect } from 'react'
import { Pressable, StyleSheet, View, Alert } from 'react-native'
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from 'react-native-reanimated'

// NOTE: Import Pallets of colors and Global State
import { TouchTriangle } from '../ImagesSVG'
import {
  useCommunication,
  useUserData,
  useShowViewFloat,
} from '../../store/introStates' // Global State

interface Props {
  getOnPress?: () => void
}

const ButtonTriangleClick: React.FC<Props> = ({ getOnPress }) => {
  const [userName, userGenre] = useUserData((state) => [
    state.userName,
    state.userGenre,
  ])
  const [countMessage, setCountMessage, setIsTalking] = useCommunication(
    (state) => [state.countMessage, state.setCountMessage, state.setIsTalking],
  )
  const [setHasViewGenre, setHasViewUserName] = useShowViewFloat((state) => [
    state.setHasViewGenre,
    state.setHasViewUserName,
  ])

  const height = useSharedValue(0)
  console.log('ButtonTriangleClick: se renderiza')

  const animatedStyles = useAnimatedStyle(() => ({
    height: height.value,
  }))

  useEffect(() => {
    height.value = withRepeat(withTiming(5, { duration: 300 }), -1, true)
  }, [height])

  const handlePress = () => {
    if (countMessage === 6 && userName === '') {
      Alert.alert('Ups!!', 'tienes que Poner tu nombre', [
        {
          text: 'Okey, se me olvido',
          onPress: () => null,
          style: 'cancel',
        },
      ])
    } else if (countMessage === 4 && userGenre === '') {
      Alert.alert('Ups!!', 'tienes que elegir un genero', [
        {
          text: 'Okey, ahora lo hago',
          onPress: () => null,
          style: 'cancel',
        },
      ])
    } else {
      getOnPress()
      setIsTalking(true)
      setCountMessage(true)
      setHasViewGenre(false)
      setHasViewUserName(false)
    }
  }

  return (
    <View style={styles.button}>
      <Animated.View style={animatedStyles} />
      <Pressable onPress={handlePress}>
        <TouchTriangle size={30} />
      </Pressable>
    </View>
  )
}

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ButtonTriangleClick
