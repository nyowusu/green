import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
  // return (
  //     a<View style={styles.container}>
  //   <Text>Open up App.tsx to start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>
  // )

  return <NavigationContainer></NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
