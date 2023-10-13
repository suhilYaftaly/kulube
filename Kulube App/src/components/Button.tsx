import React, {CSSProperties} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import constants from '../config/constants';
import CustomIcons, {IconInterface} from './CustomIcons';

interface Props {
  title?: string;
  onPress: any;
  textColor?: string;
  backgroundColor?: string;
  style?: CSSProperties;
  iconName?: string;
  customIconName?: IconInterface['name'];
}

export default function Button({
  title,
  onPress,
  textColor = colors.white,
  backgroundColor = colors.primary,
  style,
  iconName,
  customIconName,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style as StyleProp<ViewStyle>,
        {backgroundColor: backgroundColor},
      ]}>
      {title && <Text style={[styles.txt, {color: textColor}]}>{title}</Text>}
      {iconName && (
        <Icon
          name={iconName}
          size={ms(20)}
          color={textColor}
          style={[styles.icon, !title && {marginLeft: 0}]}
        />
      )}
      {customIconName && (
        <CustomIcons
          name={customIconName}
          size={20}
          color={colors.white}
          style={[styles.icon, !title && {marginLeft: 0}]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(7),
    paddingHorizontal: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(5),
  },
  txt: {
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
  },
  icon: {
    marginLeft: ms(5),
  },
});
