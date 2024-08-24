

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavBarOlukai from "./components/BottomNavbarOlukai";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Line, Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';


const OlukaiEntityPage = () => {
  const navigation = useNavigation(); 

  const [feedItems, setFeedItems] = useState([
    {
      title: "Anvi - Target",
      text: "Get Diapers for Anvi before August 12",
      time: "12:30 PM",
      image: require("./assets/flower.jpeg"),
    },
    {
      title: "Home - Security",
      text: "Nothing Looks Suspicious",
      time: "Liv | Front Door Cam",
      image: require("./assets/flower.jpeg"),
    },
    {
      title: "Work - Meeting",
      text: "Prepare slides for the meeting",
      time: "3:00 PM",
      image: require("./assets/flower.jpeg"),
    },
  ]);

  const addFeedItem = (item) => {
    setFeedItems([item, ...feedItems]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Section */}
          <ImageBackground
            source={require("./assets/bg.png")}
            style={styles.header}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View style={styles.headerContent}>
              <Svg
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                style={styles.svgIcon}
              >
                <Path
                  d="M14 2L2 14L14 26"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <View style={styles.profileContainer}>
                <Image
                  source={require("./assets/kuai.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.profileName}>Kuai trip</Text>
              </View>
              <Svg
                width="36"
                height="27"
                viewBox="0 0 36 27"
                fill="none"
                style={styles.svgIcon}
              >
                <Line
                  x1="34"
                  y1="24"
                  x2="11"
                  y2="24"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <Line
                  x1="34"
                  y1="13"
                  x2="2"
                  y2="13"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <Line
                  x1="34"
                  y1="2"
                  x2="11"
                  y2="2"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </Svg>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.mainText}>
                  Next slot available for whale watching for 31st Aug
                </Text>
                <Text style={styles.dateText}>9:00 AM</Text>
                <Text style={styles.subText}>
                  Operator: Kuai Express
                </Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => {
          
          navigation.navigate('olukai'); // Navigate to Homescreen
        }}>
                <Ionicons name="call" size={18} color="#fff" />
                <Text style={styles.buttonText}>Contact Tour</Text>
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={["rgba(255,255,255,0)", "rgba(248,246,255,1)"]}
              style={styles.gradient}
            />
          </ImageBackground>

          {/* Feed For You Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Feed For Avni</Text>
            </View>

            <View style={styles.feedContainer}>
              {feedItems.map((item, index) => (
                <View style={styles.feedItem} key={index}>
                  <View style={styles.feedTextContainer}>
                    <Text style={styles.feedTitle}>{item.title}</Text>
                    <Text style={styles.feedText}>{item.text}</Text>
                    <Text style={styles.feedTime}>{item.time}</Text>
                  </View>
                  <Image source={item.image} style={styles.feedImage} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <BottomNavBarOlukai addFeedItem={addFeedItem} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f6ff",
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f6ff",
    justifyContent: "space-between",
  },
  scrollContent: {
    paddingBottom: 100, // Add padding to ensure content isn't hidden behind navbar
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "20%", // Adjust this value to control the height of the gradient
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  header: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    width: "100%",
    overflow: "hidden", // Ensures the rounded corners work correctly with the background image
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    // marginTop:62,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greetingText: {
    marginTop: 40,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Radio Canada",
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 40, // Adjust as needed for spacing
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10, // Space between text and button
  },
  mainText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Radio Canada Big",
    fontWeight: "400",
    marginBottom: 8,
  },
  dateText: {
    fontSize: 22,
    color: "#22C55E", // Green color to match the date text in the image
    fontFamily: "Radio Canada Big",
    fontWeight: "700",
    marginBottom: 8,
  },
  subText: {
    fontSize: 12,
    color: "#8f8f8f",
    fontFamily: "Radio Canada Big",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#7B61FF", // Purple background for the button
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
    padding: 4,
    fontFamily: "Radio Canada Big",
  },
  subGreetingText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Radio Canada",
    fontSize: 18,
    fontWeight: "400",
    textShadowColor: "rgba(54, 78, 238, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: 30,
    marginTop: 62,
  },
  svgIcon: {
    width: 36,
    height: 20,
    flexShrink: 0,
    marginLeft: 18,
    // marginTop: 5,
  },
  statusContainer: {
    // height:98,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 32,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 16,
    elevation: 3,
    marginHorizontal: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.30)",
  },
  statusItem: {
    alignItems: "center",
    flex: 1,
  },
  statusIcon: {
    width: 36,
    height: 36,
    // marginBottom: 8,
    borderRadius: 20,
  },
  statusLabel: {
    fontSize: 12,
    color: "#000",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  section: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Radio Canada Big",
    fontWeight: "600",
    color: "#3D3D3D",
  },
  moreText: {
    color: "#6a1b9a",
    fontWeight: "bold",
  },
  todoContainer: {
    flexDirection: "row",
  },
  todoItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    // padding: 10,
    borderRadius: 30,
    // marginRight: 10,
    marginLeft: 18,
    // alignItems: 'center',
    width: 150,
    height: 140,
    elevation: 2,
    marginVertical: 16,
    shadowColor: "#5D37FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  todoAvatar: {
    width: 53.286,
    height: 54,
    borderRadius: 30,
    marginTop: 14,
    marginLeft: 16,
  },
  todoText: {
    fontStyle: "Radio Canada Big",
    // fontWeight:'600',
    fontSize: 16, // Adjust font size if needed
    flexShrink: 1, // Ensures text doesn't overflow
    textAlign: "left",
    marginTop: 4,
    marginLeft: 16,
    fontWeight: "400",
    lineHeight: 20,
  },
  // feedContainer: {
  //   marginTop: 10,
  // },
  feedItem: {
    flexDirection: "row", // Added to make image and text side by side
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
    elevation: 2,
    marginVertical: 16,
    marginHorizontal: 18,
    shadowColor: "#5D37FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  feedImage: {
    marginLeft:10,
    width: 120.237,
    height: 122,
    flexShrink: 0,
    borderRadius: 15, // Space between image and text
  },
  feedTextContainer: {
    flex: 1, // Ensures text takes up the remaining space
  },
  feedTitle: {
    color: "#5d37ff",
    fontFamily: "Radio Canada Big",
    fontSize: 12,
    fontWeight: "400",
  },
  feedText: {
    color: "#4F4F4F",
    fontFamily: "Radio Canada Big",
    fontSize: 18,
    fontWeight: "700",
  },
  feedTime: {
    fontSize: 14,
    color: "#8f8f8f",
    marginTop: "auto", // Aligns time text to the bottom
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 40, // Adjust based on the required position
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#fff",
  },
  profileName: {
    color: "#5d37ff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default OlukaiEntityPage;
