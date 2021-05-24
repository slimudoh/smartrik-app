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

const DeviceStats = (props): Node => {
  // const [wifi, setWifi] = useState(false);

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
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>Statistics</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Est. cost/Year
            </Text>
            <Text style={styles.containerStatsDetailsKeyPara}>
              Based on usage in the 10days
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>₦50,000</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Est. KWh/Year
            </Text>
            <Text style={styles.containerStatsDetailsKeyPara}>
              Based on usage in the 10days
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>2,300.2KWh</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>Avg Usage</Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>150w</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Avg. times on/Month
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>298 times</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Avg run time
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>2hrs 10mins</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Avg Cost/Month
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>₦2,000</Text>
        </View>

        <View style={styles.containerStatsDetails}>
          <View style={styles.containerStatsDetailsKey}>
            <Text style={styles.containerStatsDetailsKeyHead}>
              Avg % of monthly use
            </Text>
          </View>
          <Text style={styles.containerStatsDetailsVal}>12%</Text>
        </View>
      </ScrollView>
    </View>
  );
};

DeviceStats.navigationOptions = navigationData => {
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerStatsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  containerStatsDetailsKey: {
    width: '60%',
  },
  containerStatsDetailsKeyHead: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#787878',
    fontFamily: 'caros_medium',
  },
  containerStatsDetailsKeyPara: {
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'left',
    color: '#969696',
    fontFamily: 'caros',
  },
  containerStatsDetailsVal: {
    width: '40%',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'right',
    color: '#252F41',
    fontFamily: 'caros',
  },
});

export default DeviceStats;
