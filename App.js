import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Homescreen';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import BottomNavBar from './components/BottomNavBar';
// import ChatArea from './components/ChatArea';
import FinancePage from './FinancePage'
import NewsPage from './NewsPage'
import EntityPage from './Entity Page';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    'Radio Canada': require('./assets/fonts/RadioCanada.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts(); // Load fonts
      } catch (e) {
        console.warn('Error loading fonts', e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <NewsPage/> */}
      {/* <FinancePage/> */}
      {/* <EntityPage/> */}
      <StatusBar style="auto" />
      <BottomNavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
