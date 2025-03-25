/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import TextHeader from './components/Header';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const onSubmit = () => {
    console.log(name, username, email, address, phonenumber);
  };

  return (
    <View>
      <TextHeader header="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setName(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Adress"
        placeholder="Masukan alamat anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setAdress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        placeholderTextColor="#CCC"
        onChangeText={e => setPhonenumber(e)}
        keyboardType="number-pad"
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },

  label: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
  },

  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
