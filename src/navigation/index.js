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
import screenTitleStyle from '../shared/styles/screenTitle';
import SpotTitle from '../shared/components/SpotTitle';
import LocationSearch from '../shared/components/LocationSearch';

// Logo
import Logo from '../shared/components/Logo';
import HeaderBack from '../shared/components/HeaderBack';

// Main nav
import Spots from '../components/Spots';
import Spot from '../components/Spot';
import ConfirmSubscription from '../components/ConfirmSubscription';
import Account from '../components/Account';
import UseSubscriptions from '../components/UseSubscriptions';

// No bottom tab nav
import Login from '../components/Login';
import Register from '../components/Register';
import AddCreditCard from '../components/AddCreditcard';
import Legal from '../components/Legal';
import TermsAndConditions from '../components/TermsAndConditions';
import PrivacyPolicy from '../components/PrivacyPolicy';
import PhoneInput from '../components/PhoneInput';

// Auth nav
import Auth from '../components/Auth';


const mainNav = createBottomTabNavigator({
  Spots: {
    screen: createStackNavigator({
      Spots: {
        screen: Spots,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => <LocationSearch />,
          headerTitle: () => null,
        },
      },
      Spot: {
        screen: Spot,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Spots'} />,
          headerRight: () => null,
          headerTitle: () => <SpotTitle />,
        },
      },
    }),
    navigationOptions: {
      title: 'Find Spots',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={21} color={tintColor}/>
      )
    }
  },
  Subscriptions: {
    screen: createStackNavigator({
      Subscriptions: {
        screen: UseSubscriptions,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => null,
          headerTitle: () => null,
        },
      },
    }),
    navigationOptions: {
      title: 'My Subscriptions',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="tag" size={21} color={tintColor}/>
      )
    }
  },
  Account: {
    screen: createStackNavigator({
      Account: {
        screen: Account,
        navigationOptions: {
          headerLeft: () => <Logo />,
          headerRight: () => null,
          headerTitle: () => null,
        },
      },
    }),
    navigationOptions: {
      title: 'Account',
      activeTintColor: Colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="account-circle" size={28} color={tintColor}/>
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
  ConfirmSubscription: {
    screen: createStackNavigator({
      ConfirmSubscription: {
        screen: ConfirmSubscription,
        title: 'Confirm Subscription',
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Spot'} />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={screenTitleStyle.text}>Confirm Subscription</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'ConfirmSubscription',
    }
  },
  AddCreditCard: {
    screen: createStackNavigator({
      AddCreditCard: {
        screen: AddCreditCard,
        title: 'AddCreditCard',
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Account'} />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={screenTitleStyle.text}>Add Credit Card</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'AddCreditCard',
    }
  },
  Legal: {
    screen: createStackNavigator({
      Legal: {
        screen: Legal,
        title: 'Legal',
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Login'} />,
          headerRight: () => null,
          headerTitle: () => <View><Text style={screenTitleStyle.text}></Text></View>,
        },
      },
    }),
    navigationOptions: {
      // title: 'TnC',
    }
  },
  TermsAndConditions: {
    screen: createStackNavigator({
      TermsAndConditions: {
        screen: TermsAndConditions,
        title: 'TermsAndConditions',
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Legal'} />,
          headerRight: () => null,
        },
      },
    }),
    navigationOptions: {
      // title: 'TnC',
    }
  },
  PrivacyPolicy: {
    screen: createStackNavigator({
      PrivacyPolicy: {
        screen: PrivacyPolicy,
        title: 'PrivacyPolicy',
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Legal'} />,
          headerRight: () => null,
        },
      },
    }),
    navigationOptions: {
      // title: 'TnC',
    }
  },
  PhoneInput: {
    screen: createStackNavigator({
      PhoneInput: {
        screen: PhoneInput,
        title: 'PhoneInput',
        navigationOptions: {
          // headerLeft: () => <HeaderBack screen={'Spot'} />,
          headerRight: () => <View><Text>skip</Text></View>,
          headerTitle: () => <View><Text style={screenTitleStyle.text}>Phone Verification</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'PhoneInput',
    }
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
