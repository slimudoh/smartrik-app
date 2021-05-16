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
} from 'react-native';

const Card = (props): Node => {
  const [selectedCard, setSelectedCard] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('More')}>
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
        <Text style={styles.containerHeaderTitle}>Card</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerCard}>
          <View style={styles.containerCardText}>
            <Text style={styles.containerCardTextDetails}>
              <Image
                source={require('../../assets/images/master.png')}
                style={{width: 34, height: 21}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              1234
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => setSelectedCard(true)}>
            <View style={styles.containerCardRadio}>
              {selectedCard ? (
                <View style={styles.containerCardRadioBall}></View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerCard}>
          <View style={styles.containerCardText}>
            <Text style={styles.containerCardTextDetails}>
              <Image
                source={require('../../assets/images/visa.png')}
                style={{width: 44, height: 13}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              <Image
                source={require('../../assets/images/dot.png')}
                style={{width: 8, height: 8}}
                resizeMode={'cover'}
              />{' '}
              1234
            </Text>
          </View>
          <TouchableWithoutFeedback onPress={() => setSelectedCard(false)}>
            <View style={styles.containerCardRadio}>
              {!selectedCard ? (
                <View style={styles.containerCardRadioBall}></View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerCard}>
          <Text style={styles.containerCardNewText}>Add a new card</Text>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('AddCard')}>
            <View style={styles.containerCardNewBtn}>
              <Text style={{color: '#1EA2F3', fontSize: 20}}>+</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

Card.navigationOptions = navigationData => {
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
  containerCard: {
    backgroundColor: 'rgba(30, 162, 243, 0.05)',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerCardRadio: {
    width: 28,
    height: 28,
    borderRadius: 60,
    backgroundColor: '#F4FAFE',
    borderWidth: 2,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCardRadioBall: {
    width: 18,
    height: 18,
    borderRadius: 60,
    backgroundColor: '#1EA2F3',
  },
  containerCardText: {
    width: 250,
  },
  containerCardTextDetails: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros_medium',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCardNewText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerCardNewBtn: {
    width: 28,
    height: 28,
    borderRadius: 60,
    backgroundColor: 'rgba(30, 162, 243, 0.25)',
    // borderWidth: 2,
    // borderColor: '#1EA2F3',
    // borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
