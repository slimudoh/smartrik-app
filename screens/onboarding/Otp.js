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
} from 'react-native';

import Signup from '../../components/Modal/Signup';

const Otp = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authHeader}>
        <Text style={styles.authHeaderMainText}>Welcome to Smartrik</Text>
        <Text style={styles.authHeaderMainTextPara}>
          Sign up to start getting insight about your electricity usage in the
          house
        </Text>
      </View>
      <View style={styles.authBody}>
        <Text style={styles.authHeaderMainTextLabel}>
          Enter the code sent here
        </Text>
        <View style={styles.inputGrid}>
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>

        {/* <Text style={styles.TextContainerSuccessLog}>
          Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}

        <View style={styles.TextContainerSignup}>
          <Text style={styles.TextContainerSignupText}>
            Didn’t receive any code?
            <TouchableWithoutFeedback onPress={() => console.log('request ')}>
              <Text style={{color: '#1EA2F3'}}> Request again</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.TextContainerBtnCover}
          onPress={() => setModalVisible(true)}>
          <View style={styles.TextContainerBtn}>
            <Text style={styles.TextContainerBtnText}>Verify</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.TextContainerKeyboard}>
        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>1</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>2</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>3</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>4</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>5</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>6</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>7</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>8</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>9</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}></Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Text style={styles.TextContainerKeyboardBtnText}>0</Text>
        </View>

        <View style={styles.TextContainerKeyboardBtn}>
          <Image
            source={require('../../assets/images/key.png')}
            style={{width: 30}}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <Signup showModal={modalVisible} navigation={props.navigation} />
    </ScrollView>
  );
};

Otp.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  TextContainerKeyboard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E5F5FF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextContainerKeyboardBtn: {
    width: '30%',
    height: 50,
    maxWidth: 83,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 15,
  },
  TextContainerKeyboardBtnText: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#252F41',
    fontFamily: 'caros_bold',
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
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputGrid: {
    width: '100%',
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '20%',
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
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
  authHeaderMainTextLabel: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  TextContainerSignup: {
    width: '100%',
    marginTop: 30,
    marginBottom: 20,
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

export default Otp;
