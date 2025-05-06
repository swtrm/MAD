import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ProfilePage = ({navigation}: any) => {
  const handleTakePicture = () => {
    console.log('Take a picture');
    // Tambahkan logika untuk mengambil gambar
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Profile Picture</Text>

      {/* Profile Picture Placeholder */}
      <View style={styles.pictureContainer}>
        <Image
          source={require('../../assets/place.png')} // Ganti dengan path placeholder Anda
          style={styles.placeholderImage}
        />
      </View>

      {/* Take a Picture Button */}
      <TouchableOpacity onPress={handleTakePicture}>
        <Text style={styles.takePictureText}>Take a picture</Text>
      </TouchableOpacity>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Welcome2')}>
        <Text style={styles.startButtonText}>Start</Text>
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
    marginBottom: 24,
  },
  pictureContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    tintColor: '#CCCCCC',
  },
  takePictureText: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 32,
    textDecorationLine: 'underline',
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
