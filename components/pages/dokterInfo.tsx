import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ConsultantDetail = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/back.png')} // Ganti dengan path ikon back Anda
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Psychiatrist</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/avatar.png')} // Ganti dengan path foto dokter Anda
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dr. Given Pantouw, Sp.KJ</Text>
          <Text style={styles.specialist}>
            Psychiatrist (Specialist in Mental Health)
          </Text>
          <Text style={styles.conditions}>
            Anxiety Disorders, Depression & Mood Disorders, Sleep Disorders
          </Text>
          <TouchableOpacity style={styles.clickButton}>
            <Text style={styles.clickButtonText}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 Experience:</Text>
        <Text style={styles.sectionContent}>
          With over 8 years of experience in psychiatry, Dr. Given has helped
          more than 500 individuals overcome various mental health challenges
          through medication and therapy-based approaches.
        </Text>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎓 Education:</Text>
        <Text style={styles.sectionContent}>
          - Doctor of Medicine (MD), University of Indonesia{'\n'}- Psychiatry
          Specialist Program, Gadjah Mada University
        </Text>
      </View>

      {/* Licenses Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📜 Licenses & Certifications:</Text>
        <Text style={styles.sectionContent}>
          - Registered Member, Indonesian Medical Association (IDI){'\n'}-
          Board-certified Psychiatrist – Indonesian Association of Psychiatric
          Doctors (PDSKJI){'\n'}- Active Medical License (STR No. 123456789)
        </Text>
      </View>

      {/* Languages Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌐 Languages Spoken:</Text>
        <Text style={styles.sectionContent}>
          - Bahasa Indonesia{'\n'}- English
        </Text>
      </View>

      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate('ChatDoctor')} // Navigasi ke halaman ChatDoctor
      >
        <Text style={styles.chatButtonText}>Chat with Psychiatrist</Text>
      </TouchableOpacity>

      {/* Booking Section */}
      <TouchableOpacity style={styles.bookingButton}>
        <Text style={styles.bookingButtonText}>Booking Psychiatrist</Text>
      </TouchableOpacity>
    </ScrollView>
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
  profileSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  specialist: {
    fontSize: 14,
    color: '#007AFF',
    marginVertical: 4,
  },
  conditions: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
  },
  clickButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  clickButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 14,
    color: '#666666',
  },
  chatButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookingButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConsultantDetail;
