import { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  useWindowDimensions,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

// NOTE: Global State
import { useCommunication, useShowViewFloat } from '../../store/introStates' // Global State

// Componentes
import MessageIntro from './MessageIntro'
import ButtonTalkAndNext from './ButtonTalkAndNext'
import ViewFloatGenre from './ViewFloatGenre'
import ViewInputName from './ViewInputName'

export default function Intro() {
  const { width, height } = useWindowDimensions()

  const [countMessage, setCountMessage, setIsTalking] = useCommunication(
    (state) => [state.countMessage, state.setCountMessage, state.setIsTalking],
  ) // Global State

  const [hasViewGenre, hasViewUserName] = useShowViewFloat((state) => [
    state.hasViewGenre,
    state.hasViewUserName,
  ])

  console.log('Intro-index: conteo de mensajes: ', countMessage)

  useEffect(() => {
    return () => {
      setCountMessage(false, 0) // reinicia el contador de mensajes
      setIsTalking(true) // inicia hablando
    }
  }, [setCountMessage, setIsTalking])

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="#bbd4cc" barStyle="dark-content" />
      <LinearGradient
        colors={[
          '#bbd4cc',
          '#98b9b1',
          '#7f9e97',
          '#6c8c88',
          '#597875',
          '#4a6b67',
          '#405e5a',
          '#3c5754',
        ]}
        start={{ x: 0.4, y: 0.5 }}
        end={{ x: 0.4, y: 0.7 }}
        style={[
          {
            flex: 1,
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
          },
          width > height && { flexDirection: 'row' },
        ]}
      >
        <View className="flex-auto justify-center items-center">
          <Image
            source={require('../../assets/teacher.png')}
            className="w-[350] h-[280] portrait:w-[450] portrait:h-[360]"
          />
        </View>
        <View
          className="flex-[6] items-center landscape:justify-center portrait:mt-4"
          style={{ gap: 40 }}
        >
          <MessageIntro />
          <View className="flex-row gap-x-12" style={{ gap: 40 }}>
            {hasViewUserName && <ViewInputName />}
            <ButtonTalkAndNext />
            {hasViewGenre && <ViewFloatGenre />}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
