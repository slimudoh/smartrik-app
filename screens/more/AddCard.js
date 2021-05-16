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
  TextInput,
} from 'react-native';

const AddCard = (props): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Card')}>
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
        <Text style={styles.containerHeaderTitle}>Add new card</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerCardForm}>
          <View style={styles.containerCardFormSingle}>
            <Text style={styles.containerCardFormLabel}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="1234 1234 1234 1234"
              placeholderTextColor="#252F41"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.containerCardFormDouble}>
            <View style={styles.containerCardFormDoubleInput}>
              <Text style={styles.containerCardFormLabel}>Expiry</Text>
              <TextInput
                style={styles.input}
                placeholder="9/23"
                placeholderTextColor="#252F41"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.containerCardFormDoubleInput}>
              <Text style={styles.containerCardFormLabel}>CVV</Text>
              <TextInput
                style={styles.input}
                placeholder="432"
                placeholderTextColor="#252F41"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        {/* <Text style={styles.TextContainerSuccessLog}>
            Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}
        <View style={styles.containerCardCharge}>
          <Text style={styles.containerCardChargeText}>
            We charge a small amount to confirm your card details
          </Text>
        </View>
        <TouchableOpacity
          style={styles.TextContainerBtnCover}
          onPress={() => console.log('heheh')}>
          <View style={styles.TextContainerBtn}>
            <Text style={styles.TextContainerBtnText}>Save Card</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

AddCard.navigationOptions = navigationData => {
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
  containerCardFormLabel: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerCardFormSingle: {
    marginBottom: 30,
  },
  containerCardFormDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerCardFormDoubleInput: {
    width: '45%',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#252F41',
    borderStyle: 'solid',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros',
  },
  TextContainerSuccessLog: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  TextContainerErrorLog: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#FB4E4E',
    fontFamily: 'caros',
  },
  containerCardCharge: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  containerCardChargeText: {
    maxWidth: 280,
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    margin: 'auto',
  },
  TextContainerBtnCover: {
    width: '100%',
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextContainerBtnText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'caros',
  },
});

export default AddCard;
