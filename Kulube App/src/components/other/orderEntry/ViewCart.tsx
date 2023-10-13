import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import appLabels from '../../../config/appLabels';
import colors from '../../../config/colors';
import constants from '../../../config/constants';
import {
  getScreenDimensions,
  handleBackBtnPress,
} from '../../../config/customHooks';
import Divider from '../../Divider';

interface Props {
  cartItems: any;
  menuCategory: any;
  setSelectedItem: any;
  setActiveCategory: any;
  onSubmit: any;
  totals: any;
}

export default function ViewCart(props: Props) {
  const {
    cartItems,
    menuCategory,
    setSelectedItem,
    setActiveCategory,
    onSubmit,
    totals,
  } = props;
  const labels = appLabels;
  const dimensions = getScreenDimensions();
  const [viewCart, setViewCart] = useState(false);
  let totalItems = 0;
  cartItems?.map((e: any) => {
    e.qty > 0 && (totalItems = totalItems + e.qty);
  });

  handleBackBtnPress(() => setViewCart(false));

  const onItemPress = (index: number, item: any, ci: number) => {
    setActiveCategory(ci);
    setSelectedItem({index, item});
  };

  return (
    <>
      {!viewCart ? (
        totalItems > 0 && (
          <TouchableOpacity
            style={styles.viewCartButton}
            onPress={() => setViewCart(true)}>
            <Text style={styles.viewCartTxt}>
              {labels.View_cart} ({totalItems})
            </Text>
          </TouchableOpacity>
        )
      ) : (
        <>
          <TouchableOpacity
            style={styles.backdrop}
            onPress={() => setViewCart(false)}
          />
          <View
            style={[
              styles.contentContainer,
              {maxHeight: dimensions?.height - ms(100)},
            ]}>
            <TouchableOpacity
              style={styles.arrowDownIcon}
              onPress={() => setViewCart(false)}>
              <Icon
                name="keyboard-arrow-down"
                size={ms(30)}
                color={colors.primary}
              />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{paddingHorizontal: ms(15)}}>
              {menuCategory?.map((ce: any, ci: number) =>
                ce?.menuItems?.map(
                  (e: any, i: number) =>
                    e?.qty > 0 && (
                      <TouchableOpacity
                        key={e.id}
                        onPress={() => onItemPress(i, e, ci)}>
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
                          <Text style={styles.itemTxt}>
                            {labels.moneySign + e.total}
                          </Text>
                        </View>
                        <Divider mv={15} />
                      </TouchableOpacity>
                    ),
                ),
              )}
              <View style={styles.totalCont}>
                <Text style={styles.sItemTxt}>{labels.Subtotal}</Text>
                <Text style={styles.sItemTxt}>
                  {labels.moneySign + totals?.subtotal}
                </Text>
              </View>
              <View style={styles.totalCont}>
                <Text style={styles.sItemTxt}>
                  {labels.Taxes} ({constants.taxLabel})
                </Text>
                <Text style={styles.sItemTxt}>
                  {labels.moneySign + totals?.taxes}
                </Text>
              </View>
              <View style={styles.totalCont}>
                <Text style={styles.itemTxt}>{labels.Total}</Text>
                <Text style={styles.itemTxt}>
                  {labels.moneySign + totals?.total}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.submitOrderBtn}
                onPress={onSubmit}>
                <Text style={styles.viewCartTxt}>{labels.Submit_Order}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewCartButton: {
    position: 'absolute',
    bottom: ms(15),
    right: ms(15),
    left: ms(15),
    backgroundColor: colors.primary,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: ms(10),
    elevation: ms(10),
  },
  submitOrderBtn: {
    backgroundColor: colors.primary,
    paddingVertical: ms(10),
    elevation: ms(10),
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: ms(15),
  },
  viewCartTxt: {
    fontSize: constants.largeTxtSize,
    color: colors.white,
    fontWeight: constants.semibold,
  },
  backdrop: {
    backgroundColor: colors.black50,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  contentContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  arrowDownIcon: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    elevation: ms(10),
    borderRadius: 50,
    padding: ms(1),
    marginTop: ms(5),
    marginBottom: ms(15),
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
  totalCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ms(15),
  },
});
