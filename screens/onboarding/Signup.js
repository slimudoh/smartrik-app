import React, {useState} from 'react';
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
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Switch,
} from 'react-native';
import FloatLabel from '../../components/FloatLabel';

const Signup = (props): Node => {
  const [fingerLogin, setFingerLogin] = useState(false);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const handleName = val => {
    setName(val);
  };
  const handlePhone = val => {
    setPhone(val);
  };
  const handleEmail = val => {
    setEmail(val);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <View style={styles.authHeader}>
          <Text style={styles.authHeaderMainText}>Welcome to Smartrik 👋</Text>
          <Text style={styles.authHeaderMainTextPara}>
            Sign up so you can start getting more insight about your electricity
            usage
          </Text>
        </View>
        <View style={styles.authBody}>
          <FloatLabel
            label="Your Name"
            value={name}
            onchange={handleName}
            keyboardType={'default'}
          />
          {/* <Text style={styles.TextContainerSuccessLog}>
            Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}

          <FloatLabel
            label="Active Phone Number"
            value={phone}
            onchange={handlePhone}
            keyboardType={'numeric'}
          />
          {/* <Text style={styles.TextContainerSuccessLog}>
            Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}

          <FloatLabel
            label="Email Address"
            value={email}
            onchange={handleEmail}
            keyboardType={'email-address'}
          />
          {/* <Text style={styles.TextContainerSuccessLog}>
            Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}

          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={() => props.navigation.navigate('Code')}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Sign Up</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Login with your fingerprint/face recognition
              </Text>
            </View>

            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={fingerLogin}
                onValueChange={newValue => setFingerLogin(newValue)}
              />
            </View>
          </View>
        </View>
        <View style={styles.TextContainerSignup}>
          <Text style={styles.TextContainerSignupText}>
            Do you have a Smartrik account?
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: '#1EA2F3'}}> Login now</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

Signup.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TextContainerSignup: {
    width: '100%',
    marginTop: Dimensions.get('window').height > 800 ? 133 : 30,
  },
  TextContainerSignupText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
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
    paddingTop: Dimensions.get('window').height > 800 ? 117 : 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
    marginBottom: 30,
  },
  TextContainerBtnCover: {
    width: '100%',
    marginTop: Dimensions.get('window').height > 800 ? 50 : 20,
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
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
  TextContainerSuccessLog: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  TextContainerErrorLog: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#FB4E4E',
    fontFamily: 'caros',
  },
  TextContainerSwitch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height > 800 ? 58 : 50,
  },
  TextContainerSwitchText: {
    width: Dimensions.get('window').width - 100,
  },
  TextContainerSwitchTextStyle: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  TextContainerSwitchBtn: {
    width: 51,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  TextContainerSwitchBtnLeft: {
    position: 'relative',
    width: 51,
    height: 32,
    backgroundColor: '#BFBFBF',
    borderRadius: 60,
  },
  TextContainerSwitchBtnRight: {
    position: 'relative',
    width: 51,
    height: 32,
    backgroundColor: '#1EA2F3',
    borderRadius: 60,
  },
  TextContainerSwitchBtnBallLeft: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 27,
    height: 27,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  TextContainerSwitchBtnBallRight: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 27,
    height: 27,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Signup;
