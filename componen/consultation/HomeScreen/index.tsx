import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To AILOF</Text>
      <Button
        title="View Psychologists"
        onPress={() => navigation.navigate('PsychologistList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 32, fontWeight: 'bold', marginBottom: 20},
});
