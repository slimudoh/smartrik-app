import React from 'react';
import type {Node} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

const Skip = (props): Node => {
  return (
    <View style={styles.imageContainerSkip}>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Setup')}>
        <Text style={styles.imageContainerSkipText}>Skip</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainerSkip: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageContainerSkipBtn: {
    width: 40,
  },
  imageContainerSkipText: {
    width: 40,
    textAlign: 'right',
    fontStyle: 'normal',
    fontSize: 16,
    fontFamily: 'caros_medium',
    lineHeight: 20,
    color: '#252F41',
  },
});

export default Skip;
