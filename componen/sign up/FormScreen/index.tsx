/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Text,
} from 'react-native';

export default function FormScreen({navigation}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (!name || !age || !gender || !email) {
      Alert.alert('Input Error', 'Please fill all required fields');
      return;
    }
    navigation.navigate('ProfilePic');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Gender (e.g. Male/Female)"
        value={gender}
        onChangeText={setGender}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Text style={styles.note}>
        * Required fields: Name, Age, Gender, Email
      </Text>
      <Button title="Next" onPress={handleNext} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20},
  input: {borderBottomWidth: 1, marginBottom: 10, fontSize: 16},
  note: {fontSize: 12, marginVertical: 10, color: 'gray'},
});
