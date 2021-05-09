import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = (props): Node => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'padding'}>
        <View style={styles.authHeader}>
          <Text style={styles.authHeaderMainText}>Welcome Back</Text>
          <Text style={styles.authHeaderMainTextPara}>
            So good to have you back, Login to see what’s happening in your
            house
          </Text>
        </View>
        <View style={styles.authBody}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={() => console.log('Dashboard')}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.TextContainerFinger}>
            <Text style={styles.TextContainerFingerText}>
              Login with your Fingerprint
            </Text>
            <Image
              source={require('../assets/images/finger.png')}
              style={{width: 60, height: 60}}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.TextContainerBtnFb}>
            <Image
              source={require('../assets/images/fb.png')}
              style={{position: 'absolute', left: 0}}
              resizeMode={'center'}
            />
            <Text style={styles.TextContainerBtnFbText}>
              Login with facebook
            </Text>
          </View>
          <View style={styles.TextContainerSignup}>
            <Text style={styles.TextContainerSignupText}>
              Don’t have a Smartrik account?
              <Text style={{color: '#1EA2F3'}}> Sign Up now</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  authHeader: {
    width: '100%',
    backgroundColor: '#1EA2F3',
    borderBottomRightRadius: 33,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 21,
    paddingTop: 50,
  },
  authHeaderMainText: {
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'caros',
  },
  authHeaderMainTextPara: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'caros',
    marginTop: 20,
  },
  authBody: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  TextContainerBtnCover: {
    width: '100%',
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'caros',
  },
  TextContainerFinger: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerFingerText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    marginTop: 50,
    marginBottom: 20,
  },
  TextContainerBtnFb: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    borderRadius: 20,
    height: 58,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  TextContainerBtnFbText: {
    width: '100%',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  TextContainerSignup: {
    width: '100%',
    marginTop: 50,
  },
  TextContainerSignupText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
});

export default Login;
