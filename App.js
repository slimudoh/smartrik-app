import React, {useEffect} from 'react';
import type {Node} from 'react';
// import {Image} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

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
import DeviceDetails from './screens/devices/DeviceDetails';
import DeviceStats from './screens/devices/DeviceStats';
import DeviceNotify from './screens/devices/DeviceNotify';
import NewDevice from './screens/devices/NewDevice';

import Trend from './screens/trends/Trend';
import NewTarget from './screens/trends/NewTarget';
import TrendUsage from './screens/trends/TrendUsage';
import PowerMeter from './screens/trends/PowerMeter';

import More from './screens/more/More';
import MyHome from './screens/more/MyHome';
import Internet from './screens/more/Internet';
import Cost from './screens/more/Cost';
import Notification from './screens/more/Notification';
import About from './screens/more/About';
import Help from './screens/more/Help';
import Terms from './screens/more/Terms';
import Policy from './screens/more/Policy';
import Card from './screens/more/Card';
import AddCard from './screens/more/AddCard';

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
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="IntroOne">
        <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Policy" component={Policy} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Dashboard" component={DashboardTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MoreScreens: () => Node = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="More">
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="MyHome" component={MyHome} />
      <Stack.Screen name="Internet" component={Internet} />
      <Stack.Screen name="Cost" component={Cost} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

const DeviceScreens: () => Node = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Device">
      <Stack.Screen name="Device" component={Device} />
      <Stack.Screen name="DeviceDetails" component={DeviceDetails} />
      <Stack.Screen name="DeviceStats" component={DeviceStats} />
      <Stack.Screen name="DeviceNotify" component={DeviceNotify} />
      <Stack.Screen name="NewDevice" component={NewDevice} />
    </Stack.Navigator>
  );
};

const TrendScreens: () => Node = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Trend">
      <Stack.Screen name="Trend" component={Trend} />
      <Stack.Screen name="NewTarget" component={NewTarget} />
      <Stack.Screen name="TrendUsage" component={TrendUsage} />
      <Stack.Screen name="PowerMeter" component={PowerMeter} />
    </Stack.Navigator>
  );
};

