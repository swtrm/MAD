/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ex = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Image
        source={{uri: 'https://i.redd.it/8zmpaofxyx271.png'}} // Ganti dengan URL gambar background
        style={styles.backgroundImage}
      />
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={require('./assets/me.jpg')}
        />
        <Text style={styles.name}>Mait Swarsh</Text>
        <Text style={styles.email}>SwarshMait@gmail.com</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.detail}>📞 Phone:+6282192001039</Text>
          <Text style={styles.detail}>
            🏠 Address: Kota Tomohon Sulawesi Utara
          </Text>
          <Text style={styles.detail}>
            💼 Occupation: Mahasiswa Universitas Klabat
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            Jika kalian ada pertanyaan tentang kehidupan saya sehari-hari, feel
            free to ask! 😊
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Tulis pertanyaan Anda..."
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Image
            source={{uri: 'https://avatarfiles.alphacoders.com/298/298299.jpg'}} // Ganti dengan URL gambar tambahan
            style={styles.additionalImage}
          />
        </View>
      </View>
      <Image
        source={require('./assets/logo-removebg-preview.png')} // Ganti dengan URL gambar background
        style={styles.backgroundImage}
      />
    </ScrollView>
  );
};
export default ex;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  backgroundImage: {
    width: '70%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 0,
  },
  card: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    elevation: 6,
    backgroundColor: 'black',
    shadowColor: 'purple',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  email: {
    fontSize: 16,
    color: 'purple',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  detail: {
    fontSize: 16,
    color: 'purple',
    marginTop: 5,
    fontWeight: 'bold',
  },
  questionContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    color: 'purple',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 20,
    borderWidth: 3,
    borderColor: 'purple',
    borderRadius: 10,
    backgroundColor: 'white',
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalImage: {
    width: 200,
    height: 75,
    marginTop: 15,
    borderRadius: 10,
  },
});
