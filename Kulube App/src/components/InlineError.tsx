import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ms} from 'react-native-size-matters';

import colors from '../config/colors';
import constants from '../config/constants';

interface Props {
  msg: string;
  isVisible: boolean;
}

export default function InlineError({msg, isVisible}: Props) {
  if (isVisible) {
    return <Text style={styles.txt}>{msg}</Text>;
  } else return null;
}

const styles = StyleSheet.create({
  txt: {
    fontSize: constants.mediumTxtSize,
    color: colors.danger,
    textAlign: 'center',
    marginTop: ms(10),
    fontStyle: 'italic',
    fontWeight: constants.semibold,
  },
});
