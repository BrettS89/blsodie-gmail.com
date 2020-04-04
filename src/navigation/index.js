import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../shared/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

// Logo
import Logo from '../shared/components/Logo';

// Main nav
import Spots from '../components/Spots';
import Spot from '../components/Spot';
import Account from '../components/Account';
import UseSubscriptions from '../components/UseSubscriptions';

// No bottom tab nav
import Login from '../components/Login';
import Register from '../components/Register';

// Auth nav
import Auth from '../components/Auth';


const mainNav = createBottomTabNavigator({
  // Spot: {
  //   screen: createStackNavigator({
  //     Spot: {
  //       screen: Spot,
  //       navigationOptions: {
  //         headerLeft: () => <Logo />,
  //         headerRight: () => <View><Text>Right</Text></View>,
  //         headerTitle: () => null,
  //       },
  //     },
  //   }),
  //   navigationOptions: {
  //     // tabBarIcon: ({ tintColor }) => (
  //     //   <Icon name="search" size={24} color={tintColor}/>
  //     // )
  //   },
  // },
  Spots: {
    screen: createStackNavigator({
      Spots: {
        screen: Spots,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => <View><Text>Right</Text></View>,
          headerTitle: () => null,
        },
      },
      Spot: {
        screen: Spot,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => <View><Text>Right</Text></View>,
          headerTitle: () => null,
        },
      },
    }),
    navigationOptions: {
      title: 'Find Spots',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={24} color={tintColor}/>
      )
    }
  },
  UseSubscriptions: {
    screen: createStackNavigator({
      UseSubscriptions: {
        screen: UseSubscriptions,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => <View><Text>Right</Text></View>,
          headerTitle: () => null,
        },
      },
    }),
    navigationOptions: {
      title: 'Subscriptions',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="store" size={23} color={tintColor}/>
      )
    }
  },
  Account: {
    screen: createStackNavigator({
      Account: {
        screen: Account,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => <View><Text>Right</Text></View>,
          headerTitle: () => null,
        },
      },
    }),
    navigationOptions: {
      title: 'Account',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="account-circle" size={30} color={tintColor}/>
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

const noBottomNav = createBottomTabNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
},
{
  tabBarOptions: {
    activeTintColor: Colors.main,
    style: {
      display: 'none'
    }
  },
});

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
  },
},
{
  tabBarOptions: {
    activeTintColor: Colors.main,
    style: {
      display: 'none'
    }
  },
});

const rootNavigator = createSwitchNavigator({
  AuthNav: authNav,
  NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'AuthNav',
});

export default createAppContainer(rootNavigator);
