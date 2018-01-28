import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

import TeamCreateScreen from '../screens/TeamCreateScreen'
import TeamViewScreen from '../screens/TeamViewScreen'
import TeamDeleteScreen from '../screens/TeamDeleteScreen'
import AuthLoginScreen from '../screens/AuthLoginScreen'

const RootStackNavigator = StackNavigator(
  {
    Main:       { screen: MainTabNavigator  },
    CreateTeam: { screen: TeamCreateScreen },
    ViewTeam:   { screen: TeamViewScreen },
    DeleteTeam: { screen: TeamDeleteScreen },
    Login:      { screen: AuthLoginScreen },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {

  render() {
    return <RootStackNavigator />;
  }
}
