import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms} from 'react-native-size-matters';

import colors from '../config/colors';
import constants from '../config/constants';
import Button from './Button';

interface Props {
  onConfirm: any;
  isVisible: boolean;
  setIsVisible: any;
  msg: string;
  confirmBtnTxt: string;
  cancelBtnTxt?: string;
  confirmBtnBackgroundColor?: string;
  confirmBtnIconName?: string;
}

export default function ConfirmModal({
  onConfirm,
  setIsVisible,
  isVisible,
  msg,
  confirmBtnTxt,
  cancelBtnTxt,
  confirmBtnBackgroundColor = colors.danger,
  confirmBtnIconName,
}: Props) {
  return (
    <>
      {isVisible && (
        <View style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.messageTxt}>{msg}</Text>
            <View style={styles.btnsContainer}>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={styles.cancelTxt}>{cancelBtnTxt}</Text>
              </TouchableOpacity>
              <Button
                title={confirmBtnTxt}
                backgroundColor={confirmBtnBackgroundColor}
                onPress={onConfirm}
                style={{flex: 1}}
                iconName={confirmBtnIconName}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: colors.black50,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: ms(15),
    elevation: ms(7),
  },
  messageTxt: {
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
  },
  btnsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(15),
  },
  cancelTxt: {
    marginRight: ms(15),
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
    color: colors.link,
  },
});
