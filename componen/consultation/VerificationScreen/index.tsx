import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

export default function VerificationScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Verification successful');
      navigation.navigate('Form');
    }, 1500);
  };
  return (
    <View style={styles.container}>
      <Text>Enter the 6-digit code sent to your phone</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Verify" onPress={handleVerify} />
      )}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
});
