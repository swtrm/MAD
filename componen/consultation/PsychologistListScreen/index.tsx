/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';

export default function WelcomeScreen({navigation}) {
  const opacity = new Animated.Value(0);
  const translateY = new Animated.Value(30);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 1000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.title, {opacity, transform: [{translateY}]}]}>
        Welcome To
      </Animated.Text>
      <Animated.Text
        style={[
          styles.title,
          styles.brand,
          {opacity, transform: [{translateY}]},
        ]}>
        AILOF
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, {opacity}]}>
        "You are not alone"
      </Animated.Text>
      <Animated.Image
        source={require('../../../assets/image 1.png')} // letakkan gambar di /assets/hand.png
        style={[styles.image, {opacity, transform: [{translateY}]}]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {fontSize: 32, fontWeight: 'bold', color: '#007AFF'},
  brand: {fontSize: 36},
  subtitle: {fontSize: 16, color: '#007AFF', marginTop: 10, marginBottom: 20},
  image: {width: 200, height: 200, marginTop: 20},
});
