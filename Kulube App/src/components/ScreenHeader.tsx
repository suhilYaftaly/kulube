import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import constants from '../config/constants';
import LoginScreen from '../screens/login/LoginScreen';

interface Props {
  navigation?: any;
  title: string;
  onLeftIconPress?: any;
  children?: any;
}

export default function ScreenHeader({
  navigation,
  title,
  onLeftIconPress,
  children,
}: Props) {
  const [showProfile, setShowProfile] = useState(false);

  const onLeftIconAction = () => {
    onLeftIconPress;
    navigation.goBack();
  };

  const onProfilePress = () => {
    setShowProfile(true);
  };

  return (
    <>
      <View style={styles.headerCont}>
        {navigation ? (
          <TouchableOpacity onPress={onLeftIconAction}>
            <Icon
              name="arrow-left"
              size={ms(25)}
              color={colors.white}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <Icon
            name="arrow-left"
            size={ms(25)}
            color={colors.primary}
            style={styles.icon}
          />
        )}
        <Text style={styles.titleTxt}>{title}</Text>
        <TouchableOpacity onPress={onProfilePress}>
          <Icon
            name="account-circle"
            size={ms(25)}
            color={colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {children && (
        <View style={styles.childrenContainer}>
          <ScrollView>{children}</ScrollView>
        </View>
      )}
      {showProfile && (
        <View style={styles.loginScreenCont}>
          <LoginScreen
            bottomTabsHeight={ms(50)}
            onClosePress={() => setShowProfile(false)}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  headerCont: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    height: constants.headerHeight,
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: ms(15),
  },
  titleTxt: {
    color: colors.white,
    fontSize: constants.largeHeaderTitleTxtSize,
  },
  childrenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginScreenCont: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
