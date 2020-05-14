import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Tab.Navigator>
        <Tab.Screen name="Cream 1" component={FirstScreen} />
        <Tab.Screen name="Cream 2" component={SecondScreen} />
        <Tab.Screen name="Cream 3" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
