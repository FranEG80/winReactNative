/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createSidebarNavigator} from './navigators/Sidebar.navigator';

import HomeScreen from './Screens/Home.screen';
import SettingsScreen from './Screens/Settings.screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

const SidebarNavigator = createSidebarNavigator();

const App = () => (
  <NavigationContainer>
    <View style={{width: '100%', height: 50, backgroundColor: '#313131'}} />
    <SidebarNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'gears';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <SidebarNavigator.Screen
        name="Home"
        component={HomeScreen}
        title="Casa"
      />
      <SidebarNavigator.Screen name="Settings" component={SettingsScreen} />
    </SidebarNavigator.Navigator>
  </NavigationContainer>
);

export default App;
