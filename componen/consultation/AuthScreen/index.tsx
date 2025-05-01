/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

export default function AuthScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Please choose how to continue</Text>
      <Button
        title="Continue with Phone"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Continue with Google"
        onPress={() => navigation.navigate('Register')}
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  label: {fontSize: 16, marginBottom: 20},
});
