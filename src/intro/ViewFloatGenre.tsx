import { StyleSheet, View, Pressable, Image } from 'react-native'

// NOTE: Global State
import { useUserData } from '../../store/introStates'

export default function ViewFloatGenre() {
  const [userGenre, setUserGenre] = useUserData((state) => [
    state.userGenre,
    state.setUserGenre,
  ]) // Global State

  return (
    <View
      className="flex-row bg-[#bbd4cc22] p-4 rounded-2xl border border-white/80"
      style={{ gap: 20 }}
    >
      <Pressable onPress={() => setUserGenre('male')}>
        <Image
          source={require('../../assets/images/boy.png')}
          style={[
            styles.imgInitialStyle,
            userGenre === 'male' && styles.imgSelectedStyle,
          ]}
        />
      </Pressable>
      <Pressable onPress={() => setUserGenre('female')}>
        <Image
          source={require('../../assets/images/girl.png')}
          style={[
            styles.imgInitialStyle,
            userGenre === 'female' && styles.imgSelectedStyle,
          ]}
        />
      </Pressable>
    </View>
  )
}

export const styles = StyleSheet.create({
  imgInitialStyle: { width: 56, height: 150 },
  imgSelectedStyle: { width: 66, height: 180 },
})
