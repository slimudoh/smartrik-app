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
import Svg, {Path, Circle} from 'react-native-svg';

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
          <Svg
            width="132"
            height="147"
            viewBox="0 0 132 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M118.717 0H13.2827C9.78733 0 6.43512 1.29062 3.96352 3.58794C1.49192 5.88526 0.103394 9.0011 0.103394 12.25V122.5C0.103394 125.749 1.49192 128.865 3.96352 131.162C6.43512 133.459 9.78733 134.75 13.2827 134.75V140.875C13.2827 142.499 13.977 144.057 15.2128 145.206C16.4486 146.355 18.1247 147 19.8724 147C21.62 147 23.2961 146.355 24.5319 145.206C25.7677 144.057 26.462 142.499 26.462 140.875V134.75H105.538V140.875C105.538 142.499 106.232 144.057 107.468 145.206C108.704 146.355 110.38 147 112.128 147C113.875 147 115.551 146.355 116.787 145.206C118.023 144.057 118.717 142.499 118.717 140.875V134.75C122.213 134.75 125.565 133.459 128.036 131.162C130.508 128.865 131.896 125.749 131.896 122.5V12.25C131.896 9.0011 130.508 5.88526 128.036 3.58794C125.565 1.29062 122.213 0 118.717 0ZM33.0517 55.125C33.0517 56.7495 32.3574 58.3074 31.1216 59.456C29.8858 60.6047 28.2097 61.25 26.462 61.25C24.7143 61.25 23.0382 60.6047 21.8024 59.456C20.5666 58.3074 19.8724 56.7495 19.8724 55.125V30.625C19.8724 29.0005 20.5666 27.4426 21.8024 26.294C23.0382 25.1453 24.7143 24.5 26.462 24.5C28.2097 24.5 29.8858 25.1453 31.1216 26.294C32.3574 27.4426 33.0517 29.0005 33.0517 30.625V55.125Z"
              fill="#1EA2F3"
            />
          </Svg>
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
                <Svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1 1L7 7L1 13"
                    stroke="#1EA2F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.containerDeviceStats}>
          <View style={styles.containerDeviceStatsNav}>
            <Text style={styles.containerDeviceStatsNavText}>Statistics</Text>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('DeviceStats')}>
              <View style={styles.containerDeviceStatsNavImage}>
                <Svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Circle
                    cx="14"
                    cy="14"
                    r="14"
                    fill="#1EA2F3"
                    fillOpacity="0.25"
                  />
                  <Path
                    d="M12 10L16 14L12 18"
                    stroke="#1EA2F3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableWithoutFeedback>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    // width: 160,
    width: '70%',
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
    // width: 100,
    width: '30%',

    borderStyle: 'solid',
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
    width: '50%',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#787878',
    fontFamily: 'caros',
  },
  containerDeviceUsageTotalBoxVal: {
    width: '50%',
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
