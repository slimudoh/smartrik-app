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
} from 'react-native';

import Skip from '../../components/Skip';

const IntroOne = (props): Node => {
  return (
    <View style={styles.introContainer}>
      <View style={styles.sliderContainer}>
        <View style={styles.imageContainer}>
          <Skip {...props} />
          <View style={styles.imageContainerImg}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width: '100%', height: 26}}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.imageContainerPhone}>
            <Image
              source={require('../../assets/images/slider/one.png')}
              style={{height: 400}}
              resizeMode={'contain'}
            />
          </View>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.TextContainerParagraph}>
            See how much electricity you are using and the cost in real time
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('IntroTwo')}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Next</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.TextContainerDots}>
            <View style={styles.TextContainerDotsChildSelected}></View>
            <View style={styles.TextContainerDotsChild}></View>
            <View style={styles.TextContainerDotsChild}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

IntroOne.navigationOptions = navigationData => {
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
    backgroundColor: '#FEEFCD',
    padding: 16,
    overflow: 'hidden',
  },
  imageContainerSkip: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageContainerSkipBtn: {
    width: 40,
  },
  imageContainerSkipText: {
    width: 40,
    textAlign: 'right',
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
  },
  imageContainerImg: {
    marginTop: 10,
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextContainerParagraph: {
    maxWidth: 295,
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    marginBottom: 70,
  },
  TextContainerBtn: {
    width: 106,
    height: 43,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  TextContainerDots: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
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

export default IntroOne;
