import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';

const Device = (props): Node => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderTitle}>Devices</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerBody}>
        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Svg
                  width="26"
                  height="29"
                  viewBox="0 0 26 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M23.4 0H2.6C1.91044 0 1.24912 0.254612 0.761522 0.707825C0.273928 1.16104 0 1.77573 0 2.41667V24.1667C0 24.8076 0.273928 25.4223 0.761522 25.8755C1.24912 26.3287 1.91044 26.5833 2.6 26.5833V27.7917C2.6 28.1121 2.73696 28.4195 2.98076 28.6461C3.22456 28.8727 3.55522 29 3.9 29C4.24478 29 4.57544 28.8727 4.81924 28.6461C5.06304 28.4195 5.2 28.1121 5.2 27.7917V26.5833H20.8V27.7917C20.8 28.1121 20.937 28.4195 21.1808 28.6461C21.4246 28.8727 21.7552 29 22.1 29C22.4448 29 22.7754 28.8727 23.0192 28.6461C23.263 28.4195 23.4 28.1121 23.4 27.7917V26.5833C24.0896 26.5833 24.7509 26.3287 25.2385 25.8755C25.7261 25.4223 26 24.8076 26 24.1667V2.41667C26 1.77573 25.7261 1.16104 25.2385 0.707825C24.7509 0.254612 24.0896 0 23.4 0ZM6.5 10.875C6.5 11.1955 6.36304 11.5028 6.11924 11.7294C5.87544 11.956 5.54478 12.0833 5.2 12.0833C4.85522 12.0833 4.52456 11.956 4.28076 11.7294C4.03696 11.5028 3.9 11.1955 3.9 10.875V6.04167C3.9 5.7212 4.03696 5.41385 4.28076 5.18725C4.52456 4.96064 4.85522 4.83333 5.2 4.83333C5.54478 4.83333 5.87544 4.96064 6.11924 5.18725C6.36304 5.41385 6.5 5.7212 6.5 6.04167V10.875Z"
                    fill="#1EA2F3"
                  />
                </Svg>
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Fridge</Text>
                <Text style={styles.containerDeviceTextPara}>Kitchen</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Svg
                  width="32"
                  height="25"
                  viewBox="0 0 32 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M28.8 0H2.4C1.76348 0 1.15303 0.263392 0.702944 0.732233C0.252856 1.20107 0 1.83696 0 2.5V22.5C0 23.163 0.252856 23.7989 0.702944 24.2678C1.15303 24.7366 1.76348 25 2.4 25H28.8C29.4365 25 30.047 24.7366 30.4971 24.2678C30.9471 23.7989 31.2 23.163 31.2 22.5V2.5C31.2 1.83696 30.9471 1.20107 30.4971 0.732233C30.047 0.263392 29.4365 0 28.8 0ZM7.2 20H4.8C4.48174 20 4.17652 19.8683 3.95147 19.6339C3.72643 19.3995 3.6 19.0815 3.6 18.75C3.6 18.4185 3.72643 18.1005 3.95147 17.8661C4.17652 17.6317 4.48174 17.5 4.8 17.5H7.2C7.51826 17.5 7.82348 17.6317 8.04853 17.8661C8.27357 18.1005 8.4 18.4185 8.4 18.75C8.4 19.0815 8.27357 19.3995 8.04853 19.6339C7.82348 19.8683 7.51826 20 7.2 20ZM7.2 16.25H4.8C4.48174 16.25 4.17652 16.1183 3.95147 15.8839C3.72643 15.6495 3.6 15.3315 3.6 15C3.6 14.6685 3.72643 14.3505 3.95147 14.1161C4.17652 13.8817 4.48174 13.75 4.8 13.75H7.2C7.51826 13.75 7.82348 13.8817 8.04853 14.1161C8.27357 14.3505 8.4 14.6685 8.4 15C8.4 15.3315 8.27357 15.6495 8.04853 15.8839C7.82348 16.1183 7.51826 16.25 7.2 16.25ZM6 10C5.52533 10 5.06131 9.85338 4.66663 9.57867C4.27195 9.30397 3.96434 8.91352 3.78269 8.45671C3.60104 7.99989 3.55351 7.49723 3.64612 7.01227C3.73872 6.52732 3.9673 6.08186 4.30294 5.73223C4.63859 5.3826 5.06623 5.1445 5.53178 5.04804C5.99734 4.95157 6.4799 5.00108 6.91844 5.1903C7.35698 5.37952 7.73181 5.69995 7.99553 6.11107C8.25924 6.5222 8.4 7.00555 8.4 7.5C8.4 8.16304 8.14714 8.79893 7.69706 9.26777C7.24697 9.73661 6.63652 10 6 10ZM27.6 18.75C27.6 19.413 27.3471 20.0489 26.8971 20.5178C26.447 20.9866 25.8365 21.25 25.2 21.25H15.6C14.9635 21.25 14.353 20.9866 13.9029 20.5178C13.4529 20.0489 13.2 19.413 13.2 18.75V6.25C13.2 5.58696 13.4529 4.95107 13.9029 4.48223C14.353 4.01339 14.9635 3.75 15.6 3.75H25.2C25.8365 3.75 26.447 4.01339 26.8971 4.48223C27.3471 4.95107 27.6 5.58696 27.6 6.25V18.75Z"
                    fill="#1EA2F3"
                  />
                </Svg>
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Microwave</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Svg
                  width="19"
                  height="26"
                  viewBox="0 0 19 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M3.99733 2H13.9973C14.2625 2 14.5169 1.89464 14.7044 1.70711C14.892 1.51957 14.9973 1.26522 14.9973 1C14.9973 0.734784 14.892 0.48043 14.7044 0.292893C14.5169 0.105357 14.2625 0 13.9973 0H3.99733C3.73211 0 3.47776 0.105357 3.29022 0.292893C3.10269 0.48043 2.99733 0.734784 2.99733 1C2.99733 1.26522 3.10269 1.51957 3.29022 1.70711C3.47776 1.89464 3.73211 2 3.99733 2Z"
                    fill="#1EA2F3"
                  />
                  <Path
                    d="M16.7773 5H14.9973V4C14.9973 3.73478 14.892 3.48043 14.7044 3.29289C14.5169 3.10536 14.2625 3 13.9973 3H3.99733C3.73211 3 3.47776 3.10536 3.29022 3.29289C3.10269 3.48043 2.99733 3.73478 2.99733 4V16C2.99733 16.2652 3.10269 16.5196 3.29022 16.7071C3.47776 16.8946 3.73211 17 3.99733 17H13.9973C14.2625 17 14.5169 16.8946 14.7044 16.7071C14.892 16.5196 14.9973 16.2652 14.9973 16V13H16.7673C17.3588 13 17.926 12.7651 18.3442 12.3468C18.7624 11.9286 18.9973 11.3614 18.9973 10.77V7.24C18.9974 6.64936 18.7641 6.08262 18.3483 5.66311C17.9326 5.2436 17.3679 5.00527 16.7773 5ZM16.9973 10.77C16.9973 10.831 16.9731 10.8895 16.93 10.9326C16.8868 10.9758 16.8283 11 16.7673 11H14.9973V7H16.7673C16.8283 7 16.8868 7.02423 16.93 7.06737C16.9731 7.1105 16.9973 7.169 16.9973 7.23V10.77Z"
                    fill="#1EA2F3"
                  />
                  <Path
                    d="M17.8773 24.53L14.6773 18.53C14.5923 18.3703 14.4656 18.2367 14.3106 18.1434C14.1556 18.05 13.9782 18.0005 13.7973 18H4.19734C4.01643 18.0005 3.83905 18.05 3.68408 18.1434C3.52911 18.2367 3.40236 18.3703 3.31734 18.53L0.117336 24.53C0.0363054 24.6822 -0.0040062 24.8527 0.000314094 25.0251C0.00463439 25.1974 0.05344 25.3657 0.141993 25.5136C0.230546 25.6616 0.355838 25.7841 0.505708 25.8693C0.655577 25.9545 0.824933 25.9995 0.997336 26H16.9973C17.1697 25.9995 17.3391 25.9545 17.489 25.8693C17.6388 25.7841 17.7641 25.6616 17.8527 25.5136C17.9412 25.3657 17.99 25.1974 17.9944 25.0251C17.9987 24.8527 17.9584 24.6822 17.8773 24.53ZM6.99734 23H5.99734C5.73212 23 5.47777 22.8946 5.29023 22.7071C5.10269 22.5196 4.99734 22.2652 4.99734 22C4.99734 21.7348 5.10269 21.4804 5.29023 21.2929C5.47777 21.1054 5.73212 21 5.99734 21H6.99734C7.26255 21 7.51691 21.1054 7.70444 21.2929C7.89198 21.4804 7.99734 21.7348 7.99734 22C7.99734 22.2652 7.89198 22.5196 7.70444 22.7071C7.51691 22.8946 7.26255 23 6.99734 23Z"
                    fill="#1EA2F3"
                  />
                </Svg>
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Blender</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('DeviceDetails')}>
            <View style={styles.containerDeviceBox}>
              <View style={styles.containerDeviceImage}>
                <Svg
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M20 4V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9H20V4ZM16 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H16C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7C17 7.26522 16.8946 7.51957 16.7071 7.70711C16.5196 7.89464 16.2652 8 16 8ZM16 5H14C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5Z"
                    fill="#1EA2F3"
                  />
                  <Path
                    d="M0 25C0 25.2652 0.105357 25.5196 0.292893 25.7071C0.48043 25.8946 0.734784 26 1 26H19C19.2652 26 19.5196 25.8946 19.7071 25.7071C19.8946 25.5196 20 25.2652 20 25V11H0V25Z"
                    fill="#1EA2F3"
                  />
                </Svg>
              </View>
              <View style={styles.containerDeviceText}>
                <Text style={styles.containerDeviceTextHead}>Dishwasher</Text>
              </View>
              <View style={styles.containerDeviceValue}>
                <Text style={styles.containerDeviceValueText}>234 W</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Svg
                width="26"
                height="29"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M23.4 0H2.6C1.91044 0 1.24912 0.254612 0.761522 0.707825C0.273928 1.16104 0 1.77573 0 2.41667V24.1667C0 24.8076 0.273928 25.4223 0.761522 25.8755C1.24912 26.3287 1.91044 26.5833 2.6 26.5833V27.7917C2.6 28.1121 2.73696 28.4195 2.98076 28.6461C3.22456 28.8727 3.55522 29 3.9 29C4.24478 29 4.57544 28.8727 4.81924 28.6461C5.06304 28.4195 5.2 28.1121 5.2 27.7917V26.5833H20.8V27.7917C20.8 28.1121 20.937 28.4195 21.1808 28.6461C21.4246 28.8727 21.7552 29 22.1 29C22.4448 29 22.7754 28.8727 23.0192 28.6461C23.263 28.4195 23.4 28.1121 23.4 27.7917V26.5833C24.0896 26.5833 24.7509 26.3287 25.2385 25.8755C25.7261 25.4223 26 24.8076 26 24.1667V2.41667C26 1.77573 25.7261 1.16104 25.2385 0.707825C24.7509 0.254612 24.0896 0 23.4 0ZM6.5 10.875C6.5 11.1955 6.36304 11.5028 6.11924 11.7294C5.87544 11.956 5.54478 12.0833 5.2 12.0833C4.85522 12.0833 4.52456 11.956 4.28076 11.7294C4.03696 11.5028 3.9 11.1955 3.9 10.875V6.04167C3.9 5.7212 4.03696 5.41385 4.28076 5.18725C4.52456 4.96064 4.85522 4.83333 5.2 4.83333C5.54478 4.83333 5.87544 4.96064 6.11924 5.18725C6.36304 5.41385 6.5 5.7212 6.5 6.04167V10.875Z"
                  fill="#969696"
                />
              </Svg>
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Fridge</Text>
              <Text style={styles.containerDeviceTextPara}>Kitchen</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Svg
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M28.8 0H2.4C1.76348 0 1.15303 0.263392 0.702944 0.732233C0.252856 1.20107 0 1.83696 0 2.5V22.5C0 23.163 0.252856 23.7989 0.702944 24.2678C1.15303 24.7366 1.76348 25 2.4 25H28.8C29.4365 25 30.047 24.7366 30.4971 24.2678C30.9471 23.7989 31.2 23.163 31.2 22.5V2.5C31.2 1.83696 30.9471 1.20107 30.4971 0.732233C30.047 0.263392 29.4365 0 28.8 0ZM7.2 20H4.8C4.48174 20 4.17652 19.8683 3.95147 19.6339C3.72643 19.3995 3.6 19.0815 3.6 18.75C3.6 18.4185 3.72643 18.1005 3.95147 17.8661C4.17652 17.6317 4.48174 17.5 4.8 17.5H7.2C7.51826 17.5 7.82348 17.6317 8.04853 17.8661C8.27357 18.1005 8.4 18.4185 8.4 18.75C8.4 19.0815 8.27357 19.3995 8.04853 19.6339C7.82348 19.8683 7.51826 20 7.2 20ZM7.2 16.25H4.8C4.48174 16.25 4.17652 16.1183 3.95147 15.8839C3.72643 15.6495 3.6 15.3315 3.6 15C3.6 14.6685 3.72643 14.3505 3.95147 14.1161C4.17652 13.8817 4.48174 13.75 4.8 13.75H7.2C7.51826 13.75 7.82348 13.8817 8.04853 14.1161C8.27357 14.3505 8.4 14.6685 8.4 15C8.4 15.3315 8.27357 15.6495 8.04853 15.8839C7.82348 16.1183 7.51826 16.25 7.2 16.25ZM6 10C5.52533 10 5.06131 9.85338 4.66663 9.57867C4.27195 9.30397 3.96434 8.91352 3.78269 8.45671C3.60104 7.99989 3.55351 7.49723 3.64612 7.01227C3.73872 6.52732 3.9673 6.08186 4.30294 5.73223C4.63859 5.3826 5.06623 5.1445 5.53178 5.04804C5.99734 4.95157 6.4799 5.00108 6.91844 5.1903C7.35698 5.37952 7.73181 5.69995 7.99553 6.11107C8.25924 6.5222 8.4 7.00555 8.4 7.5C8.4 8.16304 8.14714 8.79893 7.69706 9.26777C7.24697 9.73661 6.63652 10 6 10ZM27.6 18.75C27.6 19.413 27.3471 20.0489 26.8971 20.5178C26.447 20.9866 25.8365 21.25 25.2 21.25H15.6C14.9635 21.25 14.353 20.9866 13.9029 20.5178C13.4529 20.0489 13.2 19.413 13.2 18.75V6.25C13.2 5.58696 13.4529 4.95107 13.9029 4.48223C14.353 4.01339 14.9635 3.75 15.6 3.75H25.2C25.8365 3.75 26.447 4.01339 26.8971 4.48223C27.3471 4.95107 27.6 5.58696 27.6 6.25V18.75Z"
                  fill="#969696"
                />
              </Svg>
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Microwave</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Svg
                width="19"
                height="26"
                viewBox="0 0 19 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M3.99733 2H13.9973C14.2625 2 14.5169 1.89464 14.7044 1.70711C14.892 1.51957 14.9973 1.26522 14.9973 1C14.9973 0.734784 14.892 0.48043 14.7044 0.292893C14.5169 0.105357 14.2625 0 13.9973 0H3.99733C3.73211 0 3.47776 0.105357 3.29022 0.292893C3.10269 0.48043 2.99733 0.734784 2.99733 1C2.99733 1.26522 3.10269 1.51957 3.29022 1.70711C3.47776 1.89464 3.73211 2 3.99733 2Z"
                  fill="#969696"
                />
                <Path
                  d="M16.7773 5H14.9973V4C14.9973 3.73478 14.892 3.48043 14.7044 3.29289C14.5169 3.10536 14.2625 3 13.9973 3H3.99733C3.73211 3 3.47776 3.10536 3.29022 3.29289C3.10269 3.48043 2.99733 3.73478 2.99733 4V16C2.99733 16.2652 3.10269 16.5196 3.29022 16.7071C3.47776 16.8946 3.73211 17 3.99733 17H13.9973C14.2625 17 14.5169 16.8946 14.7044 16.7071C14.892 16.5196 14.9973 16.2652 14.9973 16V13H16.7673C17.3588 13 17.926 12.7651 18.3442 12.3468C18.7624 11.9286 18.9973 11.3614 18.9973 10.77V7.24C18.9974 6.64936 18.7641 6.08262 18.3483 5.66311C17.9326 5.2436 17.3679 5.00527 16.7773 5ZM16.9973 10.77C16.9973 10.831 16.9731 10.8895 16.93 10.9326C16.8868 10.9758 16.8283 11 16.7673 11H14.9973V7H16.7673C16.8283 7 16.8868 7.02423 16.93 7.06737C16.9731 7.1105 16.9973 7.169 16.9973 7.23V10.77Z"
                  fill="#969696"
                />
                <Path
                  d="M17.8773 24.53L14.6773 18.53C14.5923 18.3703 14.4656 18.2367 14.3106 18.1434C14.1556 18.05 13.9782 18.0005 13.7973 18H4.19734C4.01643 18.0005 3.83905 18.05 3.68408 18.1434C3.52911 18.2367 3.40236 18.3703 3.31734 18.53L0.117336 24.53C0.0363054 24.6822 -0.0040062 24.8527 0.000314094 25.0251C0.00463439 25.1974 0.05344 25.3657 0.141993 25.5136C0.230546 25.6616 0.355838 25.7841 0.505708 25.8693C0.655577 25.9545 0.824933 25.9995 0.997336 26H16.9973C17.1697 25.9995 17.3391 25.9545 17.489 25.8693C17.6388 25.7841 17.7641 25.6616 17.8527 25.5136C17.9412 25.3657 17.99 25.1974 17.9944 25.0251C17.9987 24.8527 17.9584 24.6822 17.8773 24.53ZM6.99734 23H5.99734C5.73212 23 5.47777 22.8946 5.29023 22.7071C5.10269 22.5196 4.99734 22.2652 4.99734 22C4.99734 21.7348 5.10269 21.4804 5.29023 21.2929C5.47777 21.1054 5.73212 21 5.99734 21H6.99734C7.26255 21 7.51691 21.1054 7.70444 21.2929C7.89198 21.4804 7.99734 21.7348 7.99734 22C7.99734 22.2652 7.89198 22.5196 7.70444 22.7071C7.51691 22.8946 7.26255 23 6.99734 23Z"
                  fill="#969696"
                />
              </Svg>
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Blender</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerDevice}>
          <View style={styles.containerDeviceBox}>
            <View style={styles.containerDeviceImage}>
              <Svg
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M20 4V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V9H20V4ZM16 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H16C16.2652 6 16.5196 6.10536 16.7071 6.29289C16.8946 6.48043 17 6.73478 17 7C17 7.26522 16.8946 7.51957 16.7071 7.70711C16.5196 7.89464 16.2652 8 16 8ZM16 5H14C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5Z"
                  fill="#969696"
                />
                <Path
                  d="M0 25C0 25.2652 0.105357 25.5196 0.292893 25.7071C0.48043 25.8946 0.734784 26 1 26H19C19.2652 26 19.5196 25.8946 19.7071 25.7071C19.8946 25.5196 20 25.2652 20 25V11H0V25Z"
                  fill="#969696"
                />
              </Svg>
            </View>
            <View style={styles.containerDeviceText}>
              <Text style={styles.containerDeviceTextHead}>Dishwasher</Text>
            </View>
            <View style={styles.containerDeviceLabel}>
              <View style={styles.containerDeviceLabelValue}>
                <Text style={styles.containerDeviceLabelValueText}>Off</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerAddNew}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('NewDevice')}>
          <View style={styles.containerAddNewbtn}>
            <Text style={styles.containerAddNewbtnText}>+ Add New Device</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Device.navigationOptions = navigationData => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    position: 'relative',
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
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
  },
  containerDevice: {
    marginBottom: 30,
  },
  containerDeviceBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerDeviceImage: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceText: {
    width: Dimensions.get('window').width - 144,
    paddingLeft: 10,
  },
  containerDeviceTextHead: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#252F41',
    fontFamily: 'caros',
  },
  containerDeviceTextPara: {
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: '#969696',
    fontFamily: 'caros',
  },
  containerDeviceValue: {
    width: 82,
    height: 32,
    backgroundColor: '#BFE4FB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceValueText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#1EA2F3',
    fontFamily: 'caros',
  },
  containerDeviceLabel: {
    width: 82,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerDeviceLabelValue: {
    width: 57,
    height: 32,
    backgroundColor: '#BFBFBF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDeviceLabelValueText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#787878',
    fontFamily: 'caros',
  },
  containerAddNew: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    right: 0,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerAddNewbtn: {
    width: 178,
    height: 43,
    backgroundColor: '#1EA2F3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAddNewbtnText: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
    fontFamily: 'caros',
  },
});

export default Device;
