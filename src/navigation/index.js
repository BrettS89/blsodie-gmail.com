import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../shared/styles/colors';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Spots from '../components/Spots';

const mainNav = createBottomTabNavigator({
  Spots: {
    screen: createStackNavigator({
      Spots: {
        screen: Spots,
        navigationOptions: {
          headerLeft: <View><Text>Paradyse</Text></View>,
          headerRight: <View><Text>Right</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'Spots',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Colors.main,
    style: {
      paddingVertical: 4,
    }
  },
});

const rootNavigator = createSwitchNavigator({
  // Auth: authNav,
  // NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'Main',
});

export default createAppContainer(rootNavigator);
