import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import appLabels from '../config/appLabels';
import colors from '../config/colors';
import constants from '../config/constants';

interface Props {
  status: string;
  textMessage: string;
  onBannerClose?: () => void;
  startBanner: boolean;
}
export default function StatusBanner({
  status,
  textMessage,
  onBannerClose,
  startBanner,
}: Props) {
  const labels = appLabels;
  const error = status === constants.ERROR ? true : false;
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (
      startBanner &&
      (status === constants.OK || status === constants.ERROR)
    ) {
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
        onBannerClose && onBannerClose();
      }, 2000);
    }
  }, [status, startBanner]);

  const onBannerClosePress = () => {
    setShowBanner(false);
    onBannerClose && onBannerClose();
  };

  return (
    <>
      {showBanner && (
        <View
          style={[styles.container, error && {backgroundColor: colors.danger}]}>
          <Icon
            name={error ? 'information' : 'check-circle'}
            size={ms(20)}
            color={colors.white}
          />
          <Text style={styles.msgTxt}>
            {error ? labels.bannerFailMsg : textMessage}
          </Text>
          <TouchableOpacity
            style={{paddingHorizontal: ms(15)}}
            onPress={onBannerClosePress}>
            <Icon name="close-circle" size={ms(20)} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.success,
    flexDirection: 'row',
    alignItems: 'center',
    height: ms(50),
    paddingStart: ms(15),
    elevation: ms(10),
  },
  msgTxt: {
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
    marginHorizontal: ms(10),
    color: colors.white,
    flex: 1,
  },
});
