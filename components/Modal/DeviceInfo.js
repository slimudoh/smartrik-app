import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';
import FloatLabel from '../../components/FloatLabel';

const DeviceInfo = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const [device, setDevice] = useState('info');

  const [timeline, setTimeline] = useState(false);
  const [notifyOff, setNotifyOff] = useState(true);
  const [notifyOn, setNotifyOn] = useState(true);

  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setModalVisible(props.showModal);
  }, [props.showModal]);

  const closeModalFromParent = () => {
    props.onpress();
  };

  const handleName = val => {
    setName(val);
  };
  const handleBrand = val => {
    setBrand(val);
  };
  const handleModel = val => {
    setModel(val);
  };
  const handleLocation = val => {
    setLocation(val);
  };

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.modalContainerClose}>
              <TouchableWithoutFeedback onPress={closeModalFromParent}>
                <Text style={styles.modalContainerCloseText}>
                  <Svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M1 1.44141L9 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <Path
                      d="M9 1.44141L1 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </Svg>{' '}
                  Close
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.modalContainerNav}>
              <TouchableWithoutFeedback onPress={() => setDevice('info')}>
                <View
                  style={
                    device === 'info'
                      ? styles.modalContainerNavBarSelect
                      : styles.modalContainerNavBar
                  }>
                  <Text
                    style={
                      device === 'info'
                        ? styles.modalContainerNavBarTextSelect
                        : styles.modalContainerNavBarText
                    }>
                    Device Info
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setDevice('manage')}>
                <View
                  style={
                    device === 'manage'
                      ? styles.modalContainerNavBarSelect
                      : styles.modalContainerNavBar
                  }>
                  <Text
                    style={
                      device === 'manage'
                        ? styles.modalContainerNavBarTextSelect
                        : styles.modalContainerNavBarText
                    }>
                    Manage Device
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            {device === 'info' ? (
              <View style={styles.modalContainerInfo}>
                <View style={styles.modalContainerInfoInput}>
                  <FloatLabel
                    label="Device Name"
                    value={name}
                    onchange={handleName}
                    keyboardType={'default'}
                  />
                </View>

                <View style={styles.modalContainerInfoInput}>
                  <FloatLabel
                    label="Brand"
                    value={brand}
                    onchange={handleBrand}
                    keyboardType={'default'}
                  />
                </View>

                <View style={styles.modalContainerInfoInput}>
                  <FloatLabel
                    label="Model"
                    value={model}
                    onchange={handleModel}
                    keyboardType={'default'}
                  />
                </View>

                <View style={styles.modalContainerInfoInput}>
                  <FloatLabel
                    label="Location of device in the building"
                    value={location}
                    onchange={handleLocation}
                    keyboardType={'default'}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.modalContainerManage}>
                <View style={styles.containerBodyDetailsFull}>
                  <View style={styles.TextContainerSwitch}>
                    <View style={styles.TextContainerSwitchText}>
                      <Text style={styles.TextContainerSwitchTextStyle}>
                        Show Device on timeline
                      </Text>
                    </View>

                    <View style={styles.TextContainerSwitchBtn}>
                      <Switch
                        trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                        thumbColor={'#fff'}
                        ios_backgroundColor="#3e3e3e"
                        value={timeline}
                        onValueChange={newValue => setTimeline(newValue)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.containerBodyDetailsFull}>
                  <Text style={styles.containerBodyDetailsFullHead}>
                    Notifications
                  </Text>
                  <View style={styles.TextContainerSwitch}>
                    <View style={styles.TextContainerSwitchText}>
                      <Text style={styles.TextContainerSwitchTextStyle}>
                        Let me know when it turns off
                      </Text>
                    </View>

                    <View style={styles.TextContainerSwitchBtn}>
                      <Switch
                        trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                        thumbColor={'#fff'}
                        ios_backgroundColor="#3e3e3e"
                        value={notifyOff}
                        onValueChange={newValue => setNotifyOff(newValue)}
                      />
                    </View>
                  </View>

                  <View style={styles.TextContainerSwitch}>
                    <View style={styles.TextContainerSwitchText}>
                      <Text style={styles.TextContainerSwitchTextStyle}>
                        Let me know when it turns on
                      </Text>
                    </View>

                    <View style={styles.TextContainerSwitchBtn}>
                      <Switch
                        trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
                        thumbColor={'#fff'}
                        ios_backgroundColor="#3e3e3e"
                        value={notifyOn}
                        onValueChange={newValue => setNotifyOn(newValue)}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.containerBodyDetailsFull}>
                  <Text style={styles.containerBodyDetailsFullHead}>
                    Custom Notification
                  </Text>
                  <View style={styles.TextContainerSwitch}>
                    <View style={styles.TextContainerSwitchText}>
                      <Text style={styles.TextContainerSwitchTextStyle}>
                        Create a custom notification
                      </Text>
                    </View>

                    <View style={styles.TextContainerSwitchBtn}>
                      <TouchableWithoutFeedback
                        onPress={() =>
                          props.navigation.navigate('DeviceNotify')
                        }>
                        <View style={styles.TextContainerSwitchBtnIcon}>
                          <Svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <Path
                              d="M2.34302 8H13.6567"
                              stroke="#1EA2F3"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            <Path
                              d="M7.99976 2.34277V13.6565"
                              stroke="#1EA2F3"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </Svg>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </View>

                <View style={styles.containerBodyDetailsFull}>
                  <View style={styles.TextContainerSwitch}>
                    <View style={styles.TextContainerSwitchText}>
                      <Text style={styles.TextContainerSwitchTextStyle}>
                        Delete Device
                      </Text>
                    </View>

                    <View style={styles.TextContainerSwitchBtn}>
                      <TouchableWithoutFeedback
                        onPress={() => console.log('delete')}>
                        <View style={styles.TextContainerSwitchBtnIcon}>
                          <Svg
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <Path
                              d="M10.626 5.37491C10.759 5.37491 10.8796 5.43291 10.9749 5.53091C11.0637 5.63558 11.1084 5.76557 11.0955 5.90291C11.0955 5.94824 10.7402 10.4415 10.5372 12.3328C10.4101 13.4935 9.66192 14.1982 8.53959 14.2175C7.67662 14.2368 6.83309 14.2435 6.00253 14.2435C5.12075 14.2435 4.25842 14.2368 3.42137 14.2175C2.33665 14.1915 1.58779 13.4742 1.46719 12.3328C1.25842 10.4349 0.909596 5.94824 0.903112 5.90291C0.896628 5.76557 0.940718 5.63558 1.03019 5.53091C1.11837 5.43291 1.24545 5.37491 1.37901 5.37491H10.626ZM7.37649 0.910156C7.96585 0.910156 8.49233 1.32149 8.64469 1.90815L8.75362 2.39481C8.8418 2.79147 9.18543 3.07213 9.58094 3.07213H11.5247C11.7841 3.07213 12 3.28747 12 3.56146V3.81479C12 4.08212 11.7841 4.30412 11.5247 4.30412H0.475902C0.215907 4.30412 0 4.08212 0 3.81479V3.56146C0 3.28747 0.215907 3.07213 0.475902 3.07213H2.41971C2.81457 3.07213 3.1582 2.79147 3.24703 2.39547L3.34882 1.94081C3.50702 1.32149 4.02766 0.910156 4.62351 0.910156H7.37649Z"
                              fill="#1EA2F3"
                            />
                          </Svg>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  modalContainerClose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainerCloseText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerNav: {
    marginTop: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 162, 243, 0.12)',
    borderRadius: 8,
    // marginBottom: 10,
  },

  modalContainerNavBar: {
    width: '50%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerNavBarSelect: {
    width: '50%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1EA2F3',
    borderRadius: 7,
  },
  modalContainerNavBarText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'right',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerNavBarTextSelect: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'right',
    color: '#ffffff',
    fontFamily: 'caros',
  },
  modalContainerInfo: {
    marginTop: 40,
  },
  modalContainerInfoInput: {
    marginBottom: 20,
  },
  containerCardFormLabel: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 13,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerManage: {
    marginTop: 37,
  },
  containerBodyDetailsFull: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 20,
    marginBottom: 15,
  },

  containerBodyDetailsFullHead: {
    fontStyle: 'normal',
    fontSize: 18,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
    paddingTop: 20,
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
    width: 250,
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
  TextContainerSwitchBtnIcon: {
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: 'rgba(30, 162, 243, 0.25)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerSwitchBtnIconText: {
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 25,
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
});

export default DeviceInfo;
