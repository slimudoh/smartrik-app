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

const Theme = (props): Node => {
  return (
    <View style={styles.setupContainer}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Setup')}>
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
        <Text style={styles.setupContainerBodyText}>Choose a theme</Text>
        <Text style={styles.setupContainerBodyPara}>Dark Mode</Text>
        <View style={styles.setupContainerBodyParaImage}>
          <Image
            source={require('../../assets/images/switch.png')}
            resizeMode={'contain'}
            style={{width: 93, height: 150}}
          />
        </View>
        <Text style={styles.setupContainerBodyPara}>Light Mode</Text>
        <TouchableOpacity
          style={styles.setupContainerBodyBtnCover}
          onPress={() => props.navigation.navigate('Login')}>
          <View style={styles.setupContainerBodyBtn}>
            <Text style={styles.setupContainerBodyBtnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Theme.navigationOptions = navigationData => {
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
    fontSize: 18,
    lineHeight: 36,
    textAlign: 'center',
    color: '#252F41',
    margin: 'auto',
    fontFamily: 'caros',
  },
  setupContainerBodyParaImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  setupContainerBodyBtnCover: {
    width: '100%',
    marginTop: 70,
  },
  setupContainerBodyBtn: {
    width: '100%',
    height: 58,
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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

export default Theme;
