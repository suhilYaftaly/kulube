import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import colors from '../config/colors';
import constants from '../config/constants';

interface Props {
  items: any;
  itemKey: string;
  id?: string;
  activeItem: number;
  setActiveItem: any;
}

export default function ChipBar(props: Props) {
  const {items, itemKey, activeItem, setActiveItem, id} = props;

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryCont}>
      {items?.map((e: any, i: number) => (
        <TouchableOpacity
          key={e[id!] ? e[id!] : i}
          style={
            activeItem === i ? styles.activeCategoryChips : styles.categoryChips
          }
          onPress={() => setActiveItem(i)}>
          <Text
            style={activeItem === i ? styles.activeChipsTxt : styles.chipsTxt}>
            {e[itemKey]}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryCont: {
    paddingVertical: moderateScale(15),
    paddingEnd: moderateScale(15),
    paddingStart: moderateScale(10),
  },
  categoryChips: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    marginLeft: moderateScale(5),
  },
  activeCategoryChips: {
    backgroundColor: colors.primary,
    elevation: moderateScale(10),
    borderRadius: 15,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    marginLeft: moderateScale(5),
  },
  chipsTxt: {
    fontSize: constants.normalTxtSize,
    color: colors.black,
    fontWeight: '600',
  },
  activeChipsTxt: {
    fontSize: constants.normalTxtSize,
    color: colors.white,
    fontWeight: '600',
  },
});
