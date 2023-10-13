import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import routes from './routes';
import colors from '../config/colors';
import constants from '../config/constants';
import appLabels from '../config/appLabels';
import CustomIcons from '../components/CustomIcons';
import {useKeyboardVisible} from '../config/customHooks';
import {getUserProfile} from '../api/getResponse';
import CounterStackNavigator from './CounterStackNavigator';
import OrdersStackNavigator from './OrdersStackNavigator';
import KitchenStackNavigator from './KitchenStackNavigator';
import ServerStackNavigator from './ServerStackNavigator';
import ManagementStackNavigator from './ManagementStackNavigator';

const {Navigator, Screen} = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const labels = appLabels;
  const keyboardVisible = useKeyboardVisible();
  const userRoles = getUserProfile()?.roles;
  const isManagementTabEnabled =
    userRoles.includes(constants.assistant_manager) ||
    userRoles.includes(constants.manager) ||
    userRoles.includes(constants.general_manager);

  const tabItem = (name: string, activeIndex = 0, index = 0) => {
    const txtStyle = activeIndex === index ? styles.activeTxt : styles.txt;
    const iconColor = activeIndex === index ? colors.primary : colors.iconColor;

    switch (name) {
      case routes.ORDERS_MAIN_SCREEN:
        return {
          txt: <Text style={txtStyle}>{labels.Order}</Text>,
          icon: <Icon name="cart" size={ms(25)} color={iconColor} />,
        };
      case routes.COUNTER_MAIN_SCREEN:
        return {
          txt: <Text style={txtStyle}>{labels.Counter}</Text>,
          icon: <Icon name="cash-register" size={ms(25)} color={iconColor} />,
        };
      case routes.KITCHEN_MAIN_SCREEN:
        return {
          txt: <Text style={txtStyle}>{labels.Kitchen}</Text>,
          icon: <Icon name="chef-hat" size={ms(25)} color={iconColor} />,
        };
      case routes.SERVER_MAIN_SCREEN:
        return {
          txt: <Text style={txtStyle}>{labels.Server}</Text>,
          icon: (
            <CustomIcons name="foodServed" size={ms(25)} color={iconColor} />
          ),
        };
      case routes.MANAGEMENT_MAIN_SCREEN:
        return (
          isManagementTabEnabled && {
            txt: <Text style={txtStyle}>{labels.Manage}</Text>,
            icon: (
              <CustomIcons name="management" size={ms(25)} color={iconColor} />
            ),
          }
        );
    }
  };

  const bottomTabBar = (props: any) => (
    <>
      {!keyboardVisible && (
        <View style={[styles.container, {paddingEnd: ms(25)}]}>
          {props.state.routes.map(
            (route: any, i: number) =>
              tabItem(route.name) && (
                <TouchableOpacity
                  style={styles.itemCont}
                  key={i}
                  onPress={() =>
                    props.navigation.navigate(props.state.routeNames[i])
                  }>
                  {tabItem(route.name, props.state.index, i)?.icon}
                  {tabItem(route.name, props.state.index, i)?.txt}
                </TouchableOpacity>
              ),
          )}
        </View>
      )}
    </>
  );

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => bottomTabBar(props)}>
      <Screen
        name={routes.ORDERS_MAIN_SCREEN}
        component={OrdersStackNavigator}
      />
      <Screen
        name={routes.COUNTER_MAIN_SCREEN}
        component={CounterStackNavigator}
      />
      <Screen
        name={routes.KITCHEN_MAIN_SCREEN}
        component={KitchenStackNavigator}
      />
      <Screen
        name={routes.SERVER_MAIN_SCREEN}
        component={ServerStackNavigator}
      />
      <Screen
        name={routes.MANAGEMENT_MAIN_SCREEN}
        component={ManagementStackNavigator}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: ms(5),
    backgroundColor: colors.white,
    elevation: ms(7),
    borderTopColor: colors.primary,
    borderTopWidth: ms(1),
  },
  itemCont: {
    alignItems: 'center',
    marginStart: ms(25),
  },
  txt: {
    fontSize: constants.normalTxtSize,
    color: colors.iconColor,
  },
  activeTxt: {
    fontSize: constants.normalTxtSize,
    fontWeight: constants.bold,
    color: colors.primary,
  },
});
