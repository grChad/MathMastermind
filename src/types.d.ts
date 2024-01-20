// Define las interfaces para las imágenes y los mensajes
export interface ImageChild {
  id: string
  uri: ImageSourcePropType // Tipo para las URI de imágenes en React Native
}

export interface Message {
  id: number
  text: string
}

// NOTE: for page "home"
interface HomeSelectedLevelProps {
  name: string
  index: number
}

export interface HomeSelectedQuantilyProps {
  amount: number
}
