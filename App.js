import { StyleSheet, Text, View } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './screens/Map';
import Game from './screens/Game';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Completely Original Game" component={Game} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}