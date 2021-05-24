import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';

import FloatLabel from '../../components/FloatLabel';

const Login = (props): Node => {
  const [inputValue, setInputValue] = useState(null);

  const handleInputTextChange = val => {
    setInputValue(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.authHeader}>
        <Text style={styles.authHeaderMainText}>Welcome Back</Text>
        <Text style={styles.authHeaderMainTextPara}>
          So good to have you back, Login to see what’s happening in your house
        </Text>
      </View>
      <View style={styles.authBody}>
        <FloatLabel
          label="Phone Number"
          value={inputValue}
          onchange={handleInputTextChange}
          keyboardType={'numeric'}
        />
        {/* <Text style={styles.TextContainerSuccessLog}>
            Your smartrik code can found on the monitor
          </Text>
          <Text style={styles.TextContainerErrorLog}>
            You have entered a wrong code
          </Text> */}
        <TouchableOpacity
          style={styles.TextContainerBtnCover}
          onPress={() => props.navigation.navigate('Dashboard')}>
          <View style={styles.TextContainerBtn}>
            <Text style={styles.TextContainerBtnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.TextContainerFinger}>
          <Text style={styles.TextContainerFingerText}>
            Login with your Fingerprint
          </Text>
          <Svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Rect
              x="0.75"
              y="0.75"
              width="60.5"
              height="60.5"
              rx="19.25"
              fill="white"
              stroke="#1EA2F3"
              stroke-width="1.5"
            />
            <Path
              d="M38.8455 13.7415C36.3073 12.5866 33.3875 12 30.166 12C26.9212 12 23.9997 12.5866 21.4848 13.7433C21.0682 13.9349 20.8849 14.4299 21.0765 14.8482C21.2698 15.2648 21.7615 15.4482 22.1814 15.2565C24.4779 14.2016 27.1645 13.6666 30.166 13.6666C33.1475 13.6666 35.834 14.2016 38.1539 15.2582C38.2656 15.3098 38.3839 15.3332 38.4989 15.3332C38.8155 15.3332 39.1189 15.1515 39.2589 14.8448C39.4488 14.4265 39.2639 13.9315 38.8455 13.7415Z"
              fill="#1EA2F3"
            />
            <Path
              d="M42.4268 20.5812C39.0486 17.148 34.8072 15.3331 30.1625 15.3331C25.5361 15.3331 21.298 17.148 17.9082 20.5795C17.5848 20.9078 17.5882 21.436 17.9148 21.7594C18.2431 22.0827 18.7697 22.0777 19.0931 21.7527C22.1646 18.643 25.9911 16.9997 30.1625 16.9997C34.3506 16.9997 38.1821 18.643 41.2385 21.7511C41.4019 21.9161 41.6169 21.9995 41.8319 21.9995C42.0418 21.9995 42.2535 21.9195 42.4168 21.7595C42.7452 21.4361 42.7502 20.9095 42.4268 20.5812Z"
              fill="#1EA2F3"
            />
            <Path
              d="M30.1627 18.6663C28.9744 18.6663 27.7945 18.8129 26.6545 19.1029C26.2079 19.2162 25.9379 19.6695 26.0512 20.1162C26.1646 20.5628 26.6212 20.8295 27.0645 20.7178C28.0695 20.4628 29.1128 20.3328 30.1627 20.3328C37.0557 20.3328 42.662 25.9392 42.662 32.8321C42.662 33.2921 43.0354 33.6655 43.4953 33.6655C43.9553 33.6655 44.3286 33.2921 44.3286 32.8321C44.3286 25.0209 37.974 18.6663 30.1627 18.6663Z"
              fill="#1EA2F3"
            />
            <Path
              d="M24.1896 20.8795C23.9597 20.4845 23.4513 20.3495 23.0497 20.5812C21.9864 21.2028 20.9982 21.9711 20.1165 22.8644C17.5216 25.4876 16.0601 29.0224 16.0001 32.8205C15.9934 33.2805 16.3601 33.6588 16.8217 33.6655C16.825 33.6655 16.83 33.6655 16.835 33.6655C17.2884 33.6655 17.66 33.3021 17.6666 32.8455C17.72 29.4791 19.0099 26.3509 21.3014 24.0343C22.0814 23.2444 22.953 22.5678 23.8913 22.0195C24.2879 21.7878 24.4213 21.2779 24.1896 20.8795Z"
              fill="#1EA2F3"
            />
            <Path
              d="M38.3288 25.7209C36.2655 23.356 33.2891 21.9995 30.1625 21.9995C27.256 21.9995 24.5312 23.1394 22.4879 25.2076C20.4514 27.2642 19.3315 30.0457 19.3315 33.0806C19.3365 34.8738 18.7765 37.0237 17.7732 39.0886L17.3049 39.9219C17.0799 40.3235 17.2215 40.8302 17.6232 41.0568C17.7532 41.1302 17.8932 41.1652 18.0315 41.1652C18.3232 41.1652 18.6065 41.0119 18.7581 40.7402L19.2497 39.8636C20.4013 37.4938 21.0047 35.1472 20.998 33.0374C20.998 30.4859 21.9463 28.1226 23.6712 26.3794C25.4011 24.6295 27.7044 23.6662 30.1625 23.6662C32.8074 23.6662 35.3272 24.8145 37.0721 26.8176C37.3738 27.1642 37.9021 27.1992 38.2487 26.8976C38.5954 26.5942 38.6304 26.0676 38.3288 25.7209Z"
              fill="#1EA2F3"
            />
            <Path
              d="M42.5454 42.4383L41.6054 39.3635C41.0771 36.952 41.0321 34.6504 41.0038 33.2738L40.9955 32.8322C40.9955 31.5973 40.7871 30.384 40.3771 29.2258C40.2238 28.7924 39.7522 28.5658 39.3138 28.7192C38.8805 28.8725 38.6539 29.3475 38.8072 29.7825C39.1538 30.7608 39.3288 31.7874 39.3288 32.8539L39.3388 33.3073C39.3688 34.7438 39.4155 37.1487 39.9954 39.7836L40.9487 42.9234C41.0571 43.2834 41.3887 43.5134 41.7471 43.5134C41.8271 43.5134 41.9087 43.5017 41.9904 43.4784C42.4304 43.3433 42.6787 42.88 42.5454 42.4383Z"
              fill="#1EA2F3"
            />
            <Path
              d="M40.1138 46.2881L39.3388 43.8066C37.9639 39.5135 37.7073 34.6871 37.6623 32.8322C37.6623 28.6975 34.2975 25.3326 30.1627 25.3326C26.0279 25.3326 22.6648 28.7491 22.6648 32.9772C22.6681 33.8538 22.5064 38.4853 18.9866 43.5616C18.7233 43.94 18.8182 44.46 19.1949 44.7216C19.5716 44.9832 20.0933 44.8899 20.3549 44.5132C24.0647 39.1652 24.3363 34.3271 24.3313 32.9505C24.3313 29.669 26.9478 27.0008 30.1626 27.0008C33.3791 27.0008 35.9957 29.6173 35.9957 32.8539C36.0557 35.2737 36.364 39.9801 37.7506 44.3116L38.5205 46.7831C38.6322 47.1397 38.9605 47.3681 39.3171 47.3681C39.3988 47.3681 39.4821 47.3564 39.5655 47.3314C40.0055 47.1931 40.2504 46.7265 40.1138 46.2881Z"
              fill="#1EA2F3"
            />
            <Path
              d="M34.329 32.8322C34.329 30.5357 32.4591 28.6658 30.1626 28.6658C27.8661 28.6658 25.9962 30.5357 25.9962 32.8639C26.0062 33.1389 26.1912 39.6852 20.8981 46.5732C20.6181 46.9382 20.6865 47.4615 21.0515 47.7415C21.4181 48.0231 21.9398 47.9515 22.2198 47.5881C27.8745 40.2285 27.6711 33.1006 27.6611 32.8323C27.6611 31.454 28.7827 30.3324 30.161 30.3324C31.5393 30.3324 32.6608 31.454 32.6625 32.8507C32.6858 33.784 32.6908 42.2035 26.1845 50.6563C25.9045 51.0213 25.9711 51.5446 26.3361 51.8246C26.4895 51.9412 26.6677 51.998 26.8444 51.998C27.0944 51.998 27.3411 51.8863 27.5044 51.673C34.3723 42.7533 34.3523 33.8038 34.329 32.8322Z"
              fill="#1EA2F3"
            />
            <Path
              d="M30.9925 32.7955C30.9709 32.3372 30.6109 31.9722 30.1242 32.0005C29.6659 32.0205 29.3092 32.4089 29.3276 32.8689C29.3276 32.8805 29.3742 34.1004 29.0642 36.0287C28.9926 36.4837 29.3026 36.912 29.7558 36.9853C29.8008 36.9919 29.8458 36.9953 29.8892 36.9953C30.2908 36.9953 30.6458 36.7036 30.7108 36.2953C31.0509 34.1804 30.9959 32.8505 30.9925 32.7955Z"
              fill="#1EA2F3"
            />
            <Path
              d="M29.3577 38.7235C28.9144 38.5919 28.4528 38.8452 28.3212 39.2851C27.2796 42.8033 25.5463 46.0931 23.1731 49.0662C22.8865 49.4262 22.9447 49.9496 23.3047 50.2378C23.4581 50.3612 23.6413 50.4195 23.8247 50.4195C24.0697 50.4195 24.3113 50.3128 24.4763 50.1061C26.9845 46.9663 28.8161 43.4848 29.921 39.76C30.0511 39.3185 29.7994 38.8535 29.3577 38.7235Z"
              fill="#1EA2F3"
            />
            <Path
              d="M37.4338 48.708L36.4289 45.5165C36.0289 44.3199 35.6556 43.055 35.6539 43.05C35.5539 42.7117 35.254 42.4734 34.9023 42.4534C34.5424 42.4284 34.224 42.635 34.0874 42.96C34.069 43.0034 32.2125 47.3681 30.0842 50.718C29.8376 51.1063 29.9526 51.6213 30.3409 51.8679C30.4792 51.9563 30.6342 51.9979 30.7875 51.9979C31.0641 51.9979 31.3325 51.8613 31.4908 51.6113C32.7791 49.583 33.949 47.2515 34.7123 45.63C34.7556 45.7633 34.8006 45.8983 34.8456 46.0316L35.8439 49.208C35.9823 49.6464 36.4455 49.893 36.8889 49.753C37.3271 49.6146 37.5721 49.148 37.4338 48.708Z"
              fill="#1EA2F3"
            />
          </Svg>
        </View>
        <View style={styles.TextContainerBtnFb}>
          <View style={styles.TextContainerBtnFbImage}>
            <Svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M14.4573 0.00543533L11.0697 0C7.26392 0 4.80443 2.52335 4.80443 6.42891V9.39306H1.39839C1.10406 9.39306 0.865723 9.63167 0.865723 9.92599V14.2207C0.865723 14.515 1.10433 14.7534 1.39839 14.7534H4.80443V25.5903C4.80443 25.8847 5.04277 26.123 5.33709 26.123H9.78102C10.0753 26.123 10.3137 25.8844 10.3137 25.5903V14.7534H14.2961C14.5905 14.7534 14.8288 14.515 14.8288 14.2207L14.8304 9.92599C14.8304 9.78468 14.7742 9.64934 14.6744 9.54933C14.5747 9.44932 14.4388 9.39306 14.2975 9.39306H10.3137V6.88031C10.3137 5.67258 10.6015 5.05947 12.1747 5.05947L14.4568 5.05866C14.7508 5.05866 14.9892 4.82005 14.9892 4.526V0.538097C14.9892 0.244318 14.7511 0.00597886 14.4573 0.00543533Z"
                fill="#4268B2"
              />
            </Svg>
          </View>

          <Text style={styles.TextContainerBtnFbText}>Login with facebook</Text>
        </View>

        <View style={styles.TextContainerSignup}>
          <Text style={styles.TextContainerSignupText}>
            Don’t have a Smartrik account?
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={{color: '#1EA2F3'}}> Sign Up now</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </View>
  );
};

