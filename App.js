/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {  NavigationContainer } from '@react-navigation/native';
import  {createSidebarNavigator}  from './navigators/Sidebar.navigator';

import HomeScreen from './Screens/Home.screen';
import SettingsScreen from './Screens/Settings.screen';


const SidebarNavigator = createSidebarNavigator();

const App = () => (
  <NavigationContainer>
    <SidebarNavigator.Navigator>
      <SidebarNavigator.Screen name="Home" component={HomeScreen} title='Casa'/>
      <SidebarNavigator.Screen name="Settings" component={SettingsScreen}/>
    </SidebarNavigator.Navigator>
  </NavigationContainer>
  
)

export default App;
