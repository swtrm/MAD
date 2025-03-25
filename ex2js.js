/* eslint-disable prettier/prettier */
import React from 'react';
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
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Masukan username anda" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Masukan password anda" />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
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
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
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
