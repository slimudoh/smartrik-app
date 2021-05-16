import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const MyHome = (props): Node => {
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
        <Text style={styles.containerHeaderTitle}>My Home</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodyDetailsFull}>
          <Text style={styles.containerBodyDetailsFullHead}>My Home</Text>
          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>
              Status
            </Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              Active
            </Text>
          </View>

          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>
              Serial No.
            </Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              1234567890
            </Text>
          </View>

          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>
              Version
            </Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              2.1.3
            </Text>
          </View>

          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>
              MAC Address
            </Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              837930893739400493
            </Text>
          </View>
        </View>

        <View style={styles.containerBodyDetailsNav}>
          <Text style={styles.containerBodyDetailsNavText}>Internet</Text>
          <Text style={styles.containerBodyDetailsNavIcon}>
            Ethernet{' '}
            <Image
              source={require('../../assets/images/more/arrow.png')}
              style={{flex: 1, height: 28, width: 28}}
              resizeMode="contain"
            />
          </Text>
        </View>

        <View style={styles.containerBodyDetailsNav}>
          <Text style={styles.containerBodyDetailsNavText}>
            Electricity Cost
          </Text>
          <Text style={styles.containerBodyDetailsNavIcon}>
            ₦62.33/Kwh{' '}
            <Image
              source={require('../../assets/images/more/arrow.png')}
              style={{width: 28, height: 28, resizeMode: 'cover'}}
            />
          </Text>
        </View>

        <View style={styles.containerBodyDetailsFull}>
          <Text style={styles.containerBodyDetailsFullHead}>Signal</Text>
          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>Mains</Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              540W 540W
            </Text>
          </View>

          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>Volts</Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              210 210
            </Text>
          </View>

          <View style={styles.containerBodyDetailsFullSection}>
            <Text style={styles.containerBodyDetailsFullSectionKey}>
              Frequency
            </Text>
            <Text style={styles.containerBodyDetailsFullSectionValue}>
              59.0Hz
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

MyHome.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    paddingRight: 10,
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
    marginTop: 30,
  },
  containerBodyDetailsFullSectionKey: {
    width: 150,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#787878',
  },
  containerBodyDetailsFullSectionValue: {
    width: 190,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
    textAlign: 'right',
  },
  containerBodyDetailsNav: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingLeft: 18,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBodyDetailsNavText: {
    width: 150,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#787878',
  },
  containerBodyDetailsNavIcon: {
    width: 160,
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
    textAlign: 'right',
    paddingRight: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default MyHome;
