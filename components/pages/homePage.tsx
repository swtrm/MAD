import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const Home = ({navigation}: any) => {
  const psychologists = [
    {id: '1', name: 'Dr. Meilyan Sivry, M.Psi., Psikolog', rating: 4},
    {id: '2', name: 'Riana Keni, S.Psi., M.Psi., Psikolog', rating: 5},
    {id: '3', name: 'Swarsh Malt, M.Psi., Psikolog Klinis', rating: 3},
  ];

  const psychiatrists = [
    {id: '1', name: 'Dr. Given Pantouw, Sp.KJ', rating: 4},
    {id: '2', name: 'Dr. Amanda Manesah, Sp.KJ(K)', rating: 5},
    {id: '3', name: 'Dr. Jefry Wibowo, Sp.KJ, MKM', rating: 3},
  ];

  const renderItem = ({item}: any) => (
    <View style={styles.listItem}>
      <Image
        source={require('../../assets/avatar.png')} // Ganti dengan path avatar Anda
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rating}>
          {Array.from({length: 5}).map((_, index) => (
            <Image
              key={index}
              source={
                index < item.rating
                  ? require('../../assets/star-filled.png') // Gambar bintang terisi
                  : require('../../assets/star-outline.png') // Gambar bintang kosong
              }
              style={styles.star}
            />
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')} // Ganti dengan path logo Anda
          style={styles.logo}
        />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/notification.png')} // Ganti dengan path ikon notifikasi Anda
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/avatar.png')} // Ganti dengan path ikon profil Anda
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <Image
        source={require('../../assets/image.png')} // Ganti dengan path banner Anda
        style={styles.banner}
      />

      {/* Consultation Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Consultation')} // Navigasi ke halaman ConsultationPage
      >
        <View style={styles.consultationIcon}>
          <Image
            source={require('../../assets/consultation.png')} // Ganti dengan path ikon konsultasi Anda
            style={styles.consultationImage}
          />
          <Text style={styles.consultationText}>Consultation</Text>
        </View>
        <View style={styles.divider} />
      </TouchableOpacity>

      {/* Psychologists */}
      <Text style={styles.categoryTitle}>Psychologist</Text>
      <FlatList
        data={psychologists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* Psychiatrists */}
      <Text style={styles.categoryTitle}>Psychiatrist</Text>
      <FlatList
        data={psychiatrists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  section: {
    alignItems: 'center',
    marginBottom: 16,
  },
  consultationIcon: {
    alignItems: 'center',
  },
  consultationImage: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  consultationText: {
    fontSize: 14,
    color: '#007AFF',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#007AFF',
    marginTop: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 4,
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
});

export default Home;
