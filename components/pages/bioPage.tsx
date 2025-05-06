import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const bioPage = ({navigation}: any) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    email: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')} // Ganti dengan path logo Anda
          style={styles.logo}
        />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {Object.keys(formData).map((field, index) => (
          <View key={index} style={styles.inputWrapper}>
            <Text style={styles.label}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter your ${field}`}
              value={formData[field as keyof typeof formData]}
              onChangeText={value => handleInputChange(field, value)}
              keyboardType={
                field === 'age'
                  ? 'numeric'
                  : field === 'email'
                  ? 'email-address'
                  : 'default'
              }
            />
          </View>
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile', {formData})}>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default bioPage;
