import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

export default function RegisterScreen({navigation}) {
  const [phone, setPhone] = useState('');
  const handleNext = () => {
    if (!phone || phone.length < 10) {
      Alert.alert('Invalid input', 'Please enter a valid phone number');
      return;
    }
    navigation.navigate('Verification');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  input: {borderBottomWidth: 1, marginBottom: 20, fontSize: 18},
});
