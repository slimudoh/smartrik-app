import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

const More = (props): Node => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>This is the more.</Text> */}

      <Button
        onPress={() => props.navigation.navigate('MyHome')}
        title="Learn More"
        color="#841584"
      />
      <Button
        onPress={() => props.navigation.navigate('Internet')}
        title="Learn More"
        color="#841584"
      />
      <Button
        onPress={() => props.navigation.navigate('Cost')}
        title="Learn More"
        color="#841584"
      />
    </View>
  );
};

More.navigationOptions = navigationData => {
  console.log(navigationData);
};

export default More;
