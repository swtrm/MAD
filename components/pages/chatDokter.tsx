import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const ChatDoctor = ({navigation}: any) => {
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello, how can I help you?', sender: 'doctor'},
    {
      id: '2',
      text: 'Hello, doctor. I think I have some issues about my mental health lately',
      sender: 'user',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages(prevMessages => [
      ...prevMessages,
      {id: Date.now().toString(), text: inputText, sender: 'user'},
    ]);
    setInputText('');
  };

  const renderMessage = ({item}: any) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.doctorMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/back.png')} // Ganti dengan path ikon back Anda
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Image
            source={require('../../assets/avatar.png')} // Ganti dengan path foto dokter Anda
            style={styles.profileImage}
          />
          <Text style={styles.headerTitle}>Dr. Given Pantouw, Sp.KJ</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Phone.png')} // Ganti dengan path ikon call Anda
            style={styles.callIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Encryption Info */}
      <View style={styles.encryptionInfo}>
        <Text style={styles.encryptionText}>
          Messages and call are end-to-end encrypted. Only people in this chat
          can read, or share them
        </Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.chatList}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  callIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  encryptionInfo: {
    backgroundColor: '#D9EFFF',
    padding: 10,
    alignItems: 'center',
  },
  encryptionText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  messageContainer: {
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  doctorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#F9F9F9',
  },
  sendIcon: {
    width: 24,
    height: 24,
    tintColor: '#007AFF',
  },
});

export default ChatDoctor;
