import React, {useState} from 'react';
import {View, Button, StyleSheet, ActivityIndicator} from 'react-native';

export default function ProfilePicScreen({navigation}) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      navigation.navigate('Home');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {uploading ? <ActivityIndicator size="large" /> : null}
      <Button title="Take a Picture" onPress={handleUpload} />
      <Button title="Pick from Gallery" onPress={handleUpload} />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
