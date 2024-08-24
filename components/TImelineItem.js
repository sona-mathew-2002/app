import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';

const TimelineItem = ({ date, text, isActive, showLinkIcon }) => (
  <View style={styles.itemContainer}>
    <View style={styles.dateContainer}>
      <Text style={[styles.dateText, isActive && styles.activeDateText]}>{date}</Text>
    </View>
    <View style={styles.dotContainer}>
      {isActive ? (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="12" fill="url(#grad)" />
          <Defs>
            <LinearGradient id="grad" x1="1.5" y1="2.5" x2="22.5" y2="22" gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor="#5D37FF" />
              <Stop offset="0.5" stopColor="#8D49FF" />
              <Stop offset="1" stopColor="#FF8D5A" />
            </LinearGradient>
          </Defs>
        </Svg>
      ) : (
        <Image
          source={require("../assets/timelinedot.png")} // Replace with your image URL
          style={styles.dotImage}
        />
      )}
    </View>
    <View style={styles.textContainer}>
      <View style={styles.textRow}>
        <Text style={[styles.text, isActive && styles.activeText]}>{text}</Text>
        {showLinkIcon && (
          <Ionicons name="link" size={16} color="#8e44ad" style={styles.icon} />
        )}
      </View>
    </View>
  </View>
);

const Timeline = () => (
  <View style={styles.container}>
    <View style={styles.verticalLine} />
    <TimelineItem date="20 Aug" text="Checking for availability" isActive={true} showLinkIcon={true} />
    <TimelineItem date="20 Aug" text="Currently unavailable. Soon to be restocked" />
    <TimelineItem 
      date="Today" 
      text="Good news! Ohana Flip-Flops - Men's Size 10 is now available. Shipping time usually is 5 days within California." 
    />
    <TimelineItem date="Now" text="Waiting for confirmation" isActive={true} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8FA',
    position: 'relative',
  },
  itemContainer: {
    flexDirection: 'row',
    // marginBottom: 35,
    alignItems: 'flex-start',
    marginTop:40
  },
  dateContainer: {
    width: 60,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  dateText: {
    fontSize: 12,
    color: '#888',
  },
  activeDateText: {
    color: '#8e44ad',
  },
  dotContainer: {
    width: 20,
    alignItems: 'center',
    position: 'relative',
  },
  dotImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 90,  // Adjust this value to align with your dots
    width: 2,
    backgroundColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#979797',
  },
  activeText: {
    color: '#979797',
  },
  icon: {
    marginLeft: 5,
  },
});

export default Timeline;
