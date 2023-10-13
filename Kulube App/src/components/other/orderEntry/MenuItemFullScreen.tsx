import React, {useEffect} from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import appLabels from '../../../config/appLabels';
import colors from '../../../config/colors';
import constants from '../../../config/constants';
import {handleBackBtnPress} from '../../../config/customHooks';
import Divider from '../../Divider';
import PriceChangeButtons from '../../PriceChangeButtons';

interface Props {
  selectedItem: any;
  setSelectedItem: any;
  onNoteChange: any;
  onQuantityChange: any;
}

export default function MenuItemFullScreen(props: Props) {
  const {selectedItem, setSelectedItem, onNoteChange, onQuantityChange} = props;
  const labels = appLabels;
  const {item, index} = selectedItem;

  handleBackBtnPress(() => setSelectedItem(undefined));

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgCont}>
          {item.img && item.img !== '' && (
            <Image style={styles.menuItemImg} source={item.img} />
          )}
        </View>
        <View style={styles.contentCont}>
          <Text style={styles.nameTxt}>{item?.name}</Text>
          <Text style={styles.priceTxt}>${item?.price}</Text>
          <Text style={styles.descTxt}>{item?.description}</Text>
          <Divider />
          <Text style={styles.noteTitleTxt}>{labels.Special_Instructions}</Text>
          <TextInput
            style={styles.noteInput}
            value={item?.note}
            onChangeText={v => onNoteChange(v, index)}
            placeholder={labels.Add_Note_Msg}
            multiline={true}
            numberOfLines={3}
            textAlignVertical="top"
          />
          <View style={styles.priceCont}>
            <PriceChangeButtons
              qty={item.qty}
              onIncrease={() => onQuantityChange(index, item.qty, item.price)}
              onDecrease={() =>
                onQuantityChange(index, item.qty, item.price, false)
              }
            />
            <Text style={styles.totalTxt}>${item.total}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.backArrowCont}
        onPress={() => setSelectedItem(undefined)}>
        <Icon name="arrow-left" size={moderateScale(25)} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white,
  },
  imgCont: {
    height: moderateScale(200),
  },
  menuItemImg: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  contentCont: {
    margin: moderateScale(15),
  },
  nameTxt: {
    fontSize: constants.exLargeTxtSize,
    color: colors.black,
    fontWeight: '600',
  },
  priceTxt: {
    fontSize: constants.exLargeTxtSize,
    color: colors.black,
    fontWeight: '600',
    marginTop: moderateScale(10),
  },
  descTxt: {
    fontSize: constants.normalTxtSize,
    marginTop: moderateScale(10),
  },
  noteTitleTxt: {
    fontSize: constants.mediumTxtSize,
    color: colors.black,
    fontWeight: '600',
  },
  noteInput: {
    backgroundColor: colors.greyLight,
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  priceCont: {
    alignSelf: 'center',
    marginVertical: moderateScale(25),
  },
  totalTxt: {
    marginTop: moderateScale(5),
    color: colors.black,
    fontSize: constants.exLargeTxtSize,
    alignSelf: 'center',
    fontWeight: '600',
  },
  backArrowCont: {
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(10),
    padding: moderateScale(5),
    elevation: moderateScale(7),
    backgroundColor: colors.white,
    borderRadius: 50,
  },
});
