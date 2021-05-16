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
  Switch,
} from 'react-native';

const Internet = (props): Node => {
  const [wifi, setWifi] = useState(false);
  const [ethernet, setEthernet] = useState(true);

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
        <Text style={styles.containerHeaderTitle}>Internet</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.TextContainerSwitch}>
          <View style={styles.TextContainerSwitchText}>
            <Text style={styles.TextContainerSwitchTextStyle}>Wifi</Text>
          </View>

          {/* <TouchableWithoutFeedback onPress={() => setWifi(!wifi)}>
            <View
              style={
                !wifi
                  ? styles.TextContainerSwitchBtnLeft
                  : styles.TextContainerSwitchBtnRight
              }>
              <View
                style={
                  !wifi
                    ? styles.TextContainerSwitchBtnBallLeft
                    : styles.TextContainerSwitchBtnBallRight
                }></View>
            </View>
          </TouchableWithoutFeedback> */}
          <View style={styles.TextContainerSwitchBtn}>
            <Switch
              trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
              thumbColor={wifi ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              value={wifi}
              onValueChange={newValue => setWifi(newValue)}
            />
          </View>
        </View>

        <View style={styles.TextContainerSwitch}>
          <View style={styles.TextContainerSwitchText}>
            <Text style={styles.TextContainerSwitchTextStyle}>Ethernet</Text>
          </View>

          {/* <TouchableWithoutFeedback onPress={() => setEthernet(!ethernet)}>
            <View
              style={
                !ethernet
                  ? styles.TextContainerSwitchBtnLeft
                  : styles.TextContainerSwitchBtnRight
              }>
              <View
                style={
                  !ethernet
                    ? styles.TextContainerSwitchBtnBallLeft
                    : styles.TextContainerSwitchBtnBallRight
                }></View>
            </View>
          </TouchableWithoutFeedback> */}
          <View style={styles.TextContainerSwitchBtn}>
            <Switch
              trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
              thumbColor={ethernet ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              value={ethernet}
              onValueChange={newValue => setEthernet(newValue)}
            />
          </View>
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

  TextContainerSwitch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
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

export default Internet;
