// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const ChatArea = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.closeButton}>
//           <Ionicons name="close" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Chat Area */}
//       <ScrollView style={styles.chatArea}>
//         <View style={styles.suggestionsContainer}>
//           <View style={styles.suggestion}>
//             <Image source={require('../assets/flower.jpeg')} style={styles.suggestionAvatar} />
//             <Text style={styles.suggestionText}>Call Joe to learn about the trip</Text>
//           </View>
//           <View style={styles.suggestion}>
//             <Image source={require('../assets/flower.jpeg')} style={styles.suggestionAvatar} />
//             <Text style={styles.suggestionText}>Plan a weekend trip</Text>
//           </View>
//           <View style={styles.suggestion}>
//             <Image source={require('../assets/flower.jpeg')} style={styles.suggestionAvatar} />
//             <Text style={styles.suggestionText}>Setup dentist appointment</Text>
//           </View>
//         </View>

//         {/* Recent History */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentHistory}>
//           <Image source={require('../assets/flower.jpeg')} style={styles.recentAvatar} />
//           <Image source={require('../assets/flower.jpeg')} style={styles.recentAvatar} />
//           <Image source={require('../assets/flower.jpeg')} style={styles.recentAvatar} />
//           <Image source={require('../assets/flower.jpeg')} style={styles.recentAvatar} />
//         </ScrollView>
//       </ScrollView>

//       {/* Input Area */}
//       <View style={styles.inputArea}>
//         <TextInput style={styles.input} placeholder="'Ask Lifi' or 'Tell Lifi'" placeholderTextColor="#B2B2B2" />
//         <TouchableOpacity style={styles.sendButton}>
//           <Ionicons name="arrow-forward-circle" size={36} color="#5D37FF" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F6F6',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     overflow: 'hidden',
//   },
//   header: {
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FF8D5A',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 15,
//     right: 20,
//   },
//   chatArea: {
//     flex: 1,
//     padding: 16,
//   },
//   suggestionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   suggestion: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     width: '48%',
//   },
//   suggestionAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   suggestionText: {
//     fontSize: 14,
//     color: '#4F4F4F',
//   },
//   recentHistory: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   recentAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   inputArea: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#E6E6E6',
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     paddingHorizontal: 20,
//     backgroundColor: '#F6F6F6',
//     borderRadius: 25,
//     fontSize: 16,
//     color: '#000',
//   },
//   sendButton: {
//     marginLeft: 10,
//   },
// });

// export default ChatArea;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const ChatArea = () => {
//   const [message, setMessage] = useState('');

//   const recentHistory = [
//     { id: 1, text: 'When did we last meet Jio', avatar: 'https://example.com/avatar1.png' },
//     { id: 2, text: 'ETA to swimming class', avatar: 'https://example.com/avatar2.png' },
//     { id: 3, text: 'Plan a weekend trip', avatar: 'https://example.com/avatar3.png' },
//     { id: 4, text: 'Setup dentist appointment', avatar: 'https://example.com/avatar4.png' },
//   ];

//   const quickActions = [
//     { id: 1, text: 'Ask Lifi', icon: 'microphone' },
//     { id: 2, text: 'Tell Lifi', icon: 'bullhorn' },
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollContainer} horizontal={false} showsVerticalScrollIndicator={false}>
//         <View style={styles.quickActionsContainer}>
//           {recentHistory.map((item) => (
//             <TouchableOpacity key={item.id} style={styles.actionItem}>
//               <Image source={{ uri: item.avatar }} style={styles.avatar} />
//               <Text style={styles.actionText}>{item.text}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>

//       <View style={styles.inputContainer}>
//         <FontAwesome name="microphone" size={24} color="gray" style={styles.icon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Ask Lifi or Tell Lifi"
//           value={message}
//           onChangeText={setMessage}
//         />
//         <TouchableOpacity style={styles.sendButton}>
//           <FontAwesome name="send" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F6F6',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     padding: 20,
//   },
//   scrollContainer: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   quickActionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   actionItem: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 5,
//     elevation: 3,
//     width: '45%', // Adjust this to fit the screen
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginBottom: 5,
//   },
//   actionText: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     borderRadius: 30,
//     paddingHorizontal: 10,
//     elevation: 5,
//     marginTop: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#4766FF',
//     padding: 10,
//     borderRadius: 20,
//     marginLeft: 10,
//   },
// });

// export default ChatArea;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const ChatArea = () => {
//   const [messages, setMessages] = useState([
//     { id: '1', type: 'user', text: 'When is the vaccine due?', avatar: 'https://example.com/avatar1.png' },
//     { id: '2', type: 'lifi', text: 'Last vaccine date:', details: '10th Mar, 2024', location: 'Stanford Health Center' },
//     { id: '3', type: 'lifi', text: 'Next appointment:', details: '22nd Aug, 2024', location: 'Stanford Health Center' },
//     // Add more messages as needed
//   ]);

//   const [message, setMessage] = useState('');

//   const sendMessage = () => {
//     if (message.trim()) {
//       const newMessage = {
//         id: (messages.length + 1).toString(),
//         type: 'user',
//         text: message,
//         avatar: 'https://example.com/avatar1.png', // Example icon, replace with your avatar if needed
//       };
//       setMessages([...messages, newMessage]);
//       setMessage('');
//     }
//   };

//   const renderItem = ({ item }) => {
//     if (item.type === 'user') {
//       return (
//         <View style={styles.userMessageContainer}>
//           <Image source={{ uri: item.avatar }} style={styles.avatar} />
//           <Text style={styles.userMessage}>{item.text}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.lifiMessageContainer}>
//           <Text style={styles.lifiMessage}>{item.text}</Text>
//           <Text style={styles.lifiDetails}>{item.details}</Text>
//           {item.location && <Text style={styles.lifiSubText}>Location: {item.location}</Text>}
//         </View>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         style={styles.chatList}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Ask Lifi or Tell Lifi"
//           value={message}
//           onChangeText={setMessage}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <FontAwesome name="send" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6F6F6',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     padding: 20,
//   },
//   chatList: {
//     flex: 1,
//   },
//   userMessageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     alignSelf: 'flex-start',
//     maxWidth: '80%',
//   },
//   lifiMessageContainer: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 20,
//     marginBottom: 15,
//     alignSelf: 'flex-end',
//     maxWidth: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   userMessage: {
//     backgroundColor: '#FFF',
//     padding: 10,
//     borderRadius: 20,
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   lifiMessage: {
//     fontSize: 16,
//     color: '#4766FF',
//     fontWeight: 'bold',
//   },
//   lifiDetails: {
//     fontSize: 16,
//     color: '#333',
//     marginTop: 5,
//   },
//   lifiSubText: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 5,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     borderRadius: 30,
//     paddingHorizontal: 10,
//     elevation: 5,
//     marginTop: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#4766FF',
//     padding: 10,
//     borderRadius: 20,
//     marginLeft: 10,
//   },
// });

// export default ChatArea;
