import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Setup = (props): Node => {
  return (
    <View style={styles.setupContainer}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('IntroOne')}>
          <Text style={styles.setupContainerHeaderText}>
            <Image
              source={require('../../assets/images/back.png')}
              style={{width: 8, height: 16, marginRight: 50}}
              resizeMode={'cover'}
            />{' '}
            Go Back
          </Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.setupContainerBody}>
        <Text style={styles.setupContainerBodyText}>
          Setup your Smartrik Monitor
        </Text>
        <Text style={styles.setupContainerBodyPara}>
          If you’ve already read the installation instruction and installed your
          Smartrik monitor, please continue.
        </Text>
        <Text style={styles.setupContainerBodyPara}>
          if not, please check the installation instructions to make sure that
          you setup correctly before you continue.
        </Text>
        <TouchableOpacity
          style={styles.setupContainerBodyBtnCover}
          onPress={() => props.navigation.navigate('Theme')}>
          <View style={styles.setupContainerBodyBtn}>
            <Text style={styles.setupContainerBodyBtnText}>Continue</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.TextContainerInstall}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Theme')}>
            <Text style={styles.TextContainerInstallText}>
              Installation Instruction
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

Setup.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  setupContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  setupContainerHeader: {
    width: '100%',
  },
  setupContainerHeaderText: {
    width: 100,
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
  },
  setupContainerBody: {
    width: '100%',
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  setupContainerBodyText: {
    maxWidth: 241,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros_medium',
    marginBottom: 77,
  },
  setupContainerBodyPara: {
    maxWidth: 288,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    margin: 'auto',
    fontFamily: 'caros',
    marginBottom: 30,
  },
  setupContainerBodyBtnCover: {
    width: '100%',
  },
  setupContainerBodyBtn: {
    width: '100%',
    height: 58,
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  setupContainerBodyBtnText: {
    fontFamily: 'caros',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  TextContainerInstall: {
    marginTop: 20,
  },
  TextContainerInstallText: {
    fontFamily: 'caros',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
  },
});

export default Setup;
