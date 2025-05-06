import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const VerificationPage = ({navigation}: any) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]); // Create refs for inputs

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Automatically focus the next input
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>We have sent the code to your message</Text>

      {/* Code Input Fields */}
      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs.current[index] = ref)} // Assign ref to each input
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={text => handleInputChange(text, index)}
          />
        ))}
      </View>

      {/* Resend Link */}
      <Text style={styles.resendText}>
        If you didn’t receive the code{' '}
        <Text
          style={styles.resendLink}
          onPress={() => console.log('Resend Code')}>
          click here to re-send
        </Text>
      </Text>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BioPage')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 24,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
  },
  resendText: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 24,
    textAlign: 'center',
  },
  resendLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationPage;
