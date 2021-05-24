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
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DeviceOn from '../../components/Modal/DeviceOn';
import FloatLabel from '../../components/FloatLabel';

const NewDevice = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const [connectDevice, setConnectDevice] = useState(false);

  const [name, setName] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [location, setLocation] = useState(null);

  const closeModal = () => {
    setModalVisible(false);
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

  const openModal = () => {
    setModalVisible(true);
    setConnectDevice(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Device')}>
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
        <View style={styles.containerHeaderTitle}>
          <Text style={styles.containerHeaderTitleText}>New device</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerBody}>
        <ScrollView>
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
          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={openModal}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Set Up Device</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <DeviceOn
        showModal={modalVisible}
        onpress={closeModal}
        navigation={props.navigation}
        connect={connectDevice}
      />
    </View>
  );
};

NewDevice.navigationOptions = navigationData => {
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
    alignItems: 'center',
    borderBottomColor: 'rgba(37, 47, 65, 0.1)',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  containerHeaderTitle: {
    width: Dimensions.get('window').width - 114,
    paddingTop: 5,
  },
  containerHeaderTitleText: {
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
    paddingTop: 5,
  },
  containerHeaderValue: {
    width: 82,
    height: 32,
    backgroundColor: '#BFE4FB',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeaderValueText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#1EA2F3',
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  modalContainerInfo: {
    marginTop: 20,
  },
  modalContainerInfoInput: {
    marginBottom: 10,
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

  TextContainerBtnCover: {
    width: '100%',
    marginTop: Dimensions.get('window').height > 800 ? 200 : 20,
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
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

export default NewDevice;
