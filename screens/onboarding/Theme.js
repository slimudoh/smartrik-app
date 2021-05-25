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
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const Theme = (props): Node => {
  return (
    <View style={styles.setupContainer}>
      <View style={styles.setupContainerHeader}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Setup')}>
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
      <View style={styles.setupContainerBody}>
        <Text style={styles.setupContainerBodyText}>Choose a theme</Text>
        <Text style={styles.setupContainerBodyPara}>Dark Mode</Text>
        <View style={styles.setupContainerBodyParaImage}>
          <Svg
            width={93}
            height={150}
            viewBox="0 0 133 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G filter="url(#prefix__filter0_d)">
              <Path
                d="M66.333 20a46.333 46.333 0 0146.334 46.333v85.254a46.333 46.333 0 01-92.667 0V66.333A46.333 46.333 0 0166.333 20z"
                fill="url(#prefix__paint0_radial)"
              />
            </G>
            <G filter="url(#prefix__filter1_d)">
              <Path
                d="M66.613 186.91a40.002 40.002 0 01-28.373-11.753 39.992 39.992 0 01-8.6-12.755 39.873 39.873 0 01-3.153-15.619V71.246c0-5.417 1.06-10.672 3.153-15.618a39.995 39.995 0 018.6-12.755 39.995 39.995 0 0112.754-8.6 39.875 39.875 0 0115.619-3.153c5.417 0 10.672 1.06 15.618 3.153a39.995 39.995 0 0112.755 8.6 39.995 39.995 0 018.6 12.755 39.877 39.877 0 013.153 15.618v75.537a39.875 39.875 0 01-3.153 15.619 39.991 39.991 0 01-8.6 12.755 40.002 40.002 0 01-28.373 11.753z"
                fill="url(#prefix__paint1_linear)"
              />
              <Path
                d="M66.613 32.047a38.951 38.951 0 00-15.258 3.08 39.068 39.068 0 00-12.46 8.401 39.072 39.072 0 00-11.482 27.718v75.537a39.074 39.074 0 0011.481 27.719c3.601 3.6 7.794 6.427 12.461 8.401a38.944 38.944 0 0015.258 3.08 38.945 38.945 0 0015.258-3.08 39.076 39.076 0 0012.46-8.401 39.086 39.086 0 008.402-12.461 38.96 38.96 0 003.079-15.258V71.246a38.962 38.962 0 00-3.079-15.257 39.084 39.084 0 00-8.402-12.461 39.07 39.07 0 00-12.46-8.402 38.952 38.952 0 00-15.258-3.08zm0-1.854c22.673 0 41.053 18.38 41.053 41.053v75.537c0 22.673-18.38 41.053-41.053 41.053s-41.053-18.38-41.053-41.053V71.246c0-22.673 18.38-41.053 41.053-41.053z"
                fill="#CBCBCB"
              />
            </G>
            <G filter="url(#prefix__filter2_d)">
              <Path
                d="M106.924 71.189v3.27a41.112 41.112 0 00-2.336-7.384 41.374 41.374 0 00-8.897-13.196 41.377 41.377 0 00-13.196-8.897 41.257 41.257 0 00-16.16-3.263 41.255 41.255 0 00-16.16 3.263 41.373 41.373 0 00-13.197 8.897 41.373 41.373 0 00-8.897 13.196 41.189 41.189 0 00-2.336 7.385v-3.271c0-5.48 1.073-10.795 3.19-15.8a40.457 40.457 0 018.698-12.901 40.458 40.458 0 0112.902-8.7 40.337 40.337 0 0115.8-3.189c5.48 0 10.795 1.073 15.799 3.19a40.458 40.458 0 0112.902 8.699 40.471 40.471 0 0111.888 28.7z"
                fill="#AFAFAF"
              />
              <Path
                d="M106.46 70.853a39.853 39.853 0 00-3.152-15.283 39.997 39.997 0 00-8.6-12.755 39.997 39.997 0 00-28.373-11.753A40 40 0 0037.96 42.815a39.997 39.997 0 00-8.6 12.755 39.856 39.856 0 00-3.151 15.283 41.887 41.887 0 011.445-3.958 41.837 41.837 0 018.996-13.343 41.836 41.836 0 0113.343-8.996 41.716 41.716 0 0116.34-3.3c5.668 0 11.166 1.11 16.341 3.3 5 2.114 9.49 5.14 13.344 8.996a41.831 41.831 0 018.996 13.343 41.78 41.78 0 011.445 3.958zm.928.336v12.02a40.92 40.92 0 00-12.024-29.003 40.913 40.913 0 00-13.05-8.797 40.794 40.794 0 00-15.98-3.226 40.793 40.793 0 00-15.979 3.226 40.913 40.913 0 00-13.049 8.798 40.913 40.913 0 00-8.798 13.049 40.797 40.797 0 00-3.226 15.98V71.189a40.796 40.796 0 013.226-15.98 40.918 40.918 0 018.798-13.049 40.92 40.92 0 0113.05-8.798 40.797 40.797 0 0115.979-3.226 40.798 40.798 0 0115.98 3.226 40.921 40.921 0 0113.049 8.798 40.925 40.925 0 0112.024 29.029z"
                fill="#CBCBCB"
              />
            </G>
            <G filter="url(#prefix__filter3_d)">
              <Path
                d="M37.607 109.423h55.771"
                stroke="#6A6A6A"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </G>
            <G filter="url(#prefix__filter4_d)">
              <Path
                d="M53.332 153.44H78.38"
                stroke="#4D4D4D"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </G>
            <Path
              d="M66.334 76.99c6.909 0 12.51-5.6 12.51-12.51s-5.601-12.51-12.51-12.51c-6.91 0-12.51 5.6-12.51 12.51s5.6 12.51 12.51 12.51z"
              stroke="#4D4D4D"
              strokeWidth={3}
            />
            <Defs>
              <RadialGradient
                id="prefix__paint0_radial"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(58.936 0 0 88.9415 66.333 90.022)">
                <Stop stopColor="#9D9D9D" />
                <Stop offset={1} stopColor="#fff" />
              </RadialGradient>
              <LinearGradient
                id="prefix__paint1_linear"
                x1={66.613}
                y1={34.859}
                x2={66.613}
                y2={186.91}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#EBEBEB" />
                <Stop offset={0.497} stopColor="#AFAFAF" />
                <Stop offset={1} stopColor="#EBEBEB" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
        <Text style={styles.setupContainerBodyPara}>Light Mode</Text>
        <TouchableOpacity
          style={styles.setupContainerBodyBtnCover}
          onPress={() => props.navigation.navigate('Login')}>
          <View style={styles.setupContainerBodyBtn}>
            <Text style={styles.setupContainerBodyBtnText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Theme.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  setupContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  setupContainerHeader: {
    width: '100%',
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
  setupContainerBody: {
    width: '100%',
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  setupContainerBodyText: {
    maxWidth: 241,
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros_medium',
    marginBottom: 77,
  },
  setupContainerBodyPara: {
    maxWidth: 288,
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 36,
    textAlign: 'center',
    color: '#252F41',
    margin: 'auto',
    fontFamily: 'caros',
  },
  setupContainerBodyParaImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  setupContainerBodyBtnCover: {
    width: '100%',
    marginTop: 70,
  },
  setupContainerBodyBtn: {
    width: '100%',
    height: 58,
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setupContainerBodyBtnText: {
    fontFamily: 'caros',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  TextContainerInstall: {
    marginTop: 20,
  },
  TextContainerInstallText: {
    fontFamily: 'caros',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: '#1EA2F3',
  },
});

export default Theme;
