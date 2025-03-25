/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const flexbox2 = () => {
  return (
    <View style={styles.container}>
      {/* Bagian atas dengan blok warna */}
      <View style={styles.topContainer}>
        <View style={[styles.square1]} />
        <View style={[styles.square]} />
        <View style={[styles.square1]} />
      </View>
      <View style={styles.middleContainer}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.square1]} />
        <View style={[styles.square]} />
        <View style={[styles.square1]} />
      </View>
    </View>
  );
};
export default flexbox2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  square1: {
    width: 90,
    height: 90,
    margin: 3,
    backgroundColor: 'black',
  },
  square: {
    width: 90,
    height: 90,
    margin: 5,
    backgroundColor: 'yellow',
  },
  logo: {
    width: '90%',
    height: 90,
    marginBottom: 10,
  },
});