const DashboardTab: () => Node = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? (
              <Svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M14.984 28.7734V25.7156C14.984 24.9351 15.6549 24.3023 16.4826 24.3023H19.508C19.9055 24.3023 20.2866 24.4512 20.5677 24.7163C20.8487 24.9813 21.0066 25.3408 21.0066 25.7156V28.7734C21.0041 29.0979 21.139 29.4099 21.3814 29.6402C21.6239 29.8705 21.9537 30 22.2978 30H24.3619C25.3259 30.0024 26.2513 29.6429 26.9339 29.0008C27.6164 28.3588 28 27.487 28 26.5778V17.8669C28 17.1325 27.6548 16.4358 27.0575 15.9647L20.0358 10.6759C18.8144 9.74856 17.0643 9.7785 15.8794 10.747L9.01791 15.9647C8.39236 16.422 8.01848 17.1206 8 17.8669V26.5689C8 28.4639 9.62882 30 11.6381 30H13.655C14.3697 30 14.9505 29.4562 14.9557 28.7822L14.984 28.7734Z"
                  fill="#1EA2F3"
                />
              </Svg>
            ) : (
              <Svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M14.984 28.7734V25.7156C14.984 24.9351 15.6549 24.3023 16.4826 24.3023H19.508C19.9055 24.3023 20.2866 24.4512 20.5677 24.7163C20.8487 24.9813 21.0066 25.3408 21.0066 25.7156V28.7734C21.0041 29.0979 21.139 29.4099 21.3814 29.6402C21.6239 29.8705 21.9537 30 22.2978 30H24.3619C25.3259 30.0024 26.2513 29.6429 26.9339 29.0008C27.6164 28.3588 28 27.487 28 26.5778V17.8669C28 17.1325 27.6548 16.4358 27.0575 15.9647L20.0358 10.6759C18.8144 9.74856 17.0643 9.7785 15.8794 10.747L9.01791 15.9647C8.39236 16.422 8.01848 17.1206 8 17.8669V26.5689C8 28.4639 9.62882 30 11.6381 30H13.655C14.3697 30 14.9505 29.4562 14.9557 28.7822L14.984 28.7734Z"
                  fill="#BFE4FB"
                />
              </Svg>
            );
            return iconName;
          } else if (route.name === 'Device') {
            iconName = focused ? (
              <Svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M22.5585 12.6822L18.3304 16.9104L15.89 14.4701L20.1182 10.2419C20.575 9.79816 21.4884 9.98086 22.154 10.6595C22.8326 11.325 23.0153 12.2385 22.5585 12.6822ZM12.1186 14.9921C12.1186 14.9921 12.8424 14.1012 13.3061 13.5305C13.7195 13.9438 14.1164 14.3408 14.5 14.7243C18.3777 18.6021 20.8857 21.11 25.0641 25.2885L23.5112 26.3847C22.5846 27.3113 20.0791 27.8985 18.5261 27.8985H13.4627L11.8445 29.5167C11.0746 30.2867 9.83483 30.2867 9.07793 29.5167C8.89485 29.3358 8.7495 29.1205 8.65028 28.883C8.55108 28.6455 8.5 28.3907 8.5 28.1334C8.5 27.8761 8.55108 27.6213 8.65028 27.3838C8.7495 27.1463 8.89485 26.931 9.07793 26.7501L10.6961 25.1319V20.0685C10.6961 18.5939 11.2181 15.9056 12.1186 14.9921ZM21.5928 20.1729L25.821 15.9447C26.2647 15.488 27.1782 15.6707 27.8438 16.3493C28.5224 17.0148 28.7051 17.9283 28.2483 18.372L24.0201 22.6133L21.5928 20.1729Z"
                  fill="#1EA2F3"
                />
              </Svg>
            ) : (
              <Svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M22.5585 12.6822L18.3304 16.9104L15.89 14.4701L20.1182 10.2419C20.575 9.79816 21.4884 9.98086 22.154 10.6595C22.8326 11.325 23.0153 12.2385 22.5585 12.6822ZM12.1186 14.9921C12.1186 14.9921 12.8424 14.1012 13.3061 13.5305C13.7195 13.9438 14.1164 14.3408 14.5 14.7243C18.3777 18.6021 20.8857 21.11 25.0641 25.2885L23.5112 26.3847C22.5846 27.3113 20.0791 27.8985 18.5261 27.8985H13.4627L11.8445 29.5167C11.0746 30.2867 9.83483 30.2867 9.07793 29.5167C8.89485 29.3358 8.7495 29.1205 8.65028 28.883C8.55108 28.6455 8.5 28.3907 8.5 28.1334C8.5 27.8761 8.55108 27.6213 8.65028 27.3838C8.7495 27.1463 8.89485 26.931 9.07793 26.7501L10.6961 25.1319V20.0685C10.6961 18.5939 11.2181 15.9056 12.1186 14.9921ZM21.5928 20.1729L25.821 15.9447C26.2647 15.488 27.1782 15.6707 27.8438 16.3493C28.5224 17.0148 28.7051 17.9283 28.2483 18.372L24.0201 22.6133L21.5928 20.1729Z"
                  fill="#BFE4FB"
                />
              </Svg>
            );
            return iconName;
          } else if (route.name === 'Trend') {
            iconName = focused ? (
              <Svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M23.669 10C27.07 10 28.99 11.929 29 15.33V24.67C29 28.07 27.07 30 23.669 30H14.33C10.929 30 9 28.07 9 24.67V15.33C9 11.929 10.929 10 14.33 10H23.669ZM19.5 14.13C19.219 13.96 18.879 13.96 18.61 14.13C18.339 14.299 18.19 14.61 18.219 14.92V25.11C18.27 25.54 18.629 25.86 19.049 25.86C19.48 25.86 19.839 25.54 19.879 25.11V14.92C19.919 14.61 19.77 14.299 19.5 14.13ZM14.83 17.41C14.56 17.24 14.219 17.24 13.95 17.41C13.679 17.58 13.53 17.889 13.56 18.2V25.11C13.599 25.54 13.959 25.86 14.389 25.86C14.82 25.86 15.179 25.54 15.219 25.11V18.2C15.25 17.889 15.099 17.58 14.83 17.41ZM24.089 21.04C23.82 20.87 23.48 20.87 23.2 21.04C22.929 21.21 22.78 21.509 22.82 21.83V25.11C22.86 25.54 23.219 25.86 23.65 25.86C24.07 25.86 24.429 25.54 24.48 25.11V21.83C24.509 21.509 24.36 21.21 24.089 21.04Z"
                  fill="#1EA2F3"
                />
              </Svg>
            ) : (
              <Svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M23.669 10C27.07 10 28.99 11.929 29 15.33V24.67C29 28.07 27.07 30 23.669 30H14.33C10.929 30 9 28.07 9 24.67V15.33C9 11.929 10.929 10 14.33 10H23.669ZM19.5 14.13C19.219 13.96 18.879 13.96 18.61 14.13C18.339 14.299 18.19 14.61 18.219 14.92V25.11C18.27 25.54 18.629 25.86 19.049 25.86C19.48 25.86 19.839 25.54 19.879 25.11V14.92C19.919 14.61 19.77 14.299 19.5 14.13ZM14.83 17.41C14.56 17.24 14.219 17.24 13.95 17.41C13.679 17.58 13.53 17.889 13.56 18.2V25.11C13.599 25.54 13.959 25.86 14.389 25.86C14.82 25.86 15.179 25.54 15.219 25.11V18.2C15.25 17.889 15.099 17.58 14.83 17.41ZM24.089 21.04C23.82 20.87 23.48 20.87 23.2 21.04C22.929 21.21 22.78 21.509 22.82 21.83V25.11C22.86 25.54 23.219 25.86 23.65 25.86C24.07 25.86 24.429 25.54 24.48 25.11V21.83C24.509 21.509 24.36 21.21 24.089 21.04Z"
                  fill="#BFE4FB"
                />
              </Svg>
            );
            return iconName;
          } else if (route.name === 'More') {
            iconName = focused ? (
              <Svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M13.92 21.4699C15.33 21.4699 16.46 22.6109 16.46 24.0309V27.44C16.46 28.85 15.33 30 13.92 30H10.54C9.13999 30 8 28.85 8 27.44V24.0309C8 22.6109 9.13999 21.4699 10.54 21.4699H13.92ZM25.46 21.4699C26.86 21.4699 28 22.6109 28 24.0309V27.44C28 28.85 26.86 30 25.46 30H22.08C20.67 30 19.54 28.85 19.54 27.44V24.0309C19.54 22.6109 20.67 21.4699 22.08 21.4699H25.46ZM13.92 10C15.33 10 16.46 11.15 16.46 12.561V15.9701C16.46 17.3901 15.33 18.5301 13.92 18.5301H10.54C9.13999 18.5301 8 17.3901 8 15.9701V12.561C8 11.15 9.13999 10 10.54 10H13.92ZM25.46 10C26.86 10 28 11.15 28 12.561V15.9701C28 17.3901 26.86 18.5301 25.46 18.5301H22.08C20.67 18.5301 19.54 17.3901 19.54 15.9701V12.561C19.54 11.15 20.67 10 22.08 10H25.46Z"
                  fill="#1EA2F3"
                />
              </Svg>
            ) : (
              <Svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M13.92 21.4699C15.33 21.4699 16.46 22.6109 16.46 24.0309V27.44C16.46 28.85 15.33 30 13.92 30H10.54C9.13999 30 8 28.85 8 27.44V24.0309C8 22.6109 9.13999 21.4699 10.54 21.4699H13.92ZM25.46 21.4699C26.86 21.4699 28 22.6109 28 24.0309V27.44C28 28.85 26.86 30 25.46 30H22.08C20.67 30 19.54 28.85 19.54 27.44V24.0309C19.54 22.6109 20.67 21.4699 22.08 21.4699H25.46ZM13.92 10C15.33 10 16.46 11.15 16.46 12.561V15.9701C16.46 17.3901 15.33 18.5301 13.92 18.5301H10.54C9.13999 18.5301 8 17.3901 8 15.9701V12.561C8 11.15 9.13999 10 10.54 10H13.92ZM25.46 10C26.86 10 28 11.15 28 12.561V15.9701C28 17.3901 26.86 18.5301 25.46 18.5301H22.08C20.67 18.5301 19.54 17.3901 19.54 15.9701V12.561C19.54 11.15 20.67 10 22.08 10H25.46Z"
                  fill="#BFE4FB"
                />
              </Svg>
            );
            return iconName;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1EA2F3',
        inactiveTintColor: '#BFE4FB',
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Device" component={DeviceScreens} />
      <Tab.Screen name="Trend" component={TrendScreens} />
      <Tab.Screen name="More" component={MoreScreens} />
    </Tab.Navigator>
  );
};

export default App;
