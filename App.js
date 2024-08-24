import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Homescreen';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import BottomNavBar from './components/BottomNavBar';
// import ChatArea from './components/ChatArea';
import FinancePage from './FinancePage'
import NewsPage from './NewsPage'
import EntityPage from './Entity Page';
import CommunicationPage from './CommunicationPage';
import DylanEntityPage from './DylanEntityPage';
import OlukaiEntityPage from './OlukaiEntityPage';

const Stack = createNativeStackNavigator();
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
    // <View style={styles.container}>

      <>
      <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="Finance" component={FinancePage} />
        <Stack.Screen name="News" component={NewsPage} />
        <Stack.Screen name="Communication" component={CommunicationPage} />
        <Stack.Screen name="Entity" component={EntityPage} />
        <Stack.Screen name="dylanentity" component={DylanEntityPage} />
        <Stack.Screen name="olukaientity" component={OlukaiEntityPage} />


      </Stack.Navigator>
      <StatusBar style="auto" />
      {/* <BottomNavBar/> */}
    </NavigationContainer>
      
      </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Radio Canada Big'
  },
});
