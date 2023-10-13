import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

import {getUserProfile} from '../api/getResponse';
import colors from '../config/colors';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import KitchenStackNavigator from '../navigation/KitchenStackNavigator';
import LoginScreen from './login/LoginScreen';

export default function ScreensIndex() {
  const {data, showLoginScreen} = getUserProfile();

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      {showLoginScreen ? (
        <LoginScreen />
      ) : (
        <NavigationContainer>
          {data?.empId === '0000' ? (
            <KitchenStackNavigator />
          ) : (
            <BottomTabNavigator />
          )}
        </NavigationContainer>
      )}
    </>
  );
}
