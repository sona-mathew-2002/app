import React, { useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, Mask, G, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const AskLifiButton = ({ onSwipeUp }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY < -50) { // Swipe-up threshold
        onSwipeUp(); // Trigger the modal or action on swipe up
      }
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={[styles.askLifiButton, { transform: [{ translateY }] }]}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} viewBox="0 0 92 92" fill="none">
          <Mask id="mask0_247_4169" maskUnits="userSpaceOnUse" x="3" y="3" width="86" height="86">
            <Circle cx="46" cy="46" r="43" fill="white" />
          </Mask>
          <G mask="url(#mask0_247_4169)">
            <Path d="M-1 65.8844C8.33713 60.6331 15.6286 59.7861 20.6559 60.0398C33.289 60.6771 37.4937 71 53.5 71C62.5 71 67 67.5 69.58 64.9865V83.0147H-0.80563C-0.870421 77.3046 -0.93521 71.5945 -1 65.8844Z" fill="#FF8D5A" />
            <Path d="M-1 71.5101C5.81223 65.8421 10.1927 65.2017 13.1029 65.2017C22.4656 65.2017 27.9083 74.4603 39.5112 75.952C44.0461 76.535 47.9274 75.8012 50.4941 75.092V89.9998H-0.858191C-0.905461 83.8366 -0.952731 77.6733 -1 71.5101Z" fill="#BD5AFF" />
            <Path d="M-0.94873 79.7303C2.16134 78.2137 7.04248 75.7917 13.3365 75.7917C23.3063 75.7917 25.7781 78.9093 33.2629 78.9093C51.7837 78.9093 62.0378 62.4878 80.3913 62.4878C87.9245 62.4878 91.9547 63.8444 91.9547 63.8444C92.1117 71.3871 91.7976 82.4573 91.9547 90H-1C-0.98291 87.0891 -0.96582 82.6411 -0.94873 79.7303Z" fill="#5D37FF" />
          </G>
          <Circle cx="46" cy="46" r="42.5" stroke="url(#paint1_linear_247_4169)" />
          <SvgText
            x="46"
            y="50"
            textAnchor="middle"
            fill="#4766FF"
            fontSize="20"
            fontWeight="500"
            fontFamily="Radio Canada"
          >
            Ask Lifi
          </SvgText>
          <Defs>
            <LinearGradient id="paint1_linear_247_4169" x1="46" y1="3" x2="46" y2="89" gradientUnits="userSpaceOnUse">
              <Stop stopColor="#5D37FF" />
              <Stop offset="0.31" stopColor="#BD5AFF" />
              <Stop offset="1" stopColor="#FF8D5A" />
            </LinearGradient>
          </Defs>
        </Svg>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  askLifiButton: {
    position: 'absolute',
    left: width / 2 - 35,
    bottom: 25,
    elevation: 5,
  },
});

export default AskLifiButton;
