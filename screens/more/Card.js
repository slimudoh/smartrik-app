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
import Svg, {Path, Circle} from 'react-native-svg';

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
            <View style={styles.containerCardTextDetails}>
              <View style={styles.containerCardTextDetailsImg}>
                <Svg
                  width="34"
                  height="21"
                  viewBox="0 0 34 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4017 18.7544H21.5945V2.24414H12.4017V18.7544Z"
                    fill="#FF5F00"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9852 10.5001C12.9852 7.15057 14.5544 4.16738 16.9979 2.24498C15.211 0.838842 12.956 0 10.5052 0C4.70322 0 0 4.70084 0 10.5001C0 16.2991 4.70322 21.0002 10.5052 21.0002C12.956 21.0002 15.211 20.1614 16.9979 18.7552C14.5544 16.8326 12.9852 13.8496 12.9852 10.5001Z"
                    fill="#EB001B"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.6675 17.0066V16.5988H33.561L33.4387 16.8791L33.3162 16.5988H33.2097V17.0066H33.2849V16.6992L33.3996 16.964H33.4776L33.5925 16.6983V17.0066H33.6675ZM32.9938 17.0067V16.6686H33.1301V16.5995H32.7828V16.6686H32.9191V17.0067H32.9938ZM33.9958 10.5001C33.9958 16.2991 29.2925 21.0002 23.4906 21.0002C21.0397 21.0002 18.785 20.1614 16.9978 18.7552C19.4413 16.8326 21.0105 13.8496 21.0105 10.5001C21.0105 7.15057 19.4413 4.16738 16.9978 2.24498C18.785 0.838842 21.0397 0 23.4906 0C29.2925 0 33.9958 4.70084 33.9958 10.5001Z"
                    fill="#F79E1B"
                  />
                </Svg>
              </View>
              <Text style={styles.containerCardTextDetailsText}>
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
            <View style={styles.containerCardTextDetails}>
              <View style={styles.containerCardTextDetailsImg}>
                <Svg
                  width="44"
                  height="14"
                  viewBox="0 0 44 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.86095 0H0.0432379L0 0.265219C1.49158 0.612814 2.81688 1.12291 3.96784 1.76035L7.13866 13.3337L10.8913 13.3284L16.4752 0.104262H12.7191L9.24672 9.13993L8.87527 7.30432C8.78268 7.00038 8.66187 6.69275 8.51619 6.38537C8.60301 6.56484 8.68359 6.74635 8.75789 6.92971L7.49516 1.07448C7.27721 0.26777 6.64364 0.0289021 5.86095 0ZM41.1787 0.104032H38.488C37.6534 0.104032 37.0293 0.340777 36.6627 1.20207L31.4886 13.3335H35.1486C35.1486 13.3335 35.7445 11.7028 35.8818 11.3441C36.069 11.3441 36.9505 11.3455 37.8862 11.3469L37.89 11.3469L37.8973 11.3469L37.9043 11.3469L37.9095 11.347C38.9613 11.3486 40.0746 11.3503 40.3424 11.3503C40.4464 11.8132 40.7661 13.3335 40.7661 13.3335H43.9998L41.1787 0.104032ZM32.1142 0.643943C31.4125 0.383938 30.3111 0.104262 28.9373 0.104262C25.4361 0.104262 22.9687 1.84219 22.947 4.33447C22.9279 6.17503 24.7076 7.20393 26.0527 7.81716C27.4317 8.44493 27.8966 8.8452 27.8914 9.40627C27.881 10.2658 26.7882 10.6567 25.7683 10.6567C24.3511 10.6567 23.5983 10.4625 22.4336 9.98443L21.9774 9.78173L21.4796 12.6512C22.3061 13.0087 23.8377 13.3183 25.4274 13.3337C29.1533 13.3337 31.5712 11.6172 31.599 8.95468C31.612 7.49814 30.6693 6.38885 28.6242 5.47284C27.3849 4.88014 26.6251 4.485 26.633 3.88459C26.633 3.35261 27.2765 2.78214 28.6633 2.78214C29.8211 2.76418 30.6623 3.01392 31.3145 3.27307L31.6337 3.42103L32.1142 0.643943ZM38.2706 4.93581C38.2706 4.93581 37.1725 7.87392 36.8835 8.63716H39.7754C39.6356 7.97374 38.968 4.81391 38.968 4.81391L38.7319 3.67258C38.6346 3.94887 38.4967 4.32008 38.3968 4.58876C38.3173 4.80288 38.2619 4.95187 38.2706 4.93581ZM18.0136 0.104262L15.8496 13.3337H19.3097L21.4797 0.104262H18.0136Z"
                    fill="#16216A"
                  />
                </Svg>
              </View>
              <Text style={styles.containerCardTextDetailsText}>
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
              <Svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Circle
                  cx="19.799"
                  cy="19.7988"
                  r="14"
                  transform="rotate(-45 19.799 19.7988)"
                  fill="#1EA2F3"
                  fillOpacity="0.25"
                />
                <Path
                  d="M14.1421 19.7988H25.4558"
                  stroke="#1EA2F3"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <Path
                  d="M19.799 14.1426V25.4563"
                  stroke="#1EA2F3"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </Svg>
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
    width: 200,
  },
  containerCardTextDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerCardTextDetailsImg: {
    width: 70,
  },
  containerCardTextDetailsText: {
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
    width: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Card;
