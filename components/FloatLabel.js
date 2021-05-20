import React, {useState, useRef, useEffect} from 'react';
import type {Node} from 'react';
import {Text, StyleSheet, View, TextInput, Animated} from 'react-native';

const FloatLabel = (props): Node => {
  const floatLabelAnimate = useRef(new Animated.Value(31)).current;
  const [isFocused, setIsFocused] = useState(false);

  const inputLabel = {
    position: 'absolute',
    left: 4,
    top: isFocused ? 5 : 31,

    fontSize: isFocused ? 12 : 14,
    color: '#252F41',
    fontStyle: 'normal',
    lineHeight: 17,
    textAlign: 'left',
    fontFamily: 'caros',
  };

  const handleFocus = () => {
    Animated.timing(floatLabelAnimate, {
      toValue: isFocused ? 5 : 31,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    setIsFocused(true);
  };
  const handleBlur = () => {
    if (props.value === null || props.value.trim() === '') {
      Animated.timing(floatLabelAnimate, {
        toValue: isFocused ? 5 : 31,
        duration: 3000,
        useNativeDriver: false,
      }).start();
      setIsFocused(false);
    }
  };
  const handleInputContent = text => {
    props.onchange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={inputLabel}>{props.label}</Text>
      {/* <Animated.Text style={inputLabel}>{props.label}</Animated.Text> */}
      <TextInput
        style={styles.input}
        placeholderTextColor="#252F41"
        keyboardType={props.keyboardType}
        value={props.value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleInputContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    position: 'relative',
    paddingTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
});

export default FloatLabel;
