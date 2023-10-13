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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {getUserProfile} from '../../api/getResponse';
import Button from '../../components/Button';
import InlineError from '../../components/InlineError';
import appLabels from '../../config/appLabels';
import colors from '../../config/colors';
import constants from '../../config/constants';
import {
  changePassword,
  clearUser,
  setShowLoginScreen,
} from '../../store/userProfile';

export default function ProfileScreen({onClosePress}: any) {
  const labels = appLabels;
  const dispatch = useDispatch();
  const {data} = getUserProfile();
  const [changePwd, setChangePwd] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const onClose = () => {
    dispatch(setShowLoginScreen(false));
    onClosePress && onClosePress();
  };

  const onPwdChange = () => {
    if (changePwd.length < 4) {
      setIsErrorVisible(true);
    }
    dispatch(
      changePassword({id: data?.empId, pwd: data?.empPwd, newPwd: changePwd}),
    );
  };

  const onLogout = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <TouchableOpacity onPress={onClose} style={styles.closeCont}>
        <Icon name="close" size={ms(25)} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.userDetailsCont}>
        <View style={styles.imgCont}>
          {data?.img && data?.img !== '' ? (
            <Image style={styles.img} source={data?.img} />
          ) : (
            <Text style={styles.initialsTxt}>
              {data?.firstName?.charAt(0) + data?.lastName?.charAt(0)}
            </Text>
          )}
        </View>
        <Text style={styles.nameTxt}>
          {data?.fullName} - {data?.empId}
        </Text>
        <Text style={styles.rolesTxt}>
          {data?.roles?.[data?.roles?.length - 1]?.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subSection}>
        <TextInput
          style={styles.input}
          onChangeText={setChangePwd}
          value={changePwd}
          placeholder={labels.Type_new_password}
          placeholderTextColor={colors.primary}
          onSubmitEditing={onPwdChange}
          maxLength={12}
        />
        <Button
          title={labels.CHANGE_PASSWORD}
          onPress={onPwdChange}
          style={styles.btn}
        />
        <InlineError isVisible={isErrorVisible} msg={labels.incorrectPwdMsg} />
        <View style={styles.btnCont}>
          <Button
            title={labels.Logout.toUpperCase()}
            iconName="logout"
            onPress={onLogout}
            style={styles.btn}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  closeCont: {
    margin: ms(10),
    borderRadius: ms(50),
    elevation: ms(7),
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    padding: ms(5),
  },
  userDetailsCont: {
    alignSelf: 'center',
    marginTop: ms(30),
    alignItems: 'center',
  },
  imgCont: {
    width: ms(120),
    height: ms(120),
    overflow: 'hidden',
    borderRadius: ms(15),
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: ms(15),
  },
  initialsTxt: {
    fontSize: ms(65),
    fontWeight: constants.bold,
    color: colors.primary,
    alignSelf: 'center',
  },
  nameTxt: {
    fontSize: constants.exLargeTxtSize,
    fontWeight: constants.bold,
    color: colors.white,
    marginTop: ms(20),
  },
  rolesTxt: {
    fontSize: constants.mediumTxtSize,
    fontWeight: constants.semibold,
    color: colors.white,
    marginTop: ms(5),
  },
  subSection: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: ms(15),
    borderTopLeftRadius: ms(15),
    paddingHorizontal: ms(15),
    marginTop: ms(35),
    paddingBottom: ms(20),
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
    marginTop: ms(35),
    marginBottom: ms(15),
  },
  btnCont: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    marginBottom: ms(25),
    paddingVertical: ms(12),
  },
});
