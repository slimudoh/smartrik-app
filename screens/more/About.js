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

const Internet = (props): Node => {
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
        <Text style={styles.containerHeaderTitle}>About Smartirk</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodyLogo}>
          <Svg
            width="326"
            height="49"
            viewBox="0 0 326 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M95 8.2C89 8.2 83.9 10.6 80.7 14.7C77.9 10.4 73.2 8.2 67.7 8.2C62.6 8.2 58.2 10 55.3 13.4V8.8H44.3V48.4H55.8V28.5C55.8 21.4 59.4 18.1 64.5 18.1C69.3 18.1 72 21 72 27.4V48.3H83.5V28.5C83.5 21.4 87.1 18.1 92.3 18.1C96.9 18.1 99.8 21 99.8 27.4V48.3H111.3V25.7C111.2 13.6 104.5 8.2 95 8.2ZM312 48.4H325.9L307.9 25.6L324.4 8.8H310.7L294 24.7V0.1H282.5V48.4H294V38.3L299.5 32.9L312 48.4ZM262.2 48.4H273.7V8.8H262.2V48.4ZM273.7 0.2H262.2V5.9H273.7V0.2ZM241.7 14V8.8H230.7V48.4H242.2V29.7C242.2 22.1 246.4 18.7 252.7 18.7C253.6 18.7 254.3 18.8 255.3 18.8V8.2C249.3 8.2 244.5 10.2 241.7 14ZM221.3 38.3C220 39.3 218.3 39.8 216.6 39.8C213.5 39.8 211.7 38 211.7 34.6V18.5H221.5V9.6H211.7V0H200.2V34.7C200.2 44.1 205.6 48.9 215 48.9C218.5 48.9 221.9 48.1 224.3 46.4L221.3 38.3ZM180 14V8.8H169V48.4H180.5V29.7C180.5 22.1 184.7 18.7 191 18.7C191.9 18.7 192.6 18.8 193.6 18.8V8.2C187.5 8.2 182.8 10.2 180 14ZM148.8 8.8V13C145.9 9.8 141.8 8.2 137 8.2C125.8 8.2 117.2 16.1 117.2 28.6C117.2 41 125.8 49 137 49C142.3 49 146.5 47.3 149.4 43.8V48.4H160.4V8.8H148.8ZM139 39.5C133.3 39.5 128.8 35.4 128.8 28.5C128.8 21.7 133.2 17.5 139 17.5C144.7 17.5 149.1 21.6 149.1 28.5C149 35.4 144.6 39.5 139 39.5Z"
              fill="#182658"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.4 8.69922H32.3C36.4 8.69922 39.7 11.9992 39.7 16.0992V20.3992L20.6 15.6992L21.6 18.5992L4.9 14.2992L32.4 30.2992L31 25.8992L39.7 28.7992V40.9992C39.7 45.0992 36.4 48.3992 32.3 48.3992H7.4C3.3 48.3992 0 44.9992 0 40.9992V36.6992L19.1 41.3992L18.1 38.4992L34.8 42.6992L7.3 26.6992L8.7 31.0992L0 28.1992V16.0992C0 11.9992 3.3 8.69922 7.4 8.69922Z"
              fill="#EFA902"
            />
          </Svg>

          <Text style={styles.containerBodyRight}>
            © 2021 Smartrik Technology
          </Text>
          <Text style={styles.containerBodyMark}>
            Smartrik is a registered trademark of Smartrik
          </Text>
        </View>
        <View style={styles.containerBodyDetailsFullSection}>
          <Text style={styles.containerBodyDetailsFullSectionKey}>Version</Text>
          <Text style={styles.containerBodyDetailsFullSectionValue}>2.1.3</Text>
        </View>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Terms of use
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Terms')}>
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
              Privacy Policy
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Policy')}>
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

Internet.navigationOptions = navigationData => {
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
    width: '50%',
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#787878',
  },
  containerBodyDetailsFullSectionValue: {
    width: '50%',
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
    width: 25,
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

export default Internet;
