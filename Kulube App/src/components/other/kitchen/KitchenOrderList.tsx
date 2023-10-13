import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

import {getOrders} from '../../../api/getResponse';
import appLabels from '../../../config/appLabels';
import colors from '../../../config/colors';
import constants from '../../../config/constants';
import {changeTimeFormat} from '../../../config/utilFuncs';
import {updateOrderStatus} from '../../../store/orders';
import Button from '../../Button';
import Divider from '../../Divider';
import OrderItems from '../counter/OrderItems';
import OrderStatus from '../counter/OrderStatus';

interface Props {
  status?: string;
}

export default function KitchenOrdersList({
  status = constants.beingPrepared,
}: Props) {
  const labels = appLabels;
  const ordersData = getOrders()?.data;
  const dispatch = useDispatch();

  const onBtnPress = (orderId: number) => {
    const newStatus =
      status === constants.beingPrepared ? constants.ready : constants.served;
    dispatch(updateOrderStatus({id: orderId, newStatus}));
  };

  const items = () => {
    switch (status) {
      case constants.beingPrepared:
        return {
          btnIconName: 'foodReady',
          btnTitle: 'Mark as Ready',
          btnBgColor: colors.primary,
        };
      case constants.ready:
        return {
          btnIconName: 'foodServed',
          btnTitle: 'Mark as Served',
          btnBgColor: colors.success,
        };
      default:
        return {
          btnIconName: 'foodReady',
          btnTitle: 'Mark as Ready',
          btnBgColor: colors.primary,
        };
    }
  };

  return (
    <View style={styles.container}>
      {ordersData?.map(
        (order: any) =>
          order.status === status && (
            <View key={order.id} style={styles.itemContainer}>
              <View style={[styles.hCont, {marginBottom: ms(2)}]}>
                <Text style={styles.orderNumTxt}>
                  {labels.Order}#: {order.orderNumber}
                </Text>
                <OrderStatus status={order.status} labels={labels} />
              </View>
              <Text style={styles.sTxt}>
                {changeTimeFormat(order.submittedDate)}
              </Text>
              <View style={[styles.hCont, {marginTop: ms(15)}]}>
                <Text style={styles.sTxt}>
                  {labels.Table}#: {order.tableNumber}
                </Text>
                <Text style={styles.sTxt}>{order.empFullName}</Text>
              </View>
              <Divider mv={15} />
              <Button
                title={items().btnTitle}
                onPress={() => onBtnPress(order.id)}
                style={styles.statusBtn}
                backgroundColor={items().btnBgColor}
                customIconName={items().btnIconName as any}
              />
              <OrderItems items={order.orderItems} expandItems={true} />
            </View>
          ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: ms(15),
  },
  itemContainer: {
    backgroundColor: colors.white,
    marginHorizontal: ms(15),
    marginTop: ms(15),
    borderRadius: 15,
    elevation: ms(7),
    padding: ms(10),
  },
  hCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumTxt: {
    fontSize: constants.largeTxtSize,
    fontWeight: constants.semibold,
    color: colors.black,
  },
  sTxt: {
    fontSize: constants.normalTxtSize,
  },
  statusBtn: {
    flex: 1,
  },
});
