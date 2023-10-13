import {shallowEqual, useSelector} from 'react-redux';

export const getOrders = () => {
  const {data, status} = useSelector(
    (state: any) => ({
      data: state.orders.data,
      status: state.orders.status,
    }),
    shallowEqual,
  );

  return {data, status};
};

export const getMenu = () => {
  const {data} = useSelector(
    (state: any) => ({
      data: state.menu.data,
    }),
    shallowEqual,
  );

  return {data};
};

export const getUserProfile = () => {
  const {data, roles, showLoginScreen, status} = useSelector(
    (state: any) => ({
      data: state.userProfile.data,
      roles: state.userProfile.data?.roles,
      status: state.userProfile.status,
      showLoginScreen: state.userProfile.showLoginScreen,
    }),
    shallowEqual,
  );

  return {data, roles, showLoginScreen, status};
};
