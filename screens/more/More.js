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

const More = (props): Node => {
  const [fingerLogin, setFingerLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>More</Text>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.containerHeaderAction}>Logout</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M6.78558 16.896V14.1441C6.78558 13.4416 7.38943 12.8721 8.13431 12.8721H10.8572C11.2149 12.8721 11.558 13.0061 11.8109 13.2446C12.0638 13.4832 12.2059 13.8067 12.2059 14.1441V16.896C12.2037 17.1881 12.3251 17.4689 12.5433 17.6762C12.7615 17.8834 13.0584 18 13.368 18H15.2257C16.0933 18.0021 16.9262 17.6786 17.5405 17.1007C18.1548 16.5229 18.5 15.7383 18.5 14.92V7.08018C18.5 6.41922 18.1893 5.79226 17.6517 5.3682L11.3322 0.608282C10.2329 -0.226295 8.6579 -0.199348 7.59142 0.672281L1.41612 5.3682C0.853123 5.77976 0.516628 6.40858 0.5 7.08018V14.912C0.5 16.6175 1.96594 18 3.77427 18H5.58954C6.23274 18 6.75547 17.5106 6.76013 16.904L6.78558 16.896Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>My Home</Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage users, set tarrif & Monitor details
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('MyHome')}>
            <View style={styles.containerBodySectionArrow}>
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

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M7.34337 18.9474C7.87269 18.8354 11.0981 18.8354 11.6274 18.9474C12.0799 19.0519 12.5692 19.2961 12.5692 19.8293C12.5429 20.3369 12.2451 20.7869 11.8336 21.0727C11.3001 21.4886 10.674 21.752 10.0194 21.8469C9.65743 21.8939 9.30174 21.8949 8.95237 21.8469C8.29677 21.752 7.67064 21.4886 7.13816 21.0717C6.72565 20.7869 6.42785 20.3369 6.40154 19.8293C6.40154 19.2961 6.89087 19.0519 7.34337 18.9474ZM9.54788 0.706055C11.7504 0.706055 14.0003 1.75113 15.3367 3.48511C16.2038 4.60164 16.6016 5.7171 16.6016 7.45108V7.90217C16.6016 9.23198 16.9531 10.0158 17.7265 10.919C18.3127 11.5845 18.5 12.4387 18.5 13.3654C18.5 14.291 18.1959 15.1697 17.5866 15.8832C16.7889 16.7384 15.664 17.2844 14.5159 17.3793C12.8522 17.5212 11.1874 17.6406 9.50053 17.6406C7.8126 17.6406 6.14887 17.5691 4.48515 17.3793C3.33601 17.2844 2.21108 16.7384 1.41447 15.8832C0.805174 15.1697 0.5 14.291 0.5 13.3654C0.5 12.4387 0.688366 11.5845 1.27346 10.919C2.07112 10.0158 2.39944 9.23198 2.39944 7.90217V7.45108C2.39944 5.67018 2.84353 4.50566 3.758 3.36567C5.1176 1.70315 7.29696 0.706055 9.45317 0.706055H9.54788Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              My Notification centre
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage your general notifications here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Notification')}>
            <View style={styles.containerBodySectionArrow}>
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

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M21.5413 5.5H0.458339C0.183344 5.5 0 5.68334 0 5.95834V12.3749C0 13.6582 1.00833 14.6665 2.29161 14.6665H19.7079C20.9913 14.6665 21.9996 13.6582 21.9996 12.3749V5.95834C21.9996 5.68334 21.8163 5.5 21.5413 5.5ZM3.20829 9.16663H6.87487C7.14987 9.16663 7.33321 9.34997 7.33321 9.62497C7.33321 9.89996 7.14987 10.0833 6.87487 10.0833H3.20829C2.93329 10.0833 2.74995 9.89992 2.74995 9.62492C2.74995 9.34993 2.93329 9.16663 3.20829 9.16663ZM9.62482 11.9166H3.20829C2.93329 11.9166 2.74995 11.7332 2.74995 11.4582C2.74995 11.1832 2.93329 10.9999 3.20829 10.9999H9.62482C9.89982 10.9999 10.0832 11.1832 10.0832 11.4582C10.0832 11.7332 9.89982 11.9166 9.62482 11.9166ZM17.4163 11.9166C17.0497 11.9166 16.7747 11.8249 16.4997 11.6416C16.2247 11.8249 15.9497 11.9166 15.5831 11.9166C14.5747 11.9166 13.7497 11.0916 13.7497 10.0833C13.7497 9.07493 14.5747 8.24995 15.5831 8.24995C15.9497 8.24995 16.2247 8.3416 16.4997 8.52494C16.7747 8.3416 17.0497 8.24995 17.4163 8.24995C18.4247 8.24995 19.2496 9.07493 19.2496 10.0833C19.2496 11.0916 18.4247 11.9166 17.4163 11.9166Z"
                fill="#1EA2F3"
              />
              <Path
                d="M19.708 0H2.29161C1.00833 0 0 1.00833 0 2.29165V3.20829C0 3.48328 0.183344 3.66663 0.458339 3.66663H21.5413C21.8163 3.66663 21.9996 3.48328 21.9996 3.20829V2.29165C21.9996 1.00833 20.9913 0 19.708 0Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>Card</Text>
            <Text style={styles.containerBodySectionTextPara}>
              Manage your card here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Card')}>
            <View style={styles.containerBodySectionArrow}>
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

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M9.5 0C14.477 0 18.5 4.0329 18.5 9C18.5 13.9689 14.477 18 9.5 18C4.532 18 0.5 13.9689 0.5 9C0.5 4.0329 4.532 0 9.5 0ZM9.5 11.6379C9.068 11.6379 8.717 11.9889 8.717 12.4209C8.717 12.8529 9.068 13.2129 9.509 13.2129C9.941 13.2129 10.292 12.8529 10.292 12.4209C10.292 11.9889 9.941 11.6379 9.5 11.6379ZM9.5 4.797C9.068 4.797 8.708 5.1579 8.708 5.589V9.567C8.708 9.9999 9.068 10.35 9.5 10.35C9.932 10.35 10.283 9.9999 10.283 9.567V5.589C10.283 5.1579 9.932 4.797 9.5 4.797Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Help Centre
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Reach out to us from here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Help')}>
            <View style={styles.containerBodySectionArrow}>
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

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.9 0C17.4029 0 17 0.402944 17 0.9V6H3.8C2.14315 6 0.800003 7.34315 0.800003 9V15C0.800003 16.6569 2.14315 18 3.8 18H17.6C19.2569 18 20.6 16.6569 20.6 15V9C20.6 7.76981 19.8595 6.71256 18.8 6.24963V0.9C18.8 0.402944 18.3971 0 17.9 0Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              About Smartrik Monitor
            </Text>
            <Text style={styles.containerBodySectionTextPara}>
              Get more info about your monitor here
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('About')}>
            <View style={styles.containerBodySectionArrow}>
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

        <View style={styles.containerBodySection}>
          <View style={styles.containerBodySectionIcon}>
            <Svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M16.6584 2.60991C13.9573 -0.178022 8.63541 -1.26692 5.65036 2.05174C5.08478 2.68036 4.65202 3.41887 4.37854 4.22215C4.10506 5.02542 3.99659 5.8766 4.05977 6.72365C4.19822 8.49832 4.00999 10.8519 2.32682 11.9853C-1.75402 14.7338 -0.238301 20 5.08835 20C11.7235 20 18.738 16.0263 18.991 9.37651C19.0955 6.63263 18.2889 4.29273 16.6584 2.60991ZM5.08835 17.8721C4.83837 17.8721 4.594 17.7972 4.38615 17.6569C4.1783 17.5166 4.0163 17.3172 3.92064 17.0839C3.82498 16.8506 3.79995 16.5939 3.84872 16.3462C3.89749 16.0985 4.01786 15.871 4.19462 15.6925C4.37139 15.5139 4.59659 15.3923 4.84177 15.3431C5.08695 15.2938 5.34108 15.3191 5.57203 15.4157C5.80298 15.5124 6.00037 15.676 6.13925 15.886C6.27813 16.0959 6.35226 16.3428 6.35226 16.5953C6.35226 16.9339 6.2191 17.2587 5.98207 17.4981C5.74504 17.7375 5.42356 17.8721 5.08835 17.8721ZM10.5653 16.5953C10.3153 16.5953 10.071 16.5204 9.86312 16.3801C9.65527 16.2398 9.49327 16.0404 9.39761 15.8071C9.30194 15.5738 9.27691 15.3171 9.32568 15.0694C9.37445 14.8218 9.49483 14.5943 9.67159 14.4157C9.84835 14.2372 10.0736 14.1156 10.3187 14.0663C10.5639 14.017 10.818 14.0423 11.049 14.139C11.2799 14.2356 11.4773 14.3992 11.6162 14.6092C11.7551 14.8192 11.8292 15.066 11.8292 15.3185C11.8292 15.6572 11.6961 15.9819 11.459 16.2213C11.222 16.4608 10.9005 16.5953 10.5653 16.5953ZM14.7784 12.765C14.5284 12.765 14.284 12.6901 14.0762 12.5498C13.8683 12.4095 13.7063 12.2101 13.6107 11.9768C13.515 11.7435 13.49 11.4868 13.5387 11.2392C13.5875 10.9915 13.7079 10.764 13.8846 10.5854C14.0614 10.4069 14.2866 10.2853 14.5318 10.236C14.777 10.1867 15.0311 10.212 15.262 10.3087C15.493 10.4053 15.6904 10.5689 15.8293 10.7789C15.9682 10.9889 16.0423 11.2357 16.0423 11.4882C16.0423 11.8269 15.9091 12.1516 15.6721 12.3911C15.4351 12.6305 15.1136 12.765 14.7784 12.765ZM14.7784 7.23236C14.5284 7.23236 14.284 7.15748 14.0762 7.01719C13.8683 6.8769 13.7063 6.67749 13.6107 6.44419C13.515 6.2109 13.49 5.95418 13.5387 5.70651C13.5875 5.45885 13.7079 5.23135 13.8846 5.05279C14.0614 4.87423 14.2866 4.75263 14.5318 4.70337C14.777 4.6541 15.0311 4.67939 15.262 4.77602C15.493 4.87266 15.6904 5.0363 15.8293 5.24627C15.9682 5.45623 16.0423 5.70308 16.0423 5.9556C16.0423 6.29422 15.9091 6.61897 15.6721 6.85841C15.4351 7.09785 15.1136 7.23236 14.7784 7.23236Z"
                fill="#1EA2F3"
              />
            </Svg>
          </View>
          <View style={styles.containerBodySwitchSectionText}>
            <Text style={styles.containerBodySectionTextTitle}>
              Switch to Dark Mode
            </Text>
          </View>

          <View style={styles.TextContainerSwitchBtn}>
            <Switch
              trackColor={{false: '#BFBFBF', true: '#1EA2F3'}}
              thumbColor={'#fff'}
              ios_backgroundColor="#3e3e3e"
              value={fingerLogin}
              onValueChange={newValue => setFingerLogin(newValue)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

More.navigationOptions = navigationData => {
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
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
  },
  containerBodySection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 49,
  },
  containerBodySectionIcon: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBodySectionArrow: {
    width: 30,
    height: 30,
  },
  containerBodySectionText: {
    width: Dimensions.get('window').width - 82,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerBodySwitchSectionText: {
    width: Dimensions.get('window').width - 112,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerBodySectionTextTitle: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: '#252F41',
    fontFamily: 'caros_medium',
  },
  containerBodySectionTextPara: {
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'left',
    color: '#969696',
    fontFamily: 'caros',
    paddingTop: 5,
  },
  TextContainerSwitchBtn: {
    width: 51,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  TextContainerSwitchBtnLeft: {
    position: 'relative',
    width: 51,
    height: 32,
    backgroundColor: '#BFBFBF',
    borderRadius: 60,
  },
  TextContainerSwitchBtnRight: {
    position: 'relative',
    width: 51,
    height: 32,
    backgroundColor: '#1EA2F3',
    borderRadius: 60,
  },
  TextContainerSwitchBtnBallLeft: {
    position: 'absolute',
    left: 2,
    top: 2,
    width: 27,
    height: 27,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  TextContainerSwitchBtnBallRight: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 27,
    height: 27,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default More;
