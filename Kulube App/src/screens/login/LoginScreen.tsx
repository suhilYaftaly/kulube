import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';

import {getUserProfile} from '../../api/getResponse';
import Button from '../../components/Button';
import InlineError from '../../components/InlineError';
import appLabels from '../../config/appLabels';
import colors from '../../config/colors';
import constants from '../../config/constants';
import {getScreenDimensions, useKeyboardHeight} from '../../config/customHooks';
import {getUser} from '../../store/userProfile';
import ProfileScreen from './ProfileScreen';

export default function LoginScreen({onClosePress, bottomTabsHeight = 0}: any) {
  const labels = appLabels;
  const dispatch = useDispatch();
  const {data, status} = getUserProfile();
  const [empNumber, setEmpNumber] = useState('');
  const [empPwd, setEmpPwd] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(data?.empId ? true : false);
  const [errorMsg, setErrorMsg] = useState(labels.incorrectLoginMsg);
  const dimensions = getScreenDimensions();
  const keyboard = useKeyboardHeight();

  useEffect(() => {
    if (status === constants.ERROR) {
      setErrorMsg(labels.incorrectLoginMsg);
      setIsErrorVisible(true);
    } else if (isErrorVisible) setIsErrorVisible(false);

    if (data?.empId) {
      setShowProfile(true);
    } else if (showProfile) setShowProfile(false);
  }, [status, data]);

  const onLogin = () => {
    if (empNumber.length < 4 || empPwd.length < 4) {
      setErrorMsg(labels.incorrectLoginEntryMsg);
      setIsErrorVisible(true);
    } else dispatch(getUser({id: empNumber, pwd: empPwd}));
    Keyboard.dismiss();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        minHeight:
          dimensions.height -
          keyboard -
          (data?.empId === '0000' ? 0 : bottomTabsHeight),
      }}>
      {showProfile ? (
        <ProfileScreen onClosePress={onClosePress} />
      ) : (
        <>
          <Text style={styles.loginTxt}>{labels.Login}</Text>
          <Text style={styles.msgTxt}>{labels.Lets_have_a_great_day}</Text>
          <View style={styles.subCont}>
            <TextInput
              style={styles.input}
              onChangeText={setEmpNumber}
              value={empNumber}
              placeholder={labels.Employee_ID}
              placeholderTextColor={colors.primary}
              keyboardType="numeric"
              maxLength={4}
              autoFocus
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmpPwd}
              value={empPwd}
              placeholder={labels.Employee_Password}
              placeholderTextColor={colors.primary}
              onSubmitEditing={onLogin}
              maxLength={12}
            />
            <Button
              title={labels.Login.toUpperCase()}
              iconName="login"
              onPress={onLogin}
              style={styles.btn}
            />
            <InlineError isVisible={isErrorVisible} msg={errorMsg} />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  loginTxt: {
    marginTop: ms(60),
    fontSize: ms(30),
    color: colors.white,
    fontWeight: constants.bold,
    marginStart: ms(15),
  },
  msgTxt: {
    marginTop: ms(5),
    fontSize: constants.mediumTxtSize,
    color: colors.white,
    marginStart: ms(15),
    marginBottom: ms(30),
  },
  subCont: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: ms(15),
    borderTopLeftRadius: ms(15),
    justifyContent: 'flex-end',
    paddingHorizontal: ms(15),
    paddingBottom: ms(55),
    paddingTop: ms(35),
  },
  input: {
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: ms(2),
    color: colors.primary,
    textAlign: 'center',
    fontSize: constants.mediumTxtSize,
    paddingHorizontal: ms(10),
    height: ms(45),
    marginTop: ms(15),
  },
  btn: {
    marginTop: ms(35),
    paddingVertical: ms(12),
  },
});
