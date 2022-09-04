import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import First from './components/First';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import { GettingStarted } from './pages';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="GettingStarted"
          component={GettingStarted}
        />
        <Stack.Screen
          name="Home"
          component={First}
        >
        </Stack.Screen>
        <Stack.Screen
        name = "Login" 
        component={Login}>
        </Stack.Screen>
        <Stack.Screen
        name = "Forgot"
        component={Forgot}>
        </Stack.Screen>
        <Stack.Screen
        name = "Signup"
        component = {Signup}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App