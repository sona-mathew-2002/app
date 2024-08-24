
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Svg, { Path, Circle, Mask, G, Defs, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';
// import { LinearGradient } from 'expo-linear-gradient';
const BottomNavBar = () => {
  const [selected, setSelected] = useState('Home');
  const getIconColor = (item) => (selected === item ? '#7B61FF' : '#B3B3B3');
  const getTextColor = (item) => (selected === item ? '#7B61FF' : '#B3B3B3');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => setSelected('Home')}>
        <Ionicons name="home" size={24} color={getIconColor('Home')} />
        <Text style={[styles.navText, { color: getTextColor('Home') }]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setSelected('Finances')}>
        <FontAwesome name="dollar" size={24} color={getIconColor('Finances')} />
        <Text style={[styles.navText, { color: getTextColor('Finances') }]}>Finances</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemCenter}>
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
        Lifi
      </SvgText>
      <Defs>
        <LinearGradient id="paint1_linear_247_4169" x1="46" y1="3" x2="46" y2="89" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#5D37FF" />
          <Stop offset="0.31" stopColor="#BD5AFF" />
          <Stop offset="1" stopColor="#FF8D5A" />
        </LinearGradient>
      </Defs>
    </Svg>

      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setSelected('News')}>
        <MaterialIcons name="article" size={24} color={getIconColor('News')} />
        <Text style={[styles.navText, { color: getTextColor('News') }]}>News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => setSelected('More')}>
        <Ionicons name="apps" size={24} color={getIconColor('More')} />
        <Text style={[styles.navText, { color: getTextColor('More') }]}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#FFF',
    // borderLeftRadius: 30,
    // borderRightRadius: 30,
    borderRadius:46.5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin:10,
    elevation: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemCenter: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 70,
    // height: 70,
    // borderRadius: 35,
    // backgroundColor: '#FFF',
    // marginTop: -35, // Pulls the center item upwards
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // elevation: 5,
  },
  navText: {
    fontSize: 12,
    color: '#B3B3B3',
  },
  navTextCenter: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7B61FF',
  },
  lifiIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default BottomNavBar;
