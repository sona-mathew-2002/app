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
import Svg, { Line, Path, Circle } from "react-native-svg";
import Timeline from "./components/TImelineItem";

const OlukaiPage = () => {
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
                  source={require("./assets/olukai.png")}
                  style={styles.profileImage}
                />
                <Text style={styles.profileName}>Olukai</Text>
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
                  Olukai has size 10 available now. Shipping time is 5 days.
                </Text>
                <Text style={styles.subText}>Olukai</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Take action</Text>
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={["rgba(255,255,255,0)", "rgba(248,246,255,1)"]}
              style={styles.gradient}
            />
          </ImageBackground>

          {/* Timeline Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Lifi - Olukai Communication
            </Text>
            <Timeline/>
          </View>
        </ScrollView>

        <BottomNavBarOlukai />
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
  section: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Radio Canada Big",
    fontWeight: "600",
    color: "#3D3D3D",
  },
  timelineContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timelineIcon: {
    marginRight: 10,
  },
  timelineTextContainer: {
    flex: 1,
  },
  timelineDate: {
    fontSize: 12,
    color: "#8f8f8f",
  },
  timelineText: {
    fontSize: 14,
    color: "#3D3D3D",
    fontWeight: "600",
  },
  timelineLine: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginVertical: 8,
    marginLeft: 16,
  },
  timelineImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  svgIcon: {
    width: 36,
    height: 20,
    flexShrink: 0,
    marginLeft: 18,
  },
});

export default OlukaiPage;
