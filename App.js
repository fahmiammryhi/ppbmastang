import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import BeliTiket from './screens/BeliTiket';
import Landing from './screens/Landing';
import LoginScreenA from './screens/LoginScreenA';
import LoginScreenU from './screens/LoginScreenU';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="LoginA" component={LoginScreenA} />
        <Stack.Screen name="Beli" component={BeliTiket} />
        <Stack.Screen name="LoginU" component={LoginScreenU} />
      </Stack.Navigator>
    </NavigationContainer>
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
