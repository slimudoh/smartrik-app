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
import DeviceInfo from '../../components/Modal/DeviceInfo';

const DeviceDetails = (props): Node => {
  const [usage, setUsage] = useState('day');
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
          <Text style={styles.containerHeaderTitleText}>Fridge (Kitchen)</Text>
        </View>
        <View style={styles.containerHeaderValue}>
          <Text style={styles.containerHeaderValueText}>234 W</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerDeviceImage}>
          <Image
            source={require('../../assets/images/devices/device.png')}
            style={{width: 132, height: 147}}
          />
        </View>
        <View style={styles.containerDeviceInfo}>
          <View style={styles.containerDeviceInfoTime}>
            <Text style={styles.containerDeviceInfoTimeText}>
              On for 25 Secs
            </Text>
          </View>
          <View style={styles.containerDeviceInfoNav}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
              <Text style={styles.containerDeviceInfoNavText}>
                Device Info{' '}
                <Image
                  source={require('../../assets/images/devices/arrow.png')}
                  style={{width: 6, height: 12}}
                />
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.containerDeviceStats}>
          <View style={styles.containerDeviceStatsNav}>
            <Text style={styles.containerDeviceStatsNavText}>Statistics</Text>
            <View style={styles.containerDeviceStatsNavImage}>
              <TouchableWithoutFeedback
                onPress={() => props.navigation.navigate('DeviceStats')}>
                <Image
                  source={require('../../assets/images/devices/newarrow.png')}
                  style={{width: 28, height: 28}}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={styles.containerDeviceStatsMonth}>
            <View style={styles.containerDeviceStatsMonthKey}>
              <Text style={styles.containerDeviceStatsMonthKeyText}>
                Est. cost/Month
              </Text>
            </View>
            <View style={styles.containerDeviceStatsMonthVal}>
              <Text style={styles.containerDeviceStatsMonthValText}>
                ₦2,000
              </Text>
            </View>
          </View>

          <View style={styles.containerDeviceStatsMonth}>
            <View style={styles.containerDeviceStatsMonthKey}>
              <Text style={styles.containerDeviceStatsMonthKeyText}>
                Avg % used monthly
              </Text>
            </View>
            <View style={styles.containerDeviceStatsMonthVal}>
              <Text style={styles.containerDeviceStatsMonthValText}>4%</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerDeviceUsage}>
          <Text style={styles.containerDeviceUsageText}>Usage</Text>
          <View style={styles.containerDeviceUsageNav}>
            <TouchableWithoutFeedback onPress={() => setUsage('day')}>
              <View
                style={
                  usage === 'day'
                    ? styles.containerDeviceUsageNavListSelect
                    : styles.containerDeviceUsageNavList
                }>
                <Text
                  style={
                    usage === 'day'
                      ? styles.containerDeviceUsageNavListTextSelect
                      : styles.containerDeviceUsageNavListText
                  }>
                  Day
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => setUsage('week')}>
              <View
                style={
                  usage === 'week'
                    ? styles.containerDeviceUsageNavListSelect
                    : styles.containerDeviceUsageNavList
                }>
                <Text
                  style={
                    usage === 'week'
                      ? styles.containerDeviceUsageNavListTextSelect
                      : styles.containerDeviceUsageNavListText
                  }>
                  Week
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => setUsage('month')}>
              <View
                style={
                  usage === 'month'
                    ? styles.containerDeviceUsageNavListSelect
                    : styles.containerDeviceUsageNavList
                }>
                <Text
                  style={
                    usage === 'month'
                      ? styles.containerDeviceUsageNavListTextSelect
                      : styles.containerDeviceUsageNavListText
                  }>
                  Month
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setUsage('year')}>
              <View
                style={
                  usage === 'year'
                    ? styles.containerDeviceUsageNavListSelect
                    : styles.containerDeviceUsageNavList
                }>
                <Text
                  style={
                    usage === 'year'
                      ? styles.containerDeviceUsageNavListTextSelect
                      : styles.containerDeviceUsageNavListText
                  }>
                  Year
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.containerDeviceUsageToday}>Today</Text>
          <View style={styles.containerDeviceUsageChart}>
            <Text style={styles.containerDeviceUsageChartText}>
              Bar chart stays here
            </Text>
          </View>
          <View style={styles.containerDeviceUsageTotal}>
            <View style={styles.containerDeviceUsageTotalBox}>
              <Text style={styles.containerDeviceUsageTotalBoxKey}>
                Total Usage
              </Text>
              <Text style={styles.containerDeviceUsageTotalBoxVal}>2.5KWh</Text>
            </View>

            <View style={styles.containerDeviceUsageTotalBox}>
              <Text style={styles.containerDeviceUsageTotalBoxKey}>
                Total est. cost
              </Text>
              <Text style={styles.containerDeviceUsageTotalBoxVal}>₦500</Text>
            </View>

            <View style={styles.containerDeviceUsageTotalBox}>
              <Text style={styles.containerDeviceUsageTotalBoxKey}>
                Total time on
              </Text>
              <Text style={styles.containerDeviceUsageTotalBoxVal}>
                3hrs 5mins
              </Text>
            </View>

            <View style={styles.containerDeviceUsageTotalBox}>
              <Text style={styles.containerDeviceUsageTotalBoxKey}>
                No. of times on
              </Text>
              <Text style={styles.containerDeviceUsageTotalBoxVal}>
                8 times
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerDeviceMeter}>
          <View style={styles.containerDeviceMeterDetails}>
            <Text style={styles.containerDeviceMeterDetailsKey}>
              My Power Meter
            </Text>
            <Text style={styles.containerDeviceMeterDetailsVal}>
              Last 24 hours
            </Text>
          </View>
          <View style={styles.containerDeviceUsageChart}>
            <Text style={styles.containerDeviceUsageChartText}>
              Line chart stays here
            </Text>
          </View>
        </View>
      </ScrollView>
      <DeviceInfo
        showModal={modalVisible}
        onpress={closeModal}
        navigation={props.navigation}
      />
    </View>
  );
};

