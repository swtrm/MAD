/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const felxbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>i</Text>
      </View>
      <View style={styles.container3}>
        <Text>Love</Text>
      </View>
      <View style={styles.container4}>
        <Text>U</Text>
      </View>
    </View>
  );
};

export default felxbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  container3: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  container4: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
