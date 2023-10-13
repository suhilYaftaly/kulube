import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from './routes';
import KitchenHomeScreen from '../screens/kitchen/KitchenHomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function KitchenStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={routes.KITCHEN_HOME_SCREEN} component={KitchenHomeScreen} />
    </Navigator>
  );
}
