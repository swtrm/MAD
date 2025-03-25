/* eslint-disable prettier/prettier */
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const ex2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/000/382/206/original/vector-a-seamless-background-of-oranges.jpg',
        }}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>Welcome</Text>
      <Input label="username" placeholder="masukan username anda" />
      <Input label="password" placeholder="masukan password anda" />
      <Button label="sign in" />
      <Button label="sign in with google" color="red" />
      <Button label="sign in with facebook" color="blue" />
      <Button label="sign in wtih apple id" color="black" />
    </View>
  );
};
export default ex2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'black',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF6600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
