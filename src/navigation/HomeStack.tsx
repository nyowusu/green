import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as screens from '../constants/screens';

import HomeScreen from '../screens/home';

export type RootAuthStackParamList = {
  [screens.HomeScreen]: undefined;
};

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
