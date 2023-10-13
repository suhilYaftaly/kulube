import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from './routes';
import ManagementHomeScreen from '../screens/management/ManagementHomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function ManagementStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name={routes.MANAGEMENT_HOME_SCREEN}
        component={ManagementHomeScreen}
      />
    </Navigator>
  );
}
