import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroOne from '../screens/IntroOne';
import IntroTwo from '../screens/IntroTwo';
import IntroThree from '../screens/IntroThree';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import Setup from '../screens/Setup';
import Signup from '../screens/Signup';
import Theme from '../screens/Theme';

const Stack = createStackNavigator();

const Onboarding: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroOne"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Onboarding;
