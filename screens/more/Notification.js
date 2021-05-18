import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Switch,
} from 'react-native';

const Notification = (props): Node => {
  const [devicePush, setDevicePush] = useState(false);
  const [deviceEmail, setDeviceEmail] = useState(true);
  const [monitorPush, setMonitorPush] = useState(false);
  const [monitorEmail, setMonitorEmail] = useState(true);
  const [monthly, setMonthly] = useState(true);

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
        <Text style={styles.containerHeaderTitle}>Notification Centre</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodyDetailsFull}>
          <Text style={styles.containerBodyDetailsFullHead}>
            Device Detection
          </Text>

          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Send push notification
              </Text>
            </View>

            {/* <TouchableWithoutFeedback
              onPress={() => setDevicePush(!devicePush)}>
              <View
                style={
                  !devicePush
                    ? styles.TextContainerSwitchBtnLeft
                    : styles.TextContainerSwitchBtnRight
                }>
                <View
                  style={
                    !devicePush
                      ? styles.TextContainerSwitchBtnBallLeft
                      : styles.TextContainerSwitchBtnBallRight
                  }></View>
              </View>
            </TouchableWithoutFeedback> */}
            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={devicePush}
                onValueChange={newValue => setDevicePush(newValue)}
              />
            </View>
          </View>

          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Send email notification
              </Text>
            </View>

            {/* <TouchableWithoutFeedback
              onPress={() => setDeviceEmail(!deviceEmail)}>
              <View
                style={
                  !deviceEmail
                    ? styles.TextContainerSwitchBtnLeft
                    : styles.TextContainerSwitchBtnRight
                }>
                <View
                  style={
                    !deviceEmail
                      ? styles.TextContainerSwitchBtnBallLeft
                      : styles.TextContainerSwitchBtnBallRight
                  }></View>
              </View>
            </TouchableWithoutFeedback> */}
            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={deviceEmail}
                onValueChange={newValue => setDeviceEmail(newValue)}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerBodyDetailsFull}>
          <Text style={styles.containerBodyDetailsFullHead}>
            If monitor goes off
          </Text>

          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Send push notification
              </Text>
            </View>

            {/* <TouchableWithoutFeedback
              onPress={() => setMonitorPush(!monitorPush)}>
              <View
                style={
                  !monitorPush
                    ? styles.TextContainerSwitchBtnLeft
                    : styles.TextContainerSwitchBtnRight
                }>
                <View
                  style={
                    !monitorPush
                      ? styles.TextContainerSwitchBtnBallLeft
                      : styles.TextContainerSwitchBtnBallRight
                  }></View>
              </View>
            </TouchableWithoutFeedback> */}
            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={monitorPush}
                onValueChange={newValue => setMonitorPush(newValue)}
              />
            </View>
          </View>

          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Send email notification
              </Text>
            </View>

            {/* <TouchableWithoutFeedback
              onPress={() => setMonitorEmail(!monitorEmail)}>
              <View
                style={
                  !monitorEmail
                    ? styles.TextContainerSwitchBtnLeft
                    : styles.TextContainerSwitchBtnRight
                }>
                <View
                  style={
                    !monitorEmail
                      ? styles.TextContainerSwitchBtnBallLeft
                      : styles.TextContainerSwitchBtnBallRight
                  }></View>
              </View>
            </TouchableWithoutFeedback> */}
            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={monitorEmail}
                onValueChange={newValue => setMonitorEmail(newValue)}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerBodyDetailsFull}>
          <View style={styles.TextContainerSwitch}>
            <View style={styles.TextContainerSwitchText}>
              <Text style={styles.TextContainerSwitchTextStyle}>
                Send monthly report
              </Text>
            </View>

            {/* <TouchableWithoutFeedback onPress={() => setMonthly(!monthly)}>
              <View
                style={
                  !monthly
                    ? styles.TextContainerSwitchBtnLeft
                    : styles.TextContainerSwitchBtnRight
                }>
                <View
                  style={
                    !monthly
                      ? styles.TextContainerSwitchBtnBallLeft
                      : styles.TextContainerSwitchBtnBallRight
                  }></View>
              </View>
            </TouchableWithoutFeedback> */}
            <View style={styles.TextContainerSwitchBtn}>
              <Switch
                trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                thumbColor={'#fff'}
                ios_backgroundColor="#3e3e3e"
                value={monthly}
                onValueChange={newValue => setMonthly(newValue)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Notification.navigationOptions = navigationData => {
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
    paddingBottom: 100,
  },

  containerBodyDetailsFull: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 15,
  },

  containerBodyDetailsFullHead: {
    fontStyle: 'normal',
    fontSize: 18,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
  },
  containerBodyDetailsFullSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },

  TextContainerSwitch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  TextContainerSwitchText: {
    width: 190,
  },
  TextContainerSwitchTextStyle: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
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

export default Notification;
