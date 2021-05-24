import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Cost = (props): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('MyHome')}>
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
        <Text style={styles.containerHeaderTitle}>Electricity Cost</Text>
      </View>
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

Cost.navigationOptions = navigationData => {
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
    paddingTop: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 66,
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
    marginTop: 66,
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

export default Cost;
