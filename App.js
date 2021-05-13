import React, {useEffect} from 'react';
import type {Node} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import IntroOne from './screens/onboarding/IntroOne';
import IntroTwo from './screens/onboarding/IntroTwo';
import IntroThree from './screens/onboarding/IntroThree';
import Login from './screens/onboarding/Login';
import Otp from './screens/onboarding/Otp';
import Setup from './screens/onboarding/Setup';
import Code from './screens/onboarding/Code';
import Signup from './screens/onboarding/Signup';
import Theme from './screens/onboarding/Theme';

import Home from './screens/home/Home';

import Device from './screens/devices/Device';

import Trend from './screens/trends/Trend';

import More from './screens/more/More';
import MyHome from './screens/more/MyHome';
import Internet from './screens/more/Internet';
import Cost from './screens/more/Cost';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <OnboardingScreens />;
};

const OnboardingScreens: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Dashboard" component={DashboardTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MoreScreens: () => Node = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="MyHome" component={MyHome} />
      <Stack.Screen name="Internet" component={Internet} />
      <Stack.Screen name="Cost" component={Cost} />
    </Stack.Navigator>
  );
};

const DashboardTab: () => Node = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1EA2F3',
        inactiveTintColor: '#BFBFBF',
        labelStyle: {
          fontStyle: 'normal',
          fontSize: 12,
          lineHeight: 15,
          fontFamily: 'caros',
        },
        tabStyle: {
          paddingTop: 5,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-home" size={20} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Device"
        component={Device}
        options={{
          tabBarIcon: tabInfo => {
            return <FontAwesome5 name="plug" size={20} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Trend"
        component={Trend}
        options={{
          tabBarIcon: tabInfo => {
            return <FontAwesome5 name="poll" size={20} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreens}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-grid" size={20} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
