import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from './routes';
import CounterHomeScreen from '../screens/counter/CounterHomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function CounterStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={routes.COUNTER_HOME_SCREEN} component={CounterHomeScreen} />
    </Navigator>
  );
}
