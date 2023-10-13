import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import appLabels from '../../../config/appLabels';
import colors from '../../../config/colors';
import constants from '../../../config/constants';
import Divider from '../../Divider';

interface Props {
  items: any;
  expandItems?: boolean;
}

export default function OrderItems({items, expandItems = false}: Props) {
  const labels = appLabels;
  const [itemsVisible, setItemsVisible] = useState(expandItems);

  return (
    <>
      <TouchableOpacity
        style={styles.arrowIcon}
        onPress={() => setItemsVisible(!itemsVisible)}>
        <Icon
          name={itemsVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={ms(25)}
          color={colors.primary}
        />
      </TouchableOpacity>
      {itemsVisible &&
        items?.map((e: any, i: number) => (
          <View key={e.id}>
            <View style={styles.itemCont}>
              <Text style={styles.qtyTxt}>{e.qty}</Text>
              <View style={{flex: 1}}>
                <Text style={styles.itemTxt}>{e.name}</Text>
                {e.note !== undefined && e.note !== '' && (
                  <Text style={styles.sItemTxt}>
                    {labels.Note}: {e.note}
                  </Text>
                )}
              </View>
              <Text style={styles.itemTxt}>{labels.moneySign + e.total}</Text>
            </View>
            {items?.length > i + 1 ? (
              <Divider mv={15} />
            ) : (
              <Divider mv={5} lineHeight={0} />
            )}
          </View>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  arrowIcon: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: ms(10),
    borderRadius: 50,
    padding: ms(1),
    marginTop: ms(20),
  },
  itemCont: {
    flexDirection: 'row',
  },
  qtyTxt: {
    fontSize: constants.mediumTxtSize,
    color: colors.black,
    backgroundColor: colors.greyLight,
    paddingVertical: ms(3),
    paddingHorizontal: ms(8),
    marginRight: ms(10),
    alignSelf: 'flex-start',
  },
  itemTxt: {
    fontSize: constants.mediumTxtSize,
    color: colors.black,
  },
  sItemTxt: {
    fontSize: constants.mediumTxtSize,
  },
});
