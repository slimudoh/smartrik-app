import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const DeviceOn = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deviceStatusLeftNav, setDeviceStatusLeftNav] = useState(false);
  const [deviceStatusRightNav, setDeviceStatusRightNav] = useState(false);
  const [deviceStatus, setDeviceStatus] = useState('connected');
  const [deviceAdded, setDeviceAdded] = useState(false);

  useEffect(() => {
    setModalVisible(props.showModal);
    const deviceOffTimer = setTimeout(() => {
      setDeviceStatus('off');
      setDeviceStatusLeftNav(true);
    }, 2000);
    const deviceOnTimer = setTimeout(() => {
      setDeviceStatus('on');
      setDeviceStatusRightNav(true);
    }, 5000);
    const deviceAddedTimer = setTimeout(() => {
      setDeviceAdded(true);
    }, 8000);

    return () => {
      clearTimeout(deviceOffTimer);
      clearTimeout(deviceOnTimer);
      clearTimeout(deviceAddedTimer);
    };
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
        {deviceAdded ? (
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
              <View style={styles.modalContainerNavBox}>
                <View style={styles.modalContainerNavBallActive}></View>
                <View style={styles.modalContainerNavLineActive}></View>
                <View style={styles.modalContainerNavBallActive}></View>
                <View style={styles.modalContainerNavLineActive}></View>
                <View style={styles.modalContainerNavBallActive}></View>
              </View>
            </View>

            <Text style={styles.modalContainerHeader}>PS 5 Added</Text>

            <View style={styles.modalContainerAdded}>
              <Image
                source={require('../../assets/images/devices/added.png')}
                style={{width: 100, height: 69}}
              />
            </View>
            <View style={styles.modalContainerPara}>
              <Text style={styles.modalContainerParaText}>
                The monitor has successfully identified your device
              </Text>
            </View>
            <TouchableOpacity
              style={styles.TextContainerBtnCover}
              onPress={() => props.navigation.navigate('Device')}>
              <View style={styles.TextContainerBtn}>
                <Text style={styles.TextContainerBtnText}>
                  Check my Devices
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
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
              <View style={styles.modalContainerNavBox}>
                <View style={styles.modalContainerNavBallActive}></View>
                <View
                  style={
                    deviceStatusLeftNav
                      ? styles.modalContainerNavLineActive
                      : styles.modalContainerNavLine
                  }></View>
                <View
                  style={
                    deviceStatusLeftNav
                      ? styles.modalContainerNavBallActive
                      : styles.modalContainerNavBall
                  }></View>
                <View
                  style={
                    deviceStatusRightNav
                      ? styles.modalContainerNavLineActive
                      : styles.modalContainerNavLine
                  }></View>
                <View
                  style={
                    deviceStatusRightNav
                      ? styles.modalContainerNavBallActive
                      : styles.modalContainerNavBall
                  }></View>
              </View>
            </View>
            {deviceStatus === 'off' ? (
              <Text style={styles.modalContainerHeader}>
                Turn off the Device
              </Text>
            ) : (
              <Text style={styles.modalContainerHeader}>
                Turn on the Device
              </Text>
            )}
            <View style={styles.modalContainerRoller}>
              {deviceStatus === 'connected' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Image
                    source={require('../../assets/images/devices/roller.png')}
                    style={{width: 142, height: 142}}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Image
                      source={require('../../assets/images/devices/switchon.png')}
                      style={{width: 54, height: 103}}
                    />
                  </View>
                </View>
              ) : null}
              {deviceStatus === 'off' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Image
                    source={require('../../assets/images/devices/rolleroff.png')}
                    style={{width: 142, height: 142}}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Image
                      source={require('../../assets/images/devices/switchoff.png')}
                      style={{width: 54, height: 103}}
                    />
                  </View>
                </View>
              ) : null}
              {deviceStatus === 'on' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Image
                    source={require('../../assets/images/devices/roller.png')}
                    style={{width: 142, height: 142}}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Image
                      source={require('../../assets/images/devices/switchon.png')}
                      style={{width: 54, height: 103}}
                    />
                  </View>
                </View>
              ) : null}
            </View>
            <View style={styles.modalContainerPara}>
              <Text style={styles.modalContainerParaText}>
                When your Monitor identifies the Device, you will be asked to
                proceed to the next step
              </Text>
            </View>
          </View>
        )}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 10,
  },
  modalContainerNavBox: {
    width: '100%',
    maxWidth: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainerNavBall: {
    width: 20,
    height: 20,
    backgroundColor: '#BFE4FB',
    borderRadius: 60,
  },
  modalContainerNavBallActive: {
    width: 20,
    height: 20,
    backgroundColor: '#1EA2F3',
    borderRadius: 60,
  },
  modalContainerNavLine: {
    width: 70,
    height: 5,
    backgroundColor: '#fff',
  },
  modalContainerNavLineActive: {
    width: 70,
    height: 5,
    backgroundColor: '#1EA2F3',
  },
  modalContainerHeader: {
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 38,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerPara: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerParaText: {
    maxWidth: 288,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerRoller: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalContainerAdded: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  modalContainerRollerImage: {
    width: 142,
    height: 142,
    position: 'relative',
  },
  modalContainerRollerSwitch: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerBtnCover: {
    width: '100%',
    marginTop: 45,
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'caros',
  },
});

export default DeviceOn;
