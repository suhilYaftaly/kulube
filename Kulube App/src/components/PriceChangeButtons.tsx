import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, ms} from 'react-native-size-matters';
import colors from '../config/colors';
import constants from '../config/constants';

interface Props {
  qty: number;
  onIncrease: any;
  onDecrease: any;
}

export default function PriceChangeButtons({
  qty,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, qty === 0 && {backgroundColor: colors.greyMedium}]}
        onPress={qty !== 0 ? onDecrease : null}>
        <Text style={styles.btnTxt}>−</Text>
      </TouchableOpacity>
      <Text style={styles.qtyTxt}>{qty}</Text>
      <TouchableOpacity style={styles.btn} onPress={onIncrease}>
        <Text style={styles.btnTxt}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: moderateScale(30),
    height: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: moderateScale(7),
  },
  qtyTxt: {
    fontSize: constants.exLargeTxtSize,
    marginHorizontal: moderateScale(5),
    fontWeight: '600',
    color: colors.black,
  },
  btnTxt: {
    fontSize: ms(20),
    color: colors.white,
    fontWeight: '600',
  },
});
