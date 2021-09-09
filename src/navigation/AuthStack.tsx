import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as screens from '../constants/screens';

import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import QuotesScreen from '../screens/quotes';

export type RootAuthStackParamList = {
  [screens.LoginScreen]: undefined;

  [screens.QuotesScreen]: undefined;
};

const Stack = createNativeStackNavigator<RootAuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={screens.LoginScreen}
        component={LoginScreen}
      />

      <Stack.Screen
        options={{ title: 'Get Quotes' }}
        name={screens.QuotesScreen}
        component={QuotesScreen}
      />
    </Stack.Navigator>
  );
}
