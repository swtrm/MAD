/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './componen/consultation/WelcomeScreen';
import AuthScreen from './componen/consultation/AuthScreen';
import RegisterScreen from './componen/consultation/RegisterScreen';
import VerificationScreen from './componen/consultation/VerificationScreen';
import FormScreen from './componen/consultation/FormScreen';
import ProfilePicScreen from './componen/consultation/ProfilePicScreen';
import HomeScreen from './componen/consultation/HomeScreen';
import PsychologistListScreen from './componen/consultation/PsychologistListScreen';

const Stack = createNativeStackNavigator(); // ← pastikan fungsi ini dipanggil!

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="ProfilePic" component={ProfilePicScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="PsychologistList"
          component={PsychologistListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
