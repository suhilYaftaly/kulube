import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import routes from './routes';
import HomeScreen from '../screens/orders/OrderHomeScreen';
import OrderEntry from '../screens/orders/orderEntry/OrderEntry';

const {Navigator, Screen} = createNativeStackNavigator();

export default function OrdersStackNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={routes.ORDERS_HOME_SCREEN} component={HomeScreen} />
      <Screen name={routes.ORDER_ENTRY_SCREEN} component={OrderEntry} />
    </Navigator>
  );
}
