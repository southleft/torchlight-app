import React from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import logo from './assets/torchlight-logo.png';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={{ width: 101, height: 29 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Platform.OS === "ios" ? 90 : 70, // fixing spacing on iOS
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingTop: Platform.OS === "ios" ? 30 : 0, // fix logo overlaying clock on iOS
  
  },
  text: {
    fontFamily: 'Lato',
  },
});
