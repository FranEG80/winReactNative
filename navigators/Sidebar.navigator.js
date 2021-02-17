import React from 'react';
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

function SidebarNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors} = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  console.log({
    state,
    navigation,
    descriptors,
    children,
    screenOptions,
    initialRouteName,
  });
  const index = state.index;

  //console.log(descriptors);

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.tabContainer}>
          {state.routes.map((route, tabIndex) => {
            const {options} = descriptors[route.key];
            const {name, params} = route;
            const {icon} = params || {icon: 'search'};
            const color = route.key === index ? 'white' : 'grey';
            // console.log(name, color, route, params);
            const Icono = options.tabBarIcon;
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!event.defaultPrevented) {
                    navigation.dispatch({
                      ...TabActions.jumpTo(route.name),
                      target: state.key,
                    });
                  }
                }}
                style={[
                  styles.tab,
                  {
                    // flex: 1,
                    backgroundColor: '#626262',
                    // borderColor: 'white',
                    // borderWidth: 1,
                  },
                ]}>
                {Icono && <Icono name={icon} size={48} color={'white'} />}
                {/* <Text style={{color: '#fff'}}>{route.name}</Text> */}
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{flex: 1, backgroundColor: '#ddd'}}>
          {descriptors[state.routes[state.index].key].render()}
        </View>
      </View>
    </NavigationHelpersContext.Provider>
  );
}

export const createSidebarNavigator = createNavigatorFactory(SidebarNavigator);

const styles = StyleSheet.create({
  header: {position: 'absolute', top: 0},
  tab: {
    // // flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '10%',
    width: '100%',
    marginBottom: '2%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingVertical: 15,
  },
  tabContainer: {
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    //   flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: 64,
    backgroundColor: '#313131',
  },
});
