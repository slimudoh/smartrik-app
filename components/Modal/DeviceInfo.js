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
} from 'react-native';

const DeviceInfo = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const [device, setDevice] = useState('info');

  const [timeline, setTimeline] = useState(false);
  const [notifyOff, setNotifyOff] = useState(true);
  const [notifyOn, setNotifyOn] = useState(true);

  useEffect(() => {
    setModalVisible(props.showModal);
  }, [props.showModal]);

  const closeModalFromParent = () => {
    props.onpress();
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerClose}>
            <TouchableWithoutFeedback onPress={closeModalFromParent}>
              <Text style={styles.modalContainerCloseText}>
                <Image
                  source={require('../../assets/images/devices/close.png')}
                  style={{width: 8, height: 8}}
                  resizeMode={'cover'}
                />{' '}
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
                <Text style={styles.containerCardFormLabel}>Device Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Fridge"
                  placeholderTextColor="#252F41"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.modalContainerInfoInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Brand"
                  placeholderTextColor="#252F41"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.modalContainerInfoInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Model"
                  placeholderTextColor="#252F41"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.modalContainerInfoInput}>
                <Text style={styles.containerCardFormLabel}>
                  Location of device in the building
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Kitchen"
                  placeholderTextColor="#252F41"
                  keyboardType="numeric"
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
                      onPress={() => props.navigation.navigate('DeviceNotify')}>
                      <View style={styles.TextContainerSwitchBtnIcon}>
                        <Text style={styles.TextContainerSwitchBtnIconText}>
                          +
                        </Text>
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
                        <Image
                          source={require('../../assets/images/devices/delete.png')}
                          style={{width: 12, height: 13}}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
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
    marginBottom: 37,
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
    marginBottom: 50,
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
    width: 28,
    height: 28,
    borderRadius: 60,
    backgroundColor: 'rgba(30, 162, 243, 0.25)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerSwitchBtnIconText: {
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 20,
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
});

export default DeviceInfo;
