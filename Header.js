import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingTop: 28,
  },
  text: {
    fontFamily: 'Lato',
  },
});
