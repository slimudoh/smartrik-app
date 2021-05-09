import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Signup = (props): Node => {
  console.log(props);
  return (
   // <StatusBar />
   <ScrollView>
   <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
     <View>
       <Text>screen</Text>
     </View>
   </KeyboardAvoidingView>
 </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Signup;
