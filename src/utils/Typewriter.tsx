import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

interface TypewriterProps {
  text: string;
  delay?: number;
  style?: object;
  onTypingEnd?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 100,
  style,
  onTypingEnd,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentText(''); // Restablecer el 'currentText' cuando 'text' cambia
    setCurrentIndex(0); // Restablecer el 'currentIndex' cuando 'text' cambia
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onTypingEnd) {
      onTypingEnd();
    }
  }, [currentIndex, delay, text]); // no poner onTypingEnd, genera bucle.

  return <Text style={style ? style : {color: 'black'}}>{currentText}</Text>;
};

export default Typewriter;
