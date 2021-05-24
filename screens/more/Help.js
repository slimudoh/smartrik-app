import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';

const Help = (props): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('More')}>
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
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>Help</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              App Walkthrough
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => console.log('hello')}>
            <View style={styles.containerBodySectionArrow}>
              <Svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle
                  cx="14"
                  cy="14"
                  r="14"
                  fill="#1EA2F3"
                  fillOpacity="0.25"
                />
                <Path
                  d="M12 10L16 14L12 18"
                  stroke="#1EA2F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Chat with the customer service
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => console.log('hello')}>
            <View style={styles.containerBodySectionArrow}>
              <Svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle
                  cx="14"
                  cy="14"
                  r="14"
                  fill="#1EA2F3"
                  fillOpacity="0.25"
                />
                <Path
                  d="M12 10L16 14L12 18"
                  stroke="#1EA2F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Frequently Ask Questions
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => console.log('hello')}>
            <View style={styles.containerBodySectionArrow}>
              <Svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle
                  cx="14"
                  cy="14"
                  r="14"
                  fill="#1EA2F3"
                  fillOpacity="0.25"
                />
                <Path
                  d="M12 10L16 14L12 18"
                  stroke="#1EA2F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

Help.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },

  setupContainerHeader: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
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
  containerHeader: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'rgba(37, 47, 65, 0.1)',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  containerHeaderTitle: {
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    paddingTop: 5,
  },
  containerHeaderAction: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#F31E1E',
    fontFamily: 'caros',
  },
  containerBody: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerBodyLogo: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  containerBodyRight: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros_medium',
    marginTop: 50,
  },
  containerBodyMark: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#787878',
    fontFamily: 'caros_medium',
    marginTop: 5,
  },
  containerBodyDetailsFullSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 100,
  },
  containerBodyDetailsFullSectionKey: {
    width: 150,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#787878',
  },
  containerBodyDetailsFullSectionValue: {
    width: 190,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
    textAlign: 'right',
  },
  containerBodySection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  containerBodySectionArrow: {
    width: 30,
  },
  containerBodySectionText: {
    width: Dimensions.get('window').width - 62,
    paddingRight: 10,
  },
  containerBodySwitchSectionText: {
    width: Dimensions.get('window').width - 112,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerBodySectionTextTitle: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
});

export default Help;
