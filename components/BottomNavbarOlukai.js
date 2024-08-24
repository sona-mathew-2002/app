import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from 'react-native-vector-icons';
import Svg, { Path, Circle, Mask, G, Defs, LinearGradient, Stop, Text as SvgText, Rect } from 'react-native-svg';
import { LinearGradient as GradientBorder } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const BottomNavBarOlukai = ({ addFeedItem }) => {
  const [selected, setSelected] = useState('Home');
  const [modalVisible, setModalVisible] = useState(false);
  const [conversation, setConversation] = useState([
    { type: 'lifi', text: "Olukai sandals is now available.", image: require('../assets/olukai.png'), action: ['Ask for offers', 'Add to cart', 'Add to Trip buy list'] }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);
  const navigation = useNavigation(); 

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const handleLifiPress = () => {
    setSelected('Lifi');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const sendMessage = () => {
    if (inputText.trim() || selectedImage) {
      if (!isFirstMessageSent) setIsFirstMessageSent(true);

      const newMessage = {
        type: 'user',
        text: inputText,
        image: selectedImage
      };

      setConversation([...conversation, newMessage]);
      setInputText('');
      setSelectedImage(null);

      handleResponse(newMessage.text);
    }
  };

  const handleResponse = (userText) => {
    setConversation((prevConversation) => 
      prevConversation.map((msg) => 
        msg.type === 'lifi' ? { ...msg, action: [] } : msg
      )
    );

    if (userText.toLowerCase().includes('trip buy list')) {
      setTimeout(() => {
        const lifiMessages = [
          { type: 'lifi', text: 'Olukai sandals added to Trip buy list', action: [] },
          { 
            type: 'lifi', 
            text: 'Added to', 
            image: require('../assets/flower.jpeg'), 
            detail: 'Need Attention', 
            action: [] 
          }
        ];
        setConversation((prevConversation) => [...prevConversation, ...lifiMessages]);
      }, 1000);
    } else {
      setTimeout(() => {
        const processingMessage = { type: 'lifi', text: 'Processing your request...', action: [] };
        setConversation((prevConversation) => [...prevConversation, processingMessage]);
      }, 1000);
    }
  };

  const clearInput = () => {
    setInputText('');
    setSelectedImage(null);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  const getIconColor = (item) => (selected === item ? '#7B61FF' : '#B3B3B3');
  const getTextColor = (item) => (selected === item ? '#7B61FF' : '#B3B3B3');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setSelected('Home');
          navigation.navigate('Homescreen'); // Navigate to Homescreen
        }}
      >
        <Ionicons name="home" size={24} color={getIconColor('Home')} />
        <Text style={[styles.navText, { color: getTextColor('Home') }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setSelected('Finances');
          navigation.navigate('Finance'); // Navigate to FinancePage
        }}
      >
        <FontAwesome name="dollar" size={24} color={getIconColor('Finances')} />
        <Text style={[styles.navText, { color: getTextColor('Finances') }]}>Finances</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemCenter} onPress={handleLifiPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} viewBox="0 0 92 92" fill="none">
          <Mask id="mask0_247_4169" maskUnits="userSpaceOnUse" x="3" y="3" width="86" height="86">
            <Circle cx="46" cy="46" r="43" fill="white" />
          </Mask>
          <G mask="url(#mask0_247_4169)">
            <Path d="M-1 65.8844C8.33713 60.6331 15.6286 59.7861 20.6559 60.0398C33.289 60.6771 37.4937 71 53.5 71C62.5 71 67 67.5 69.58 64.9865V83.0147H-0.80563C-0.870421 77.3046 -0.93521 71.5945 -1 65.8844Z" fill="#FF8D5A" />
            <Path d="M-1 71.5101C5.81223 65.8421 10.1927 65.2017 13.1029 65.2017C22.4656 65.2017 27.9083 74.4603 39.5112 75.952C44.0461 76.535 47.9274 75.8012 50.4941 75.092V89.9998H-0.858191C-0.905461 83.8366 -0.952731 77.6733 -1 71.5101Z" fill="#BD5AFF" />
            <Path d="M-0.94873 79.7303C2.16134 78.2137 7.04248 75.7917 13.3365 75.7917C23.3063 75.7917 25.7781 78.9093 33.2629 78.9093C51.7837 78.9093 62.0378 62.4878 80.3913 62.4878C87.9245 62.4878 91.9547 63.8444 91.9547 63.8444C92.1117 71.3871 91.7976 82.4573 91.9547 90H-1C-0.98291 87.0891 -0.96582 82.6411 -0.94873 79.7303Z" fill="#5D37FF" />
          </G>
          <G filter="url(#filter0_f_247_4169)">
            <Circle cx={46} cy={46} r={43} stroke="url(#paint0_linear_247_4169)" strokeWidth={2} />
          </G>
          <Circle cx="46" cy="46" r="42.5" stroke="url(#paint1_linear_247_4169)" />
          <SvgText
            x="46"
            y="50"
            textAnchor="middle"
            fill="#4766FF"
            fontSize="26"
            fontWeight="700"
            fontFamily="Radio Canada" 
          >
            Lifi
          </SvgText>
          <Defs>
            <LinearGradient id="paint0_linear_247_4169" x1={46} y1={4} x2={46} y2={88} gradientUnits="userSpaceOnUse">
              <Stop stopColor="#5D37FF" />
              <Stop offset={0.31} stopColor="#BD5AFF" />
              <Stop offset={1} stopColor="#FF8D5A" />
            </LinearGradient>
            <LinearGradient id="paint1_linear_247_4169" x1={46} y1={3} x2={46} y2={89} gradientUnits="userSpaceOnUse">
              <Stop stopColor="#5D37FF" />
              <Stop offset={0.31} stopColor="#BD5AFF" />
              <Stop offset={1} stopColor="#FF8D5A" />
            </LinearGradient>
          </Defs>
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => {
          setSelected('News');
          navigation.navigate('News'); // Navigate to NewsPage
        }}
      >
        <MaterialIcons name="article" size={24} color={getIconColor('News')} />
        <Text style={[styles.navText, { color: getTextColor('News') }]}>News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setSelected('More')}>
        <Ionicons name="apps" size={24} color={getIconColor('More')} />
        <Text style={[styles.navText, { color: getTextColor('More') }]}>More</Text>
      </TouchableOpacity>

      {/* Modal for Chat Area */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <BlurView 
          intensity={30} 
          tint="dark" 
          style={StyleSheet.absoluteFill}
        />
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.modalContainer}>
            <View style={styles.chatArea}>
              {/* Close Button */}
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Svg width="81" height="37" viewBox="0 0 81 37" fill="none">
                  <Rect width="81" height="37" rx="18.5" fill="#EEEAF3"/>
                  <SvgText x="40" y="24" textAnchor="middle" fill="#3D3939" fontSize="16" fontWeight="500">
                    Close
                  </SvgText>
                </Svg>
              </TouchableOpacity>

              {/* Conversation Area */}
              <ScrollView contentContainerStyle={styles.conversation}>
                {conversation.map((message, index) => (
                  <View key={index} style={styles.messageContainer}>
                    <View
                      style={[
                        styles.messageBubble,
                        message.type === 'user' ? styles.userMessage : styles.lifiMessage,
                      ]}
                    >
                      <View style={styles.row}>
                        {message.text && <Text style={styles.messageText}>{message.text}</Text>}
                        {message.image && (
                          <Image
                            source={typeof message.image === 'string' ? { uri: message.image } : message.image}
                            style={index === 0 && message.type === 'lifi' ? styles.rectImage : styles.circleImage} // Conditional styling
                          />
                        )}
                        {message.detail && <Text style={styles.messageDetail}>{message.detail}</Text>}
                      </View>
                    </View>
                    {index === conversation.length - 1 && message.action && message.action.length > 0 && (
                      <View style={styles.actionContainer}>
                        {message.action.map((action, idx) => (
                          <TouchableOpacity key={idx} style={styles.actionButton}>
                            <Text style={styles.actionText}>{action}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </ScrollView>

              {/* Input Area */}
              <View style={styles.inputOuterContainer}>
                <GradientBorder
                  colors={['#5D37FF', '#BD5AFF', '#FF8D5A', '#FFFFFF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.gradientBorder, selectedImage ? styles.expandedInput : {}]} 
                >
                  <View style={styles.inputContainer}>
                    {selectedImage && (
                      <Image source={{ uri: selectedImage }} style={styles.inputImage} />
                    )}
                    <TextInput
                      style={styles.input}
                      placeholder="'Ask Lifi' or 'Tell Lifi'"
                      placeholderTextColor="#888"
                      value={inputText}
                      onChangeText={setInputText}
                    />
                    
                    {(inputText || selectedImage) && (
                      <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
                        <Ionicons name="close-circle" size={24} color="#888" />
                      </TouchableOpacity>
                    )}
                    
                    {!selectedImage && (
                      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                          <Path d="M13.95 23.25H17.05V17.05H23.25V13.95H17.05V7.75H13.95V13.95H7.75V17.05H13.95V23.25ZM15.5 31C13.3558 31 11.3408 30.5996 9.455 29.7987C7.56917 28.9721 5.92875 27.8612 4.53375 26.4662C3.13875 25.0712 2.02792 23.4308 1.20125 21.545C0.400417 19.6592 0 17.6442 0 15.5C0 13.3558 0.400417 11.3408 1.20125 9.455C2.02792 7.56917 3.13875 5.92875 4.53375 4.53375C5.92875 3.13875 7.56917 2.04083 9.455 1.24C11.3408 0.413333 13.3558 0 15.5 0C17.6442 0 19.6592 0.413333 21.545 1.24C23.4308 2.04083 25.0713 3.13875 26.4662 4.53375C27.8613 5.92875 28.9592 7.56917 29.76 9.455C30.5867 11.3408 31 13.3558 31 15.5C31 17.6442 30.5867 19.6592 29.76 21.545C28.9592 23.4308 27.8613 25.0712 26.4662 26.4662C25.0713 27.8612 23.4308 28.9721 21.545 29.7987C19.6592 30.5996 17.6442 31 15.5 31ZM15.5 27.9C18.9617 27.9 21.8938 26.6987 24.2963 24.2962C26.6988 21.8937 27.9 18.9617 27.9 15.5C27.9 12.0383 26.6988 9.10625 24.2963 6.70375C21.8938 4.30125 18.9617 3.1 15.5 3.1C12.0383 3.1 9.10625 4.30125 6.70375 6.70375C4.30125 9.10625 3.1 12.0383 3.1 15.5C3.1 18.9617 4.30125 21.8937 6.70375 24.2962C9.10625 26.6987 12.0383 27.9 15.5 27.9Z" fill="#9085C1"/>
                        </Svg>
                      </TouchableOpacity>
                    )}
                  </View>
                </GradientBorder>
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 90 90" fill="none">
                    <G filter="url(#filter0_d_240_4634)">
                      <Rect x="15" y="15" width="60" height="60" rx="29" fill="white"/>
                    </G>
                    <Path d="M35.0133 30L35 41.6667L55.5 45L35 48.3333L35.0133 60L63 45L35.0133 30Z" fill="url(#paint0_linear_240_4634)"/>
                    <Defs>
                      <LinearGradient id="paint0_linear_240_4634" x1="49" y1="30" x2="49" y2="60" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#5D37FF"/>
                        <Stop offset="1" stopColor="#BD5AFF"/>
                      </LinearGradient>
                    </Defs>
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#F8F6FF',
    borderRadius: 46.5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 10,
    elevation: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  navItemCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#B3B3B3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
  },
  chatArea: {
    backgroundColor: '#F8F6FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    marginHorizontal: 5,
    maxHeight: '70%',
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  conversation: {
    marginBottom: 20,
  },
  messageContainer: {
    width: '100%',
    alignItems: 'flex-start', // Align messages to the left
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    width: 'auto',
    maxWidth: '75%', // Restrict the width to 75% of the container
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF', // Different background for user messages
    color:'#979797',
    fontFamily:'Radio Canada Big'
  },
  lifiMessage: {
    alignSelf: 'flex-start',
    fontFamily:'Radio Canada Big',
    fontSize:16
  },
  messageText: {
    fontSize: 16,
    color: '#3d3d3d',
    flexShrink: 1,
  },
  messageDetail: {
    fontSize: 16,
    color: 'black', // Set "Need Attention" text to black
    marginLeft: 10,
  },
  messageLocation: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  messageImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  rectImage: {
    marginLeft: 10,
    width: 70,
    height: 70, // Rectangular size for the first Lifi message
    borderRadius: 10,
    marginRight: 10,
  },
  circleImage: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 25, // Circular size for other images
    marginRight: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 5,
  },
  actionButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 5,
  },
  actionText: {
    fontSize: 14,
    color: '#9085C1',
  },
  inputOuterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    shadowColor: "#5D37FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingHorizontal: 15,
    flex: 1,
  },
  gradientBorder: {
    flex: 1,
    borderRadius: 30,
    padding: 2,
    height: 50, // Default height
  },
  expandedInput: {
    height: 80, // Increase the height when an image is selected
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputImage: {
    width: 30, // Smaller size for the image in the input field
    height: 30,
    borderRadius: 15, // Make it a circle
    marginRight: 10,
  },
  clearButton: {
    marginRight: 10,
  },
  addButton: {
    marginRight: 10,
  },
  sendButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default BottomNavBarOlukai;
