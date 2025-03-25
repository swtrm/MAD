/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextHeader = ({header}) => {
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  header: {
    paddingLeft: 15,
    margin: 10,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
});
