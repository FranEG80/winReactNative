import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const SidebarTabs = ({navigation, descriptors}) => {
  const styles = {};
  const {routes, index} = navigation.state;

  return (
    <View style={styles.tabContainer}>
      {routes.map((route, tabIndex) => {
        const {routeName, params} = route;
        const {icon, tabName} = params || {};
        const color = tabIndex === index ? 'white' : 'grey';

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(routeName)}
            style={styles.tab}
            key={route.routeName}>
            {/* <Ionicons
              name={icon}
              size={24}
              color={color}
              style={{marginRight: 10}}
            /> */}
            <View style={{flex: 1}}>
              <Text style={{color}}>{tabName}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const SidebarTabsNavigator = ({navigation, descriptors}) => {
  const {routes, index} = navigation.state;
  const descriptor = descriptors[routes[index].key];

  const ActiveScreen = descriptor.getComponent();

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <SidebarTabs descriptors={descriptors} navigation={navigation} />
      <ActiveScreen navigation={descriptor.navigation} />
    </SafeAreaView>
  );
};
