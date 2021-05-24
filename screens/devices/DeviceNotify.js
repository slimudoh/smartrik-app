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

const DeviceNotify = (props): Node => {
  const [wifi, setWifi] = useState(false);
  const [ethernet, setEthernet] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('DeviceDetails')}>
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
      <View style={styles.containerHeader}></View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerInfo}>
          <Text style={styles.containerInfoText}>
            Click on the Blue texts below to customize your notification
          </Text>
        </View>

        <View style={styles.containerNotify}>
          <Text style={styles.containerNotifyText}>
            Notify me when My Fridge(Kitchen) is{' '}
            <Text style={{color: '#1EA2F3'}}>ON</Text> for{' '}
            <Text style={{color: '#1EA2F3'}}>30Min</Text>
          </Text>
        </View>

        <View style={styles.TextContainerBtnCoverPosition}>
          <TouchableOpacity
            style={styles.TextContainerBtnCover}
            onPress={() => console.log('save')}>
            <View style={styles.TextContainerBtn}>
              <Text style={styles.TextContainerBtnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

DeviceNotify.navigationOptions = navigationData => {
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
    paddingTop: Dimensions.get('window').height > 800 ? 71 : 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  containerInfoText: {
    maxWidth: 282,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerNotify: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height > 800 ? 71 : 100,
  },
  containerNotifyText: {
    maxWidth: 226,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 38,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  TextContainerBtnCoverPosition: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
    marginTop: Dimensions.get('window').height > 800 ? 200 : 50,
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
    // marginTop: 20,
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

export default DeviceNotify;
