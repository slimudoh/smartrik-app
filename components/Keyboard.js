import React from 'react';
import type {Node} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const Skip = (props): Node => {
  return (
    <View style={styles.TextContainerKeyboard}>
      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>1</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>2</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>3</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>4</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>5</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>6</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>7</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>8</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>9</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}></Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Text style={styles.TextContainerKeyboardBtnText}>0</Text>
      </View>

      <View style={styles.TextContainerKeyboardBtn}>
        <Image
          source={require('../assets/images/key.png')}
          style={{width: 30}}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextContainerKeyboard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#E5F5FF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextContainerKeyboardBtn: {
    width: '30%',
    height: 50,
    maxWidth: 83,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 15,
  },
  TextContainerKeyboardBtnText: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#252F41',
    fontFamily: 'caros_bold',
  },
});

export default Skip;
