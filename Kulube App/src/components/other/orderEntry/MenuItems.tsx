import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from '../../../config/colors';
import constants from '../../../config/constants';
import PriceChangeButtons from '../../PriceChangeButtons';

interface Props {
  menuCategory: any;
  activeCategory: number;
  onQuantityChange: any;
  setSelectedItem: any;
}

export default function MenuItems({
  menuCategory,
  activeCategory,
  onQuantityChange,
  setSelectedItem,
}: Props) {
  return (
    <View style={styles.menuItemsCont}>
      {menuCategory?.[activeCategory]?.menuItems?.map((e: any, i: number) => (
        <View key={e.id} style={styles.menuItemCont}>
          <TouchableOpacity
            style={styles.leftContainer}
            onPress={() => setSelectedItem({index: i, item: e})}>
            <View style={styles.imgCont}>
              {e.img && e.img !== '' && (
                <Image style={styles.menuItemImg} source={e.img} />
              )}
            </View>
            <View style={styles.itemTxtCont}>
              <Text style={styles.itemNameTxt}>{e.name}</Text>
              <Text numberOfLines={2} style={styles.itemDescTxt}>
                {e.description}
              </Text>
              <Text style={styles.itemPriceTxt}>${e.price}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.qtySelectionCont}>
            <View>
              <PriceChangeButtons
                qty={e.qty}
                onIncrease={() => onQuantityChange(i, e.qty, e.price)}
                onDecrease={() => onQuantityChange(i, e.qty, e.price, false)}
              />
              <Text style={styles.totalTxt}>${e.total}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menuItemsCont: {
    marginHorizontal: moderateScale(15),
    marginBottom: moderateScale(60),
  },
  menuItemCont: {
    marginBottom: moderateScale(15),
    backgroundColor: colors.white,
    elevation: moderateScale(10),
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  imgCont: {
    width: moderateScale(80),
  },
  menuItemImg: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  itemTxtCont: {
    marginHorizontal: moderateScale(10),
    width: moderateScale(160),
  },
  itemNameTxt: {
    marginVertical: moderateScale(5),
    fontSize: constants.mediumTxtSize,
    fontWeight: '600',
    color: colors.black,
  },
  itemDescTxt: {
    fontSize: constants.smallTxtSize,
  },
  itemPriceTxt: {
    fontSize: constants.normalTxtSize,
    marginVertical: moderateScale(5),
    fontWeight: '600',
    color: colors.black,
  },
  qtySelectionCont: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: moderateScale(10),
  },
  totalTxt: {
    marginTop: moderateScale(5),
    color: colors.black,
    fontSize: constants.normalTxtSize,
    alignSelf: 'center',
  },
});
