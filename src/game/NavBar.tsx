import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// NOTE: Import colors, state global & data
import Colors from '../../assets/Colors'
import { useUserData } from '../../store/introStates' // Global State
import { useExerciseTrackingState } from '../../store/gameStates' // Global State
import { useMathOperationSettings } from '../../store/homeStates' // Global State
import { LevelType } from '../utils/gameData' // data

// Component
import { FrameImage } from '../ImagesSVG'

export default function NavBar() {
  const userName = useUserData((state) => state.userName) // Global State
  const countProgress = useExerciseTrackingState((state) => state.countProgress) // Global State
  const [level, quantily] = useMathOperationSettings((state) => [
    state.level,
    state.quantily,
  ]) // Global State

  const getIdLevel = (lv: string): number =>
    lv === LevelType.Facil
      ? 1
      : lv === LevelType.Normal
        ? 2
        : lv === LevelType.Dificil
          ? 3
          : lv === LevelType.Genio
            ? 4
            : 0

  const gold_star_list = Array.from(
    { length: getIdLevel(level) },
    (_, i) => i + 1,
  )

  const grey_star_list = Array.from(
    { length: 4 - getIdLevel(level) },
    (_, i) => i + 1,
  )

  return (
    <View style={styles.container}>
      <View style={styles.leftBox}>
        <FrameImage size={60} />
        <Text className="font-[Asap] text-xl text-white">{userName}</Text>
      </View>
      <View className="landscape:flex-row items-center">
        <Text className="font-[ComicNeue] text-white text-lg landscape:text-xl landscape:mr-2">
          {level}
        </Text>
        <View className="flex-row bg-white/20 px-2 rounded-full">
          {/* TODO: Implementar estrellas en imagenes Vectoriales */}
          {gold_star_list.map((item) => (
            <Text key={item} style={styles.goldenStars}>
              ★
            </Text>
          ))}
          {grey_star_list.map((item) => (
            <Text key={item} className="text-gray-400 text-xl">
              ★
            </Text>
          ))}
        </View>
      </View>
      <View className="landscape:flex-row items-center justify-center">
        <Text className="font-[ComicNeue] text-white text-lg landscape:text-xl">
          Progreso
        </Text>
        <View className="bg-white/20 rounded-full py-0 px-2 landscape:ml-2">
          <Text className="font-[Asap] text-lg text-sky-300">
            {countProgress < quantily ? countProgress + 1 : quantily} /{' '}
            {quantily}
          </Text>
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.darkAbeto,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textNavBar: {
    fontFamily: 'ComicNeue',
    fontSize: 18,
    color: Colors.whiteSmoke,
  },

  // NOTE: left Box
  leftBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  nameUser: { fontFamily: 'Asap' },

  // NOTE: stars
  goldenStars: {
    fontSize: 20,
    color: Colors.gold,
    textShadowColor: Colors.yellow,
    textShadowRadius: 3,
  },
})
