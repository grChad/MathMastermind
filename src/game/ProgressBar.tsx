import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

import LinearGradient from 'react-native-linear-gradient'

// NOTE: Import colors & state global
import Colors from '../../assets/Colors'
import { useExerciseTrackingState } from '../../store/gameStates'
import { useMathOperationSettings } from '../../store/homeStates'

export default function ProgressBar() {
  const countProgress = useExerciseTrackingState((state) => state.countProgress)
  const quantily = useMathOperationSettings((state) => state.quantily)

  const progress_percent = (countProgress / quantily) * 100
  const [endGame, setEndGame] = useState(false)

  const progress = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    }
  })

  useEffect(() => {
    progress.value = withTiming(progress_percent, { duration: 1000 })

    if (countProgress === quantily) {
      setTimeout(() => {
        setEndGame(true)
      }, 1000)
    }
  })

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.abeto,
      }}
    >
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[
            Colors.rock,
            Colors.deepSkyBlue,
            Colors.whiteSmoke,
            Colors.deepSkyBlue,
            Colors.rock,
          ]}
          style={styles.barr}
        >
          <Image
            source={
              endGame
                ? require('../../assets/progress-bar/explode.png')
                : require('../../assets/progress-bar/startup.png')
            }
            style={styles.imagen}
          />
        </LinearGradient>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  barr: {
    width: '100%',
    height: 25,
    position: 'relative',
  },
  imagen: {
    position: 'absolute',
    right: -25,
    width: 50,
    height: 25,
  },
})
