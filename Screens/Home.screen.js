import React from 'react';
import {Text, View} from 'react-native';

function HomeScreen({navigation, route}) {
  console.log({navigation, route});
  return (
    <View style={styles}>
      <Text>Home Screen!</Text>
    </View>
  );
}

export default HomeScreen;

const styles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
};