Login.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TextContainerSignup: {
    width: '100%',
    marginTop: Dimensions.get('window').height > 800 ? 64 : 40,
  },
  TextContainerSignupText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  authHeader: {
    width: '100%',
    backgroundColor: '#1EA2F3',
    borderBottomRightRadius: 33,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 21,
    paddingTop: 50,
  },
  authHeaderMainText: {
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'caros',
  },
  authHeaderMainTextPara: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'caros',
    marginTop: 20,
  },
  authBody: {
    paddingTop: Dimensions.get('window').height > 800 ? 117 : 20,
    paddingLeft: 16,
    paddingRight: 16,
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
  TextContainerBtnCover: {
    width: '100%',
    marginTop: 20,
  },
  TextContainerBtn: {
    width: '100%',
    height: 58,
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    // marginTop: 20,
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
  TextContainerFinger: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height > 800 ? 72 : 40,
  },
  TextContainerFingerText: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
    marginBottom: 20,
  },
  TextContainerBtnFb: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1EA2F3',
    borderStyle: 'solid',
    borderRadius: 20,
    height: 58,
    marginTop: Dimensions.get('window').height > 800 ? 57 : 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  TextContainerBtnFbText: {
    width: '100%',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
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
  TextContainerBtnFbImage: {
    position: 'absolute',
    left: 30,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
