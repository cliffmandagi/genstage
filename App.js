import React from 'react'
import { View, Text, Button, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigation from './screens/MainNavigation';

export default function App() {
  return (
    <MainNavigation />
  )
}
