import React from 'react';
import type {Node} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import Skip from '../components/Skip';

const IntroThree = (props): Node => {
  return (
    <ScrollView contentContainerStyle={styles.introContainer}>
      <View style={styles.sliderContainer}>
        <View style={styles.imageContainer}>
          <Skip {...props} />
          <View style={styles.imageContainerImg}>
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: '100%', height: 26}}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.imageContainerPhone}>
            <Image
              source={require('../assets/images/slider/three.png')}
              style={{maxWidth: 341}}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.TextContainerParagraph}>
            Track your daily, weekly, monthly, yearly energy consumption
          </Text>
          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={() => props.navigation.navigate('Signup')}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Get Started</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.TextContainerSignin}>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.TextContainerSigninText}>Sign In Now</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.TextContainerDots}>
            <View style={styles.TextContainerDotsChild}></View>
            <View style={styles.TextContainerDotsChild}></View>
            <View style={styles.TextContainerDotsChildSelected}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sliderContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').height - 350,
    backgroundColor: '#B6E1FB',
    padding: 16,
    overflow: 'hidden',
  },
  imageContainerSkip: {
    width: '100%',
  },
  imageContainerSkipText: {
    width: '100%',
    textAlign: 'right',
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
    margin: 'auto',
  },
  imageContainerImg: {
    marginTop: 10,
  },
  imageContainerPhone: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  TextContainer: {
    width: '100%',
    height: 350,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  TextContainerParagraph: {
    maxWidth: 295,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: '#252F41',
    margin: 'auto',
    fontFamily: 'caros',
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnCover: {
    width: '100%',
  },
  TextContainerSignin: {
    marginTop: 20,
  },
  TextContainerSigninText: {
    fontFamily: 'caros',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
  },
  TextContainerBtnText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'caros',
  },
  TextContainerDots: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  TextContainerDotsChildSelected: {
    width: 23,
    height: 4,
    backgroundColor: '#1EA2F3',
    borderRadius: 10,
  },
  TextContainerDotsChild: {
    width: 23,
    height: 4,
    backgroundColor: '#BFBFBF',
    borderRadius: 10,
  },
});

export default IntroThree;
