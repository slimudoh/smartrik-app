import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Modal} from 'react-native';

const Popup = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(props.showModal);
  }, [props.showModal]);

  const closeModal = () => {
    setModalVisible(false);
    props.navigation.navigate('Dashboard');
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
          <Text style={styles.modalContainerIcon}>🎉</Text>
          <Text style={styles.modalContainerText}>
            You have successfully signed up.
          </Text>
          <Text style={styles.modalContainerText}>
            it’s time to take charge of your electricity consumption.
          </Text>
          {/* <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={() => props.navigation.navigate('Dashboard')}> */}
          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={closeModal}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Let’s Go</Text>
            </View>
          </TouchableOpacity>
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
  modalContainerIcon: {
    // height: 70,
    fontStyle: 'normal',
    fontSize: 54,
    lineHeight: 26,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    paddingTop: 20,
    marginBottom: 20,
  },
  modalContainerText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    marginBottom: 20,
  },
  TextContainerBtnCover: {
    width: '100%',
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

export default Popup;
