import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import InlineError from '../../components/InlineError';
import appLabels from '../../config/appLabels';
import colors from '../../config/colors';
import constants from '../../config/constants';
import routes from '../../navigation/routes';

interface Props {
  navigation: any;
}

export default function TableNumberEntry({navigation}: Props) {
  const labels = appLabels;
  const [tableNumber, setTableNumber] = useState('');
  const [isIEVisible, setIsIEVisible] = useState(false);

  const onArrowPress = () => {
    if (tableNumber.length > 0) {
      isIEVisible && setIsIEVisible(false);
      navigation.navigate(routes.ORDER_ENTRY_SCREEN, tableNumber);
    } else setIsIEVisible(true);
  };

  return (
    <>
      <View style={styles.imgContainer}>
        <Image
          style={styles.tableImg}
          source={require('../../resources/images/restaurantTable.jpg')}
        />
      </View>
      <View style={styles.contentCont}>
        <Text style={styles.contentTitle}>{labels.Welcome_to_order_entry}</Text>
        <Text style={styles.contentMsg}>
          {labels.Enter_customers_table_number_to_get_started}
        </Text>
        <View style={styles.tableInputContainer}>
          <TextInput
            style={styles.tableInput}
            onChangeText={setTableNumber}
            value={tableNumber}
            placeholder={labels.Enter_table_number_here + '...'}
            placeholderTextColor={colors.primary}
            keyboardType="numeric"
            onSubmitEditing={onArrowPress}
          />
          <TouchableOpacity style={styles.arrowIconCont} onPress={onArrowPress}>
            <Icon
              name="arrow-right"
              size={ms(30)}
              color={colors.primary}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
        <InlineError
          isVisible={isIEVisible}
          msg={labels.Table_number_cannot_be_empty}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    margin: ms(15),
    borderRadius: 10,
    overflow: 'hidden',
    elevation: ms(10),
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  tableImg: {
    width: ms(400),
    height: ms(250),
    resizeMode: 'contain',
  },
  contentCont: {
    alignSelf: 'center',
    marginTop: ms(10),
    marginBottom: ms(15),
  },
  contentTitle: {
    fontSize: ms(24),
    textAlign: 'center',
    color: colors.primary,
    marginBottom: ms(5),
    fontWeight: '600',
  },
  contentMsg: {
    fontSize: constants.normalTxtSize,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: ms(30),
  },
  tableInput: {
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: ms(2),
    color: colors.primary,
    textAlign: 'center',
    fontSize: constants.mediumTxtSize,
    paddingHorizontal: ms(10),
    height: ms(45),
  },
  tableInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  arrowIconCont: {
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: ms(2),
    height: ms(45),
    justifyContent: 'center',
    marginLeft: ms(10),
  },
  arrowIcon: {
    marginHorizontal: ms(10),
  },
});
