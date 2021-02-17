import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../Screens/Home.screen';
import SettingsScreen from '../Screens/Settings.screen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

export default MyDrawer;
