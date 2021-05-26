import React, {useState, useRef} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
  Dimensions,
  Switch,
} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';

const Trend = (props): Node => {
  const [target, setTarget] = useState('naira');

  const switchTarget = () => {
    if (target === 'naira') {
      setTarget('kwh');
      return;
    }
    setTarget('naira');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>Trends</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerMyTarget}>
          <View style={styles.containerMyTargetSwitch}>
            <Text style={styles.containerMyTargetSwitchText}>My Targets</Text>
            <TouchableWithoutFeedback onPress={switchTarget}>
              <View style={styles.containerMyTargetSwitchBtn}>
                <Text
                  style={
                    target === 'naira'
                      ? styles.containerMyTargetSwitchBtnBoxActive
                      : styles.containerMyTargetSwitchBtnBox
                  }>
                  ₦
                </Text>
                <Text
                  style={
                    target === 'kwh'
                      ? styles.containerMyTargetSwitchBtnBoxActive
                      : styles.containerMyTargetSwitchBtnBox
                  }>
                  KWh
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

Trend.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  containerHeader: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'rgba(37, 47, 65, 0.1)',
    borderBottomWidth: 1,
    paddingBottom: 20,
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
    paddingTop: 15,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
  },
  containerMyTarget: {
    backgroundColor: '#F4FAFE',
    borderRadius: 10,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 14,
    paddingBottom: 14,
  },
  containerMyTargetSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerMyTargetSwitchText: {
    width: 100,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerMyTargetSwitchBtn: {
    width: 80,
    height: 32,
    backgroundColor: 'rgba(30, 162, 243, 0.12)',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerMyTargetSwitchBtnBox: {
    width: '50%',
    height: 28,
    borderRadius: 7,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#000',
    fontFamily: 'caros',
  },
  containerMyTargetSwitchBtnBoxActive: {
    width: '50%',
    height: 28,
    backgroundColor: '#1EA2F3',
    borderRadius: 7,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#fff',
    fontFamily: 'caros',
  },
});

export default Trend;
