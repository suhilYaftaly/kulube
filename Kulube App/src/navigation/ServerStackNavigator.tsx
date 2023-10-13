import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from './routes';
import ServerHomeScreen from '../screens/server/ServerHomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function ServerStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={routes.SERVER_HOME_SCREEN} component={ServerHomeScreen} />
    </Navigator>
  );
}
