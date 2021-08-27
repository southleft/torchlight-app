import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import { navigationRef } from './RootNavigation';
import ChildLogin from './ChildLogin';
import ElderLogin from './ElderLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} ref={navigationRef}>
      <SafeAreaView style={styles.safe}>
        <Stack.Navigator initialRouteName="Torchlight" headerMode="screen">
          <Stack.Screen
            name="Torchlight"
            component={Homepage}
            options={{ header: () => <Header type="logo" /> }}
          />
          <Stack.Screen
            name="ChildLogin"
            component={ChildLogin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ElderLogin"
            component={ElderLogin}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
