import React from 'react';
import {View} from 'react-native';
import {ms} from 'react-native-size-matters';

import colors from '../config/colors';

interface Props {
  mv?: number;
  lineHeight?: number;
}

export default function Divider({mv = 25, lineHeight = 1}: Props) {
  return (
    <View
      style={{
        backgroundColor: colors.greyMedium,
        height: ms(lineHeight),
        marginVertical: ms(mv),
      }}
    />
  );
}
