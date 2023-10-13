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
import {payOrder} from '../../../store/orders';
import Button from '../../Button';
import Divider from '../../Divider';
import OrderItems from './OrderItems';
import OrderStatus from './OrderStatus';

interface Props {
  onDelete: any;
  viewPaid?: boolean;
  collapse?: boolean;
}

export default function CounterOrdersList({
  onDelete,
  viewPaid = false,
  collapse = false,
}: Props) {
  const labels = appLabels;
  const ordersData = getOrders()?.data;
  const dispatch = useDispatch();
  const [collapseSection, setCollapseSection] = useState(collapse);

  const onCollect = (orderId: number) => {
    dispatch(payOrder({id: orderId}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.sectionTitleCont}
        onPress={() => setCollapseSection(!collapseSection)}>
        <Text style={styles.sectionTitle}>
          {viewPaid ? labels.Paid_Orders : labels.Unpaid_Orders}
        </Text>
        <Icon
          name={collapseSection ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
          size={ms(25)}
          color={colors.primary}
        />
      </TouchableOpacity>
      {!collapseSection &&
        ordersData?.map(
          (order: any) =>
            order.isPaid === viewPaid && (
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
                <View style={styles.hCont}>
                  <Text style={styles.sTxt}>
                    {labels.Subtotal}: {labels.moneySign + order?.subtotal}
                  </Text>
                  <Text style={styles.sTxt}>
                    {labels.Taxes} ({constants.taxLabel}):{' '}
                    {labels.moneySign + order?.taxes}
                  </Text>
                  <Text style={styles.itemTxt}>
                    {labels.Total}: {labels.moneySign + order?.total}
                  </Text>
                </View>
                <View style={styles.btnsContainer}>
                  <Button
                    onPress={() => onDelete(order.id)}
                    backgroundColor={colors.danger}
                    iconName="delete"
                  />
                  {!order.isPaid && (
                    <Button
                      title={`${labels.COLLECT} ${
                        labels.moneySign + order.total
                      }`}
                      onPress={() => onCollect(order.id)}
                      style={styles.collectBtn}
                      iconName="hand-coin"
                    />
                  )}
                </View>
                <OrderItems items={order.orderItems} />
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
  sectionTitleCont: {
    marginStart: ms(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: constants.exLargeTxtSize,
    fontWeight: constants.semibold,
    color: colors.primary,
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
  itemTxt: {
    fontSize: constants.mediumTxtSize,
    color: colors.black,
  },
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(15),
  },
  collectBtn: {
    flex: 1,
    marginLeft: ms(10),
  },
});
