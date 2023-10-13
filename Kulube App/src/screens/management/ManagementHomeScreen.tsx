import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomIcons from '../../components/CustomIcons';
import Divider from '../../components/Divider';
import ScreenHeader from '../../components/ScreenHeader';
import appLabels from '../../config/appLabels';
import colors from '../../config/colors';
import constants from '../../config/constants';

export default function ManagementHomeScreen({navigation}: any) {
  const labels = appLabels;

  const items = [
    {
      title: 'Orders',
      desc: 'View summary of all orders',
      icon: <CustomIcons name="inventory" size={50} color={colors.primary} />,
      onPress: () => console.log('Orders'),
    },
    {
      title: 'Employees',
      desc: 'Manage list of all employees',
      icon: <CustomIcons name="employee" size={50} color={colors.primary} />,
      onPress: () => console.log('Orders'),
    },
    {
      title: 'Menu',
      desc: 'Manage menu items',
      icon: <CustomIcons name="menu" size={50} color={colors.primary} />,
      onPress: () => console.log('Orders'),
    },
  ];

  return (
    <ScreenHeader title={labels.Management}>
      <ScrollView contentContainerStyle={{paddingTop: ms(25)}}>
        {items.map((e, i) => (
          <View key={i} style={styles.itemCont}>
            <TouchableOpacity style={styles.itemSubCont}>
              {e.icon}
              <View style={styles.txtCont}>
                <Text style={styles.titleTxt}>{e.title}</Text>
                <Text style={styles.descTxt}>{e.desc}</Text>
              </View>
              <Icon
                name="arrow-forward-ios"
                size={ms(20)}
                color={colors.black}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
      </ScrollView>
    </ScreenHeader>
  );
}

const styles = StyleSheet.create({
  itemCont: {
    marginHorizontal: ms(15),
  },
  itemSubCont: {
    flexDirection: 'row',
  },
  txtCont: {
    marginHorizontal: ms(20),
    flex: 1,
  },
  titleTxt: {
    fontSize: constants.exLargeTxtSize,
    fontWeight: constants.semibold,
    color: colors.black,
    marginBottom: ms(5),
  },
  descTxt: {
    fontSize: constants.normalTxtSize,
    color: colors.black,
  },
});
