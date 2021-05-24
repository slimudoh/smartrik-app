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
import Svg, {Path} from 'react-native-svg';

import Skip from '../../components/Skip';

const IntroThree = (props): Node => {
  return (
    <View style={styles.introContainer}>
      <View style={styles.sliderContainer}>
        <View style={styles.imageContainer}>
          <Skip {...props} />
          <View style={styles.imageContainerImg}>
            <Svg
              width="176"
              height="27"
              viewBox="0 0 176 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.3041 4.52761C48.0638 4.52761 45.3096 5.85276 43.5815 8.11656C42.0693 5.74233 39.5311 4.52761 36.5609 4.52761C33.8067 4.52761 31.4305 5.52147 29.8644 7.39877V4.8589H23.9239V26.7239H30.1344V15.7362C30.1344 11.816 32.0785 9.99387 34.8328 9.99387C37.425 9.99387 38.8831 11.5951 38.8831 15.1288V26.6687H45.0936V15.7362C45.0936 11.816 47.0377 9.99387 49.846 9.99387C52.3302 9.99387 53.8963 11.5951 53.8963 15.1288V26.6687H60.1068V14.1902C60.0528 7.5092 56.4345 4.52761 51.3041 4.52761ZM168.493 26.7239H176L166.279 14.135L175.19 4.8589H167.791L158.773 13.638V0.0552147H152.562V26.7239H158.773V21.1472L161.743 18.1656L168.493 26.7239ZM141.599 26.7239H147.81V4.8589H141.599V26.7239ZM147.81 0.110429H141.599V3.25767H147.81V0.110429ZM130.528 7.73006V4.8589H124.588V26.7239H130.798V16.3988C130.798 12.2025 133.067 10.3252 136.469 10.3252C136.955 10.3252 137.333 10.3804 137.873 10.3804V4.52761C134.633 4.52761 132.04 5.6319 130.528 7.73006ZM119.511 21.1472C118.809 21.6994 117.891 21.9755 116.973 21.9755C115.299 21.9755 114.327 20.9816 114.327 19.1043V10.2147H119.62V5.30061H114.327V0H108.117V19.1595C108.117 24.3497 111.033 27 116.109 27C117.999 27 119.836 26.5583 121.132 25.6196L119.511 21.1472ZM97.2077 7.73006V4.8589H91.2673V26.7239H97.4777V16.3988C97.4777 12.2025 99.7459 10.3252 103.148 10.3252C103.634 10.3252 104.012 10.3804 104.552 10.3804V4.52761C101.258 4.52761 98.7198 5.6319 97.2077 7.73006ZM80.3584 4.8589V7.17791C78.7923 5.41104 76.5781 4.52761 73.9859 4.52761C67.9374 4.52761 63.293 8.88957 63.293 15.7914C63.293 22.638 67.9374 27.0552 73.9859 27.0552C76.8481 27.0552 79.1163 26.1166 80.6824 24.184V26.7239H86.6229V4.8589H80.3584ZM75.066 21.8098C71.9877 21.8098 69.5575 19.546 69.5575 15.7362C69.5575 11.9816 71.9337 9.66258 75.066 9.66258C78.1442 9.66258 80.5204 11.9264 80.5204 15.7362C80.4664 19.546 78.0902 21.8098 75.066 21.8098Z"
                fill="#182658"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99632 4.80368H17.4434C19.6576 4.80368 21.4397 6.62577 21.4397 8.88957V11.2638L11.1249 8.66871L11.6649 10.2699L2.64621 7.8957L17.4974 16.7301L16.7413 14.3006L21.4397 15.9018V22.638C21.4397 24.9018 19.6576 26.7239 17.4434 26.7239H3.99632C1.78214 26.7239 0 24.8466 0 22.638V20.2638L10.3148 22.8589L9.77478 21.2577L18.7935 23.5767L3.94231 14.7423L4.69837 17.1718L0 15.5706V8.88957C0 6.62577 1.78214 4.80368 3.99632 4.80368Z"
                fill="#EFA902"
              />
            </Svg>
          </View>
          <View style={styles.imageContainerPhone}>
            <Image
              source={require('../../assets/images/slider/three.png')}
              style={{height: 300}}
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
    </View>
  );
};

IntroThree.navigationOptions = navigationData => {
  console.log(navigationData);
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainerPhone: {
    marginTop: 20,
    justifyContent: 'flex-start',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnCover: {
    width: '100%',
    marginTop: 40,
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
