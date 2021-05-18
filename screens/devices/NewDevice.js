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
} from 'react-native';
import DeviceOn from '../../components/Modal/DeviceOn';

const NewDevice = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
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
      <ScrollView contentContainerStyle={styles.containerBody}>
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
        <TouchableOpacity
          style={styles.TextContainerBtnCover}
          onPress={() => setModalVisible(true)}>
          <View style={styles.TextContainerBtn}>
            <Text style={styles.TextContainerBtnText}>Set Up Device</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <DeviceOn
        showModal={modalVisible}
        onpress={closeModal}
        navigation={props.navigation}
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  modalContainerInfo: {
    marginTop: 20,
  },
  modalContainerInfoInput: {
    marginBottom: 30,
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

export default NewDevice;
