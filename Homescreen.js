

import React from "react";
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
import BottomNavBar from "./components/BottomNavBar";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Line } from "react-native-svg";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Section */}
          <ImageBackground
            source={require("./assets/bg.png")} // Replace with your background image path
            style={styles.header}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View style={styles.headerContent}>
              {/* <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Hello Joe,</Text>
                <Text style={styles.subGreetingText}>Good Morning!</Text>
              </View> */}
              <Image
                source={require("./assets/flower.jpeg")}
                style={styles.avatar}
              />
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
            <View style={styles.statusContainer}>
              <View style={styles.statusItem}>
                <Image
                  source={require("./assets/status1.png")} // Replace with the actual Tesla icon path
                  style={styles.statusIcon}
                />
                <Text style={styles.statusLabel}>Your Tesla</Text>
                <Text style={styles.statusText}>55%</Text>
              </View>
              <View style={styles.statusItem}>
                <Image
                  source={require("./assets/status2.png")} // Replace with the actual Portfolio icon path
                  style={styles.statusIcon}
                />
                <Text style={styles.statusLabel}>Portfolio</Text>
                <Text style={styles.statusText}>1.2%</Text>
              </View>
              <View style={styles.statusItem}>
                <Image
                  source={require("./assets/status1.png")} // Replace with the actual Steps icon path
                  style={styles.statusIcon}
                />
                <Text style={styles.statusLabel}>Steps left</Text>
                <Text style={styles.statusText}>2500</Text>
              </View>
              <View style={styles.statusItem}>
                <Image
                  source={require("./assets/status3.png")} // Replace with the actual Time icon path
                  style={styles.statusIcon}
                />
                <Text style={styles.statusLabel}>Time to home</Text>
                <Text style={[styles.statusText, { color: "red" }]}>
                  35 mins
                </Text>
              </View>
            </View>
            <LinearGradient
              colors={["rgba(255,255,255,0)", "rgba(248,246,255,1)"]}
              style={styles.gradient}
            />
          </ImageBackground>

          {/* To-do Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Need Immediate Attention</Text>
              {/* <TouchableOpacity>
                <Text style={styles.moreText}>More </Text>
              </TouchableOpacity> */}
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.todoContainer}
            >
              <View style={styles.todoItem}>
                <Image
                  source={require("./assets/todo1.png")}
                  style={styles.todoAvatar}
                />
                <Text style={styles.todoText}>
                  Call Joe to learn about the trip
                </Text>
              </View>
              <View style={styles.todoItem}>
                <Image
                  source={require("./assets/todo2.png")}
                  style={styles.todoAvatar}
                />
                <Text style={styles.todoText}>
                  Call Joe to learn about the trip
                </Text>
              </View>
              <View style={styles.todoItem}>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.todoAvatar}
                />
                <Text style={styles.todoText}>
                  Call Joe to learn about the trip
                </Text>
              </View>
              <View style={styles.todoItem}>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.todoAvatar}
                />
                <Text style={styles.todoText}>
                  Call Joe to learn about the trip
                </Text>
              </View>
            </ScrollView>
          </View>

          {/* Feed For You Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Feed For you</Text>
              {/* <TouchableOpacity>
                <Text style={styles.moreText}>More </Text>
              </TouchableOpacity> */}
            </View>

            <View style={styles.feedContainer}>
              <View style={styles.feedItem}>
                <View style={styles.feedTextContainer}>
                  <Text style={styles.feedTitle}>Anvi - Target</Text>
                  <Text style={styles.feedText}>
                    Get Diapers for Anvi before August 12
                  </Text>
                  <Text style={styles.feedTime}>12:30 PM</Text>
                </View>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.feedImage}
                />
              </View>
              <View style={styles.feedItem}>
                <View style={styles.feedTextContainer}>
                  <Text style={styles.feedTitle}>Home - Security</Text>
                  <Text style={styles.feedText}>Nothing Looks Suspicious</Text>
                  <Text style={styles.feedTime}>Liv | Front Door Cam</Text>
                </View>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.feedImage}
                />
              </View>
              <View style={styles.feedItem}>
                <View style={styles.feedTextContainer}>
                  <Text style={styles.feedTitle}>Work - Meeting</Text>
                  <Text style={styles.feedText}>
                    Prepare slides for the meeting
                  </Text>
                  <Text style={styles.feedTime}>3:00 PM</Text>
                </View>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.feedImage}
                />
              </View>
              <View style={styles.feedItem}>
                <View style={styles.feedTextContainer}>
                  <Text style={styles.feedTitle}>Work - Meeting</Text>
                  <Text style={styles.feedText}>
                    Prepare slides for the meeting
                  </Text>
                  <Text style={styles.feedTime}>3:00 PM</Text>
                </View>
                <Image
                  source={require("./assets/flower.jpeg")}
                  style={styles.feedImage}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Fixed Bottom Navigation Bar */}
        {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        {/* <BottomNavBar /> */}
        {/* </GestureHandlerRootView> */}
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
    marginTop: 75,
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
    color:'#3D3D3D'
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
    fontWeight:'400',
    lineHeight:20
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
    fontFamily: "Radio Canada",
    fontSize: 12,
    fontWeight: "400",
  },
  feedText: {
    color: "#4F4F4F",
    fontFamily: "Radio Canada",
    fontSize: 18,
    fontWeight: "700",
  },
  feedTime: {
    fontSize: 14,
    color: "#8f8f8f",
    marginTop: "auto", // Aligns time text to the bottom
  },
});

export default HomeScreen;
