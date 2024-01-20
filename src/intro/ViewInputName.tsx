import { TextInput, View } from 'react-native'

import { useUserData } from '../../store/introStates' // Global State

export default function ViewInputName() {
  const [userName, setUserName] = useUserData((state) => [
    state.userName,
    state.setUserName,
  ]) // Global States

  return (
    <View className="justify-center min-w-[200] bg-white border-4 border-sky-500 rounded-full">
      <TextInput
        className="font-[Pokemon] text-sky-800 text-center py-2 px-4"
        onChangeText={setUserName}
        value={userName}
        placeholder="Tu Nombre"
        placeholderTextColor="#ababab"
      />
    </View>
  )
}
