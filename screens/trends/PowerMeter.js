import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const PowerMeter = (props): Node => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the Trend.</Text>
    </View>
  );
};

PowerMeter.navigationOptions = navigationData => {
  console.log(navigationData);
};

export default PowerMeter;
