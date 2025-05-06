import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from './components/pages/welcomePage'; // Import WelcomePage
import SignUpPage from './components/pages/SignUpPage'; // Import SignUpPage
import RegistrationPage from './components/pages/RegistrationPage'; // Import RegistrationPage
import VerificationPage from './components/pages/VerificationPage'; // Import VerificationPage
import BioPage from './components/pages/bioPage'; // Import BioPage
import Profile from './components/pages/profilePage';
import Welcome2 from './components/pages/welcome2';
import Home from './components/pages/homePage';
import Consultation from './components/pages/Consultation';
import DokterInfo from './components/pages/dokterInfo';
import ChatDoctor from './components/pages/chatDokter';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{headerShown: false}} // Hide header for WelcomePage
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{headerShown: false}} // Add title for SignUpPage
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationPage}
          options={{title: 'Registration'}} // Add title for RegistrationPage
        />
        <Stack.Screen
          name="VerificationPage"
          component={VerificationPage}
          options={{title: 'Verification'}} // Add title for VerificationPage
        />
        <Stack.Screen
          name="BioPage"
          component={BioPage}
          options={{title: 'bioPage'}} // Add title for BioPage
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}} // Add title for BioPage
        />
        <Stack.Screen
          name="Welcome2"
          component={Welcome2}
          options={{headerShown: false}} // Add title for BioPage
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} // Hilangkan header
        />
        <Stack.Screen
          name="Consultation"
          component={Consultation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DokterInfo"
          component={DokterInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatDoctor"
          component={ChatDoctor}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
