import {useEffect, useState} from 'react';
import {BackHandler, Dimensions, Keyboard} from 'react-native';

const window = Dimensions.get('window');

export const getScreenDimensions = () => {
  const [dimensions, setDimensions] = useState(window);

  //get window height and width on orientation change
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  });
  return dimensions;
};

export const handleBackBtnPress = (onBackBtnPress: () => void) => {
  const handleBackButtonClick = () => {
    onBackBtnPress();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
};

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: any) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return keyboardHeight;
};

export const useKeyboardVisible = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return keyboardVisible;
};
