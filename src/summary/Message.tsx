import React from 'react';
import {StyleSheet, View} from 'react-native';
import TypeWriter from '../utils/Typewriter';

// NOTE: Import Colors & Global State & Components
import Colors from '../../assets/Colors';
import {useExerciseTrackingState} from '../../store/gameStates';
import {useMathOperationSettings} from '../../store/homeStates';
// import {useGlobal} from '../../context/StateGlobal';

// components
import Messages from './motivationalMessages';

const Message = () => {
  // const {success, numberExercise} = useGlobal();
  const success = useExerciseTrackingState(state => state.success);
  const quantily = useMathOperationSettings(state => state.quantily);

  const percentage = Math.floor((success * 100) / quantily);

  return (
    <View style={{paddingHorizontal: 15}}>
      <TypeWriter
        style={styles.textIntro}
        delay={40}
        text={
          percentage >= 85
            ? Messages.noteAPlus[
                Math.floor(Math.random() * Messages.noteAPlus.length)
              ]
            : percentage >= 65
            ? Messages.noteA[Math.floor(Math.random() * Messages.noteA.length)]
            : percentage >= 45
            ? Messages.noteB[Math.floor(Math.random() * Messages.noteB.length)]
            : Messages.noteC[Math.floor(Math.random() * Messages.noteC.length)]
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textIntro: {
    fontFamily: 'ComicNeue',
    color: Colors.whiteSmoke,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Message;
