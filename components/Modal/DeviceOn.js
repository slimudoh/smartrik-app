import React, {useEffect, useState, useRef} from 'react';
import type {Node} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing,
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

const DeviceOn = (props): Node => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deviceStatusLeftNav, setDeviceStatusLeftNav] = useState(false);
  const [deviceStatusRightNav, setDeviceStatusRightNav] = useState(false);
  const [deviceStatus, setDeviceStatus] = useState('connected');
  const [deviceAdded, setDeviceAdded] = useState(false);

  const rotateAnimate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!props.connect) {
      return;
    }

    setModalVisible(props.showModal);
    const deviceOffTimer = setTimeout(() => {
      setDeviceStatus('off');
      setDeviceStatusLeftNav(true);
    }, 2000);
    const deviceOnTimer = setTimeout(() => {
      setDeviceStatus('on');
      setDeviceStatusRightNav(true);
    }, 5000);
    const deviceAddedTimer = setTimeout(() => {
      setDeviceAdded(true);
    }, 8000);

    Animated.loop(
      Animated.timing(rotateAnimate, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    return () => {
      clearTimeout(deviceOffTimer);
      clearTimeout(deviceOnTimer);
      clearTimeout(deviceAddedTimer);
    };
  }, [props.showModal]);

  const closeModalFromParent = () => {
    props.onpress();
  };

  const spin = rotateAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={styles.modal}>
        {deviceAdded ? (
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerClose}>
              <TouchableWithoutFeedback onPress={closeModalFromParent}>
                <Text style={styles.modalContainerCloseText}>
                  <Svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M1 1.44141L9 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <Path
                      d="M9 1.44141L1 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </Svg>{' '}
                  Close
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.modalContainerNav}>
              <View style={styles.modalContainerNavBox}>
                <View style={styles.modalContainerNavBallActive}></View>
                <View style={styles.modalContainerNavLineActive}></View>
                <View style={styles.modalContainerNavBallActive}></View>
                <View style={styles.modalContainerNavLineActive}></View>
                <View style={styles.modalContainerNavBallActive}></View>
              </View>
            </View>

            <Text style={styles.modalContainerHeader}>PS 5 Added</Text>

            <View style={styles.modalContainerAdded}>
              <Svg
                width="100"
                height="70"
                viewBox="0 0 100 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M79.8462 0.384766H20.1539C9.03847 0.384766 0 9.42324 0 20.5386V56.1541C0 63.5771 6.03847 69.6156 13.4616 69.6156C20.8846 69.6156 26.9231 63.5771 26.9231 56.1541C26.9231 52.9617 29.5 50.3848 32.6923 50.3848H67.3078C70.5001 50.3848 73.077 52.9617 73.077 56.1541C73.077 63.5771 79.1155 69.6156 86.5386 69.6156C93.9616 69.6156 100 63.5771 100 56.1541V20.5386C100 9.42324 90.9616 0.384766 79.8462 0.384766ZM69.2308 26.3463H65.3847C63.8078 26.3463 62.5001 25.0386 62.5001 23.4617C62.5001 21.8848 63.8078 20.5771 65.3847 20.5771H69.2308C70.8078 20.5771 72.1155 21.8848 72.1155 23.4617C72.1155 25.0386 70.8078 26.3463 69.2308 26.3463ZM79.8078 35.0002C79.8078 36.5771 78.5001 37.8848 76.9232 37.8848C75.3462 37.8848 74.0385 36.5771 74.0385 35.0002V31.154C74.0385 29.5771 75.3462 28.2694 76.9232 28.2694C78.5001 28.2694 79.8078 29.5771 79.8078 31.154V35.0002ZM79.8078 15.7694C79.8078 17.3463 78.5001 18.654 76.9232 18.654C75.3462 18.654 74.0385 17.3463 74.0385 15.7694V11.9232C74.0385 10.3463 75.3462 9.03862 76.9232 9.03862C78.5001 9.03862 79.8078 10.3463 79.8078 11.9232V15.7694ZM88.4616 26.3463H84.6155C83.0386 26.3463 81.7309 25.0386 81.7309 23.4617C81.7309 21.8848 83.0386 20.5771 84.6155 20.5771H88.4616C90.0386 20.5771 91.3463 21.8848 91.3463 23.4617C91.3463 25.0386 90.0386 26.3463 88.4616 26.3463Z"
                  fill="#1EA2F3"
                />
              </Svg>
            </View>
            <View style={styles.modalContainerPara}>
              <Text style={styles.modalContainerParaText}>
                The monitor has successfully identified your device
              </Text>
            </View>
            <TouchableOpacity
              style={styles.TextContainerBtnCover}
              onPress={() => props.navigation.navigate('Device')}>
              <View style={styles.TextContainerBtn}>
                <Text style={styles.TextContainerBtnText}>
                  Check my Devices
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerClose}>
              <TouchableWithoutFeedback onPress={closeModalFromParent}>
                <Text style={styles.modalContainerCloseText}>
                  <Svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <Path
                      d="M1 1.44141L9 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <Path
                      d="M9 1.44141L1 10.1925"
                      stroke="#252F41"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </Svg>{' '}
                  Close
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.modalContainerNav}>
              <View style={styles.modalContainerNavBox}>
                <View style={styles.modalContainerNavBallActive}></View>
                <View
                  style={
                    deviceStatusLeftNav
                      ? styles.modalContainerNavLineActive
                      : styles.modalContainerNavLine
                  }></View>
                <View
                  style={
                    deviceStatusLeftNav
                      ? styles.modalContainerNavBallActive
                      : styles.modalContainerNavBall
                  }></View>
                <View
                  style={
                    deviceStatusRightNav
                      ? styles.modalContainerNavLineActive
                      : styles.modalContainerNavLine
                  }></View>
                <View
                  style={
                    deviceStatusRightNav
                      ? styles.modalContainerNavBallActive
                      : styles.modalContainerNavBall
                  }></View>
              </View>
            </View>
            {deviceStatus === 'off' ? (
              <Text style={styles.modalContainerHeader}>
                Turn off the Device
              </Text>
            ) : (
              <Text style={styles.modalContainerHeader}>
                Turn on the Device
              </Text>
            )}
            <View style={styles.modalContainerRoller}>
              {deviceStatus === 'connected' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Animated.Image
                    source={require('../../assets/images/roller.png')}
                    style={{
                      width: 142,
                      height: 142,
                      transform: [{rotate: spin}],
                    }}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Svg
                      width={54}
                      height={103}
                      viewBox="0 0 82 132"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G filter="url(#prefix__filter0_d)">
                        <Path
                          d="M41 14a27 27 0 0127 27v49.68a27.001 27.001 0 01-54 0V41a27 27 0 0127-27z"
                          fill="url(#prefix__paint0_radial)"
                        />
                      </G>
                      <G filter="url(#prefix__filter1_d)">
                        <Path
                          d="M41.163 111.264a23.32 23.32 0 01-16.534-6.848 23.31 23.31 0 01-6.849-16.535V43.864a23.304 23.304 0 016.849-16.534 23.305 23.305 0 0116.534-6.849 23.305 23.305 0 0116.534 6.849 23.305 23.305 0 016.849 16.534v44.019a23.31 23.31 0 01-6.849 16.534 23.32 23.32 0 01-16.534 6.848z"
                          fill="url(#prefix__paint1_linear)"
                        />
                        <Path
                          d="M41.163 21.02a22.769 22.769 0 00-16.152 6.69 22.767 22.767 0 00-6.691 16.153v44.019a22.765 22.765 0 006.69 16.153 22.78 22.78 0 007.262 4.895 22.696 22.696 0 008.89 1.794c3.085 0 6.077-.603 8.892-1.794a22.78 22.78 0 007.261-4.896 22.765 22.765 0 006.69-16.153V43.864a22.767 22.767 0 00-6.69-16.152 22.77 22.77 0 00-16.152-6.69zm0-1.08c13.212 0 23.923 10.711 23.923 23.923v44.019c0 13.212-10.71 23.922-23.923 23.922-13.212 0-23.923-10.71-23.923-23.922V43.863c0-13.212 10.71-23.923 23.923-23.923z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter2_d)">
                        <Path
                          d="M64.654 43.83v1.905a24.113 24.113 0 00-6.546-11.993A24.11 24.11 0 0041 26.657a24.11 24.11 0 00-17.107 7.086 24.109 24.109 0 00-6.546 11.992V43.83a23.577 23.577 0 016.928-16.725A23.577 23.577 0 0141 20.176a23.577 23.577 0 0116.725 6.928 23.575 23.575 0 016.928 16.725z"
                          fill="#AFAFAF"
                        />
                        <Path
                          d="M64.383 43.634a23.306 23.306 0 00-6.848-16.338 23.306 23.306 0 00-16.534-6.85 23.308 23.308 0 00-16.534 6.849 23.306 23.306 0 00-6.848 16.339 24.379 24.379 0 016.084-10.082A24.377 24.377 0 0141 26.387a24.377 24.377 0 0117.298 7.165 24.38 24.38 0 016.084 10.082zm.54.195v7.005a23.842 23.842 0 00-7.007-16.9 23.84 23.84 0 00-16.915-7.007 23.84 23.84 0 00-16.916 7.007 23.843 23.843 0 00-7.007 16.916v-7.02a23.845 23.845 0 017.007-16.916A23.846 23.846 0 0141 19.905a23.847 23.847 0 0116.916 7.007 23.844 23.844 0 017.007 16.916z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter3_d)">
                        <Path
                          d="M24.26 66.11h32.5"
                          stroke="#6A6A6A"
                          strokeLinecap="round"
                        />
                      </G>
                      <G filter="url(#prefix__filter4_d)">
                        <Path
                          d="M33.424 91.76H48.02"
                          stroke="#4D4D4D"
                          strokeWidth={3}
                          strokeLinecap="round"
                        />
                      </G>
                      <Path
                        d="M41 47.21a7.29 7.29 0 100-14.58 7.29 7.29 0 000 14.58z"
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
                          gradientTransform="matrix(34.344 0 0 51.8292 41 54.804)">
                          <Stop stopColor="#9D9D9D" />
                          <Stop offset={1} stopColor="#fff" />
                        </RadialGradient>
                        <LinearGradient
                          id="prefix__paint1_linear"
                          x1={41.163}
                          y1={22.659}
                          x2={41.163}
                          y2={111.264}
                          gradientUnits="userSpaceOnUse">
                          <Stop stopColor="#EBEBEB" />
                          <Stop offset={0.497} stopColor="#AFAFAF" />
                          <Stop offset={1} stopColor="#EBEBEB" />
                        </LinearGradient>
                      </Defs>
                    </Svg>
                  </View>
                </View>
              ) : null}
              {deviceStatus === 'off' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Animated.Image
                    source={require('../../assets/images/rolleroff.png')}
                    style={{
                      width: 142,
                      height: 142,
                      transform: [{rotate: spin}],
                    }}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Svg
                      width={54}
                      height={103}
                      viewBox="0 0 82 132"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G filter="url(#prefix__filter0_d)">
                        <Path
                          d="M41 14a27 27 0 0127 27v49.68a27.001 27.001 0 01-54 0V41a27 27 0 0127-27z"
                          fill="url(#prefix__paint0_radial)"
                        />
                      </G>
                      <G filter="url(#prefix__filter1_d)">
                        <Path
                          d="M41.163 111.264a23.32 23.32 0 01-16.534-6.848 23.31 23.31 0 01-6.849-16.535V43.864a23.304 23.304 0 016.849-16.534 23.305 23.305 0 0116.534-6.849 23.305 23.305 0 0116.534 6.849 23.305 23.305 0 016.849 16.534v44.019a23.31 23.31 0 01-6.849 16.534 23.32 23.32 0 01-16.534 6.848z"
                          fill="url(#prefix__paint1_linear)"
                        />
                        <Path
                          d="M41.163 21.02a22.769 22.769 0 00-16.152 6.69 22.767 22.767 0 00-6.691 16.153v44.019a22.765 22.765 0 006.69 16.153 22.78 22.78 0 007.262 4.895 22.696 22.696 0 008.89 1.794c3.085 0 6.077-.603 8.892-1.794a22.78 22.78 0 007.261-4.896 22.765 22.765 0 006.69-16.153V43.864a22.767 22.767 0 00-6.69-16.152 22.77 22.77 0 00-16.152-6.69zm0-1.08c13.212 0 23.923 10.711 23.923 23.923v44.019c0 13.212-10.71 23.922-23.923 23.922-13.212 0-23.923-10.71-23.923-23.922V43.863c0-13.212 10.71-23.923 23.923-23.923z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter2_d)">
                        <Path
                          d="M64.654 88.02v-1.906a24.112 24.112 0 01-6.546 11.993A24.115 24.115 0 0141 105.193a24.115 24.115 0 01-17.107-7.086 24.11 24.11 0 01-6.546-11.993v1.906a23.573 23.573 0 006.928 16.725A23.577 23.577 0 0041 111.673a23.579 23.579 0 0016.725-6.928 23.573 23.573 0 006.928-16.725z"
                          fill="#AFAFAF"
                        />
                        <Path
                          d="M64.383 88.216a23.297 23.297 0 01-6.848 16.338 23.306 23.306 0 01-16.534 6.849 23.307 23.307 0 01-16.534-6.849 23.295 23.295 0 01-6.848-16.338 24.379 24.379 0 006.084 10.082A24.38 24.38 0 0041 105.463a24.38 24.38 0 0017.298-7.165 24.38 24.38 0 006.084-10.082zm.54-.196v-7.005a23.842 23.842 0 01-7.007 16.9 23.844 23.844 0 01-16.915 7.008 23.844 23.844 0 01-16.916-7.007A23.843 23.843 0 0117.078 81v7.02a23.84 23.84 0 007.007 16.916A23.846 23.846 0 0041 111.943a23.847 23.847 0 0016.916-7.007 23.84 23.84 0 007.007-16.916z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter3_d)">
                        <Path
                          d="M24.26 66.11h32.5"
                          stroke="#6A6A6A"
                          strokeLinecap="round"
                        />
                      </G>
                      <G filter="url(#prefix__filter4_d)">
                        <Path
                          d="M33.424 91.76H48.02"
                          stroke="#4D4D4D"
                          strokeWidth={3}
                          strokeLinecap="round"
                        />
                      </G>
                      <Path
                        d="M41 47.21a7.29 7.29 0 100-14.58 7.29 7.29 0 000 14.58z"
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
                          gradientTransform="matrix(34.344 0 0 51.8292 41 54.804)">
                          <Stop stopColor="#9D9D9D" />
                          <Stop offset={1} stopColor="#fff" />
                        </RadialGradient>
                        <LinearGradient
                          id="prefix__paint1_linear"
                          x1={41.163}
                          y1={22.659}
                          x2={41.163}
                          y2={111.264}
                          gradientUnits="userSpaceOnUse">
                          <Stop stopColor="#EBEBEB" />
                          <Stop offset={0.497} stopColor="#AFAFAF" />
                          <Stop offset={1} stopColor="#EBEBEB" />
                        </LinearGradient>
                      </Defs>
                    </Svg>
                  </View>
                </View>
              ) : null}
              {deviceStatus === 'on' ? (
                <View style={styles.modalContainerRollerImage}>
                  <Animated.Image
                    source={require('../../assets/images/roller.png')}
                    style={{
                      width: 142,
                      height: 142,
                      transform: [{rotate: spin}],
                    }}
                  />
                  <View style={styles.modalContainerRollerSwitch}>
                    <Svg
                      width={54}
                      height={103}
                      viewBox="0 0 82 132"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <G filter="url(#prefix__filter0_d)">
                        <Path
                          d="M41 14a27 27 0 0127 27v49.68a27.001 27.001 0 01-54 0V41a27 27 0 0127-27z"
                          fill="url(#prefix__paint0_radial)"
                        />
                      </G>
                      <G filter="url(#prefix__filter1_d)">
                        <Path
                          d="M41.163 111.264a23.32 23.32 0 01-16.534-6.848 23.31 23.31 0 01-6.849-16.535V43.864a23.304 23.304 0 016.849-16.534 23.305 23.305 0 0116.534-6.849 23.305 23.305 0 0116.534 6.849 23.305 23.305 0 016.849 16.534v44.019a23.31 23.31 0 01-6.849 16.534 23.32 23.32 0 01-16.534 6.848z"
                          fill="url(#prefix__paint1_linear)"
                        />
                        <Path
                          d="M41.163 21.02a22.769 22.769 0 00-16.152 6.69 22.767 22.767 0 00-6.691 16.153v44.019a22.765 22.765 0 006.69 16.153 22.78 22.78 0 007.262 4.895 22.696 22.696 0 008.89 1.794c3.085 0 6.077-.603 8.892-1.794a22.78 22.78 0 007.261-4.896 22.765 22.765 0 006.69-16.153V43.864a22.767 22.767 0 00-6.69-16.152 22.77 22.77 0 00-16.152-6.69zm0-1.08c13.212 0 23.923 10.711 23.923 23.923v44.019c0 13.212-10.71 23.922-23.923 23.922-13.212 0-23.923-10.71-23.923-23.922V43.863c0-13.212 10.71-23.923 23.923-23.923z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter2_d)">
                        <Path
                          d="M64.654 43.83v1.905a24.113 24.113 0 00-6.546-11.993A24.11 24.11 0 0041 26.657a24.11 24.11 0 00-17.107 7.086 24.109 24.109 0 00-6.546 11.992V43.83a23.577 23.577 0 016.928-16.725A23.577 23.577 0 0141 20.176a23.577 23.577 0 0116.725 6.928 23.575 23.575 0 016.928 16.725z"
                          fill="#AFAFAF"
                        />
                        <Path
                          d="M64.383 43.634a23.306 23.306 0 00-6.848-16.338 23.306 23.306 0 00-16.534-6.85 23.308 23.308 0 00-16.534 6.849 23.306 23.306 0 00-6.848 16.339 24.379 24.379 0 016.084-10.082A24.377 24.377 0 0141 26.387a24.377 24.377 0 0117.298 7.165 24.38 24.38 0 016.084 10.082zm.54.195v7.005a23.842 23.842 0 00-7.007-16.9 23.84 23.84 0 00-16.915-7.007 23.84 23.84 0 00-16.916 7.007 23.843 23.843 0 00-7.007 16.916v-7.02a23.845 23.845 0 017.007-16.916A23.846 23.846 0 0141 19.905a23.847 23.847 0 0116.916 7.007 23.844 23.844 0 017.007 16.916z"
                          fill="#CBCBCB"
                        />
                      </G>
                      <G filter="url(#prefix__filter3_d)">
                        <Path
                          d="M24.26 66.11h32.5"
                          stroke="#6A6A6A"
                          strokeLinecap="round"
                        />
                      </G>
                      <G filter="url(#prefix__filter4_d)">
                        <Path
                          d="M33.424 91.76H48.02"
                          stroke="#4D4D4D"
                          strokeWidth={3}
                          strokeLinecap="round"
                        />
                      </G>
                      <Path
                        d="M41 47.21a7.29 7.29 0 100-14.58 7.29 7.29 0 000 14.58z"
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
                          gradientTransform="matrix(34.344 0 0 51.8292 41 54.804)">
                          <Stop stopColor="#9D9D9D" />
                          <Stop offset={1} stopColor="#fff" />
                        </RadialGradient>
                        <LinearGradient
                          id="prefix__paint1_linear"
                          x1={41.163}
                          y1={22.659}
                          x2={41.163}
                          y2={111.264}
                          gradientUnits="userSpaceOnUse">
                          <Stop stopColor="#EBEBEB" />
                          <Stop offset={0.497} stopColor="#AFAFAF" />
                          <Stop offset={1} stopColor="#EBEBEB" />
                        </LinearGradient>
                      </Defs>
                    </Svg>
                  </View>
                </View>
              ) : null}
            </View>
            <View style={styles.modalContainerPara}>
              <Text style={styles.modalContainerParaText}>
                When your Monitor identifies the Device, you will be asked to
                proceed to the next step
              </Text>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  modalContainerClose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainerCloseText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 10,
  },
  modalContainerNavBox: {
    width: '100%',
    maxWidth: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainerNavBall: {
    width: 20,
    height: 20,
    backgroundColor: '#BFE4FB',
    borderRadius: 60,
  },
  modalContainerNavBallActive: {
    width: 20,
    height: 20,
    backgroundColor: '#1EA2F3',
    borderRadius: 60,
  },
  modalContainerNavLine: {
    width: 70,
    height: 5,
    backgroundColor: '#fff',
  },
  modalContainerNavLineActive: {
    width: 70,
    height: 5,
    backgroundColor: '#1EA2F3',
  },
  modalContainerHeader: {
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 38,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerPara: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerParaText: {
    maxWidth: 288,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    color: '#252F41',
    fontFamily: 'caros',
  },
  modalContainerRoller: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalContainerAdded: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  modalContainerRollerImage: {
    width: 142,
    height: 142,
    position: 'relative',
  },
  modalContainerRollerSwitch: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainerBtnCover: {
    width: '100%',
    marginTop: 45,
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

export default DeviceOn;
