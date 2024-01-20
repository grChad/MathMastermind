import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Link } from 'react-router-native'

import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated'

// NOTE: Import Colors and Global State
import Colors from '../../assets/Colors'
import { useCommunication } from '../../store/introStates' // Global State

export default function ButtonTalkAndNext() {
  const [countMessage, isTalking] = useCommunication((state) => [
    state.countMessage,
    state.isTalking,
  ])

  // console.log('ButtonTalkAndNext: se renderiza');

  let sharedList = []
  for (let i: number = 0; i < 20; i++) {
    sharedList.push({ height: useSharedValue(3) })
  }

  const animatedStyles = sharedList.map((element) =>
    useAnimatedStyle(() => ({
      height: withSpring(element.height.value),
    })),
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      sharedList.forEach(({ height }, _) => {
        if (isTalking) {
          height.value = Math.floor(Math.random() * 20) + 5
        } else {
          height.value = 3
        }
      })
    }, 200)

    return () => clearInterval(intervalId)
  }, [isTalking, sharedList])

  return (
    <View>
      {countMessage === 10 && !isTalking ? (
        <Link to="/home" underlayColor="#ACD1DE" style={styles.buttonNext}>
          <Text style={styles.textLink}>Ir a Jugar 🎮</Text>
        </Link>
      ) : (
        <View style={styles.boxTalk}>
          {animatedStyles.map((animate: any, index: number) => (
            <Animated.View key={index} style={[styles.bar, animate]} />
          ))}
        </View>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  bar: {
    width: 5,
    backgroundColor: '#0074d9',
    borderRadius: 5,
  },
  buttonNext: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    height: 65,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  textLink: {
    fontFamily: 'Asap',
    fontSize: 20,
    color: '#0074d9',
  },
  boxTalk: {
    flexDirection: 'row',
    columnGap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    color: '#0074d9',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
})
