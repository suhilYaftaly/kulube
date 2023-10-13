import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ms} from 'react-native-size-matters';

import colors from '../../../config/colors';
import constants from '../../../config/constants';

interface Props {
  status: string;
  labels: any;
}

export default function OrderStatus({status, labels}: Props) {
  switch (status) {
    case constants.beingPrepared:
      return (
        <View style={styles.container}>
          <Text style={styles.statusTxt}>{labels.BeingPrepared}</Text>
        </View>
      );
    case constants.ready:
      return (
        <View style={[styles.container, {borderColor: colors.warning}]}>
          <Text style={[styles.statusTxt, {color: colors.warning}]}>
            {labels.Ready}
          </Text>
        </View>
      );
    case constants.served:
      return (
        <View style={[styles.container, {borderColor: colors.success}]}>
          <Text style={[styles.statusTxt, {color: colors.success}]}>
            {labels.Served}
          </Text>
        </View>
      );
    default:
      return <Text style={styles.statusTxt}>{status}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(2),
    paddingHorizontal: ms(15),
    borderRadius: ms(10),
    borderWidth: ms(1.5),
    borderColor: colors.greyDark,
  },
  statusTxt: {
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
    color: colors.greyDark,
  },
});
