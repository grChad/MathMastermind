import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// NOTE: Import Colors
import Colors from '../../assets/Colors';

// FIXME: refactorizar Views...
export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', position: 'relative'}}>
        <Text style={styles.title}>Summary</Text>
        <View style={styles.boxIcon}>
          <Text>💠</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.rock,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Asap',
    color: Colors.rock,
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
  },
  boxIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
