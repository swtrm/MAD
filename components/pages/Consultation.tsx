import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const Consultation = ({navigation}: any) => {
  const [selectedTab, setSelectedTab] = useState('Psychologist'); // Tab aktif

  const psychologists = [
    {id: '1', name: 'Dr. Meilyan Sivry, M.Psi., Psikolog', rating: 4},
    {id: '2', name: 'Riana Keni, S.Psi., M.Psi., Psikolog', rating: 5},
    {id: '3', name: 'Swarsh Malt, M.Psi., Psikolog Klinis', rating: 3},
    {id: '4', name: 'Valerie Joanna, M.Psi., Psikolog PIO', rating: 5},
    {id: '5', name: 'Dr. Jonald Filemon, M.Psi., Psikolog', rating: 4},
    {id: '6', name: 'Dr. Joshua Dadung, M.Psi., Psikolog', rating: 4},
    {id: '7', name: 'Dr. Natasya Herman, S.Psi., Psikolog', rating: 3},
  ];

  const psychiatrists = [
    {id: '1', name: 'Dr. Given Pantouw, Sp.KJ', rating: 4},
    {id: '2', name: 'Dr. Amanda Manesah, Sp.KJ(K)', rating: 5},
    {id: '3', name: 'Dr. Arlino Nanalis, Sp.KJ, M.Kes', rating: 4},
    {id: '4', name: 'Dr. Immanuel Upe, Sp.KJ', rating: 3},
    {id: '5', name: 'Dr. William Nahumury, Sp.KJ, M.Kes', rating: 5},
    {id: '6', name: 'Dr. Eklesius Dondokambey, Sp.KJ', rating: 4},
    {id: '7', name: 'Dr. Christa Tumbol, Sp.KJ(K)', rating: 3},
  ];

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('DokterInfo', {doctor: item})} // Navigasi ke halaman DoctorInfo
    >
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
                  ? require('../../assets/star-outline.png') // Gambar bintang terisi
                  : require('../../assets/star-filled.png') // Gambar bintang kosong
              }
              style={styles.star}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/back.png')} // Ganti dengan path ikon back Anda
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Consultation</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/Search.png')} // Ganti dengan path ikon search Anda
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Consultan"
          placeholderTextColor="#CCCCCC"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Psychologist' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Psychologist')}>
          <Image
            source={require('../../assets/consultation.png')} // Ganti dengan path ikon psychologist Anda
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Psychologist' && styles.activeTabText,
            ]}>
            Psychologist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Psychiatrist' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Psychiatrist')}>
          <Image
            source={require('../../assets/consultation.png')} // Ganti dengan path ikon psychiatrist Anda
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Psychiatrist' && styles.activeTabText,
            ]}>
            Psychiatrist
          </Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <Text style={styles.categoryTitle}>{selectedTab}</Text>
      <FlatList
        data={selectedTab === 'Psychologist' ? psychologists : psychiatrists}
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
    alignItems: 'center',
    marginBottom: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#000000',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  tabText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
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

export default Consultation;