DeviceDetails.navigationOptions = navigationData => {
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
  containerDeviceImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 33,
  },
  containerDeviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  containerDeviceInfoTime: {
    width: '50%',
  },
  containerDeviceInfoTimeText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceInfoNav: {
    width: '50%',
  },
  containerDeviceInfoNavText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'right',
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  containerDeviceStats: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 10,
  },
  containerDeviceStatsNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  containerDeviceStatsNavText: {
    width: 100,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceStatsMonth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerDeviceStatsMonthKey: {
    width: 160,
  },
  containerDeviceStatsMonthKeyText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#787878',
    fontFamily: 'caros',
  },
  containerDeviceStatsMonthVal: {
    width: 100,
  },
  containerDeviceStatsMonthValText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'right',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceUsage: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 20,
    marginTop: 15,
  },
  containerDeviceUsageText: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros_medium',
  },
  containerDeviceUsageToday: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros_medium',
  },
  containerDeviceUsageNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: 'rgba(30, 162, 243, 0.12)',
    borderRadius: 8,
  },
  containerDeviceUsageNavList: {
    width: '25%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceUsageNavListSelect: {
    width: '25%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1EA2F3',
    borderRadius: 7,
  },
  containerDeviceUsageNavListText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'right',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceUsageNavListTextSelect: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'right',
    color: '#FFFFFF',
    fontFamily: 'caros',
  },
  containerDeviceUsageChart: {
    height: 100,
    marginTop: 50,
  },
  containerDeviceUsageChartText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#787878',
    fontFamily: 'caros',
  },
  containerDeviceUsageTotal: {
    marginTop: 20,
  },
  containerDeviceUsageTotalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  containerDeviceUsageTotalBoxKey: {
    width: 130,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#787878',
    fontFamily: 'caros',
  },
  containerDeviceUsageTotalBoxVal: {
    width: 200,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'right',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceMeter: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 20,
    marginTop: 15,
  },
  containerDeviceMeterDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDeviceMeterDetailsKey: {
    width: 150,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros_medium',
  },
  containerDeviceMeterDetailsVal: {
    width: 100,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'right',
    color: '#787878',
    fontFamily: 'caros',
  },
});

export default DeviceDetails;
