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
  TouchableOpacity,
} from 'react-native';

const Device = (props): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>Devices</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Image
                  source={require('../../assets/images/devices/fridge.png')}
                  style={{width: 26, height: 29}}
                />
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Fridge</Text>
                <Text style={styles.containerDeviceTextPara}>Kitchen</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Image
                  source={require('../../assets/images/devices/micro.png')}
                  style={{width: 31, height: 25}}
                />
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Microwave</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Image
                  source={require('../../assets/images/devices/blender.png')}
                  style={{width: 19, height: 26}}
                />
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Blender</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Image
                  source={require('../../assets/images/devices/dish.png')}
                  style={{width: 20, height: 26}}
                />
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Dishwasher</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Image
                source={require('../../assets/images/devices/offfridge.png')}
                style={{width: 26, height: 29}}
              />
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Fridge</Text>
              <Text style={styles.containerDeviceTextPara}>Kitchen</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Image
                source={require('../../assets/images/devices/offmicro.png')}
                style={{width: 31, height: 25}}
              />
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Microwave</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Image
                source={require('../../assets/images/devices/offblender.png')}
                style={{width: 19, height: 26}}
              />
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Blender</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Image
                source={require('../../assets/images/devices/offdish.png')}
                style={{width: 20, height: 26}}
              />
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Dishwasher</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerAddNew}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewDevice')}>
          <View style={styles.containerAddNewbtn}>
            <Text style={styles.containerAddNewbtnText}>+ Add New Device</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Device.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    position: 'relative',
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerDevice: {
    marginBottom: 30,
  },
  containerDeviceBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDeviceImage: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceText: {
    width: Dimensions.get('window').width - 144,
    paddingLeft: 10,
  },
  containerDeviceTextHead: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceTextPara: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#969696',
    fontFamily: 'caros',
  },
  containerDeviceValue: {
    width: 82,
    height: 32,
    backgroundColor: '#BFE4FB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceValueText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  containerDeviceLabel: {
    width: 82,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerDeviceLabelValue: {
    width: 57,
    height: 32,
    backgroundColor: '#BFBFBF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceLabelValueText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#787878',
    fontFamily: 'caros',
  },
  containerAddNew: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    right: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerAddNewbtn: {
    width: 178,
    height: 43,
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAddNewbtnText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    fontFamily: 'caros',
  },
});

export default Device;
