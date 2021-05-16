import React, {useState, useRef} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
  Dimensions,
  Switch,
} from 'react-native';

const More = (props): Node => {
  const [fingerLogin, setFingerLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>More</Text>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.containerHeaderAction}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/home.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>My Home</Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage users, set tarrif & Monitor details
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('MyHome')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/notify.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              My Notification centre
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage your general notifications here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Notification')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/card.png')}
              style={{width: 22, height: 14}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>Card</Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage your card here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Card')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/help.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Help Centre
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Reach out to us from here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Help')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/about.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              About Smartrik Monitor
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Get more info about your monitor here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('About')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/about.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>Internet</Text>
            <Text style={styles.containerBodySectionTextPara}>
              Your connection setting
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Internet')}>
            <View style={styles.containerBodySectionArrow}>
              <Image
                source={require('../../assets/images/more/arrow.png')}
                style={{width: 28, height: 28}}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Image
              source={require('../../assets/images/more/theme.png')}
              style={{width: 18, height: 18}}
            />
          </View>
          <View style={styles.containerBodySwitchSectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Switch to Dark Mode
            </Text>
          </View>
          {/* <TouchableWithoutFeedback
            onPress={() => setFingerLogin(!fingerLogin)}>
            <View
              style={
                !fingerLogin
                  ? styles.TextContainerSwitchBtnLeft
                  : styles.TextContainerSwitchBtnRight
              }>
              <View
                style={
                  !fingerLogin
                    ? styles.TextContainerSwitchBtnBallLeft
                    : styles.TextContainerSwitchBtnBallRight
                }></View>
            </View>
          </TouchableWithoutFeedback> */}
          <View style={styles.TextContainerSwitchBtn}>
            <Switch
              trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
              thumbColor={fingerLogin ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              value={fingerLogin}
              onValueChange={newValue => setFingerLogin(newValue)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

More.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  containerHeader: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'rgba(37, 47, 65, 0.1)',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  containerHeaderTitle: {
    paddingTop: 5,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
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
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
  },
  containerBodySection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  containerBodySectionIcon: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBodySectionArrow: {
    width: 30,
  },
  containerBodySectionText: {
    width: Dimensions.get('window').width - 82,
    paddingLeft: 10,
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
    fontFamily: 'caros_medium',
  },
  containerBodySectionTextPara: {
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'left',
    color: '#969696',
    fontFamily: 'caros',
    paddingTop: 5,
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

export default More;
