import {createSlice} from '@reduxjs/toolkit';
import constants from '../config/constants';

let users = [
  {
    firstName: 'Kitchen',
    lastName: 'Kitchen',
    fullName: 'Kitchen Kitchen',
    email: '',
    phoneNum: '',
    empId: '0000',
    empPwd: '0000',
    roles: [],
    img: '',
  },
  {
    firstName: 'Suhil',
    lastName: 'Mohammad',
    fullName: 'Suhil Mohammad',
    email: 'suhail278@gmail.com',
    phoneNum: '647-894-4491',
    empId: '3333',
    empPwd: '3333',
    roles: ['CSR', 'assistant manager', 'manager', 'general manager'],
    img: require('../resources/images/Suhil.jpg'),
  },
  {
    firstName: 'Kanishka',
    lastName: 'Mohammad',
    fullName: 'Kanishka Mohammad',
    email: 'kanishka.mohammad@gmail.com',
    phoneNum: '647-000-0000',
    empId: '1111',
    empPwd: '1111',
    roles: ['CSR', 'assistant manager', 'manager', 'general manager'],
    img: '',
  },
  {
    firstName: 'Habib',
    lastName: 'Zahoori',
    fullName: 'Habib Zahoori',
    email: 'habib.zahoori@gmail.com',
    phoneNum: '647-000-0000',
    empId: '2222',
    empPwd: '2222',
    roles: ['CSR', 'assistant manager', 'manager', 'general manager'],
    img: '',
  },
  {
    firstName: 'Nargis',
    lastName: 'Fakhri',
    fullName: 'Nargis Fakhri',
    email: 'nargis.fakhri@gmail.com',
    phoneNum: '647-000-0000',
    empId: '4444',
    empPwd: '4444',
    roles: ['CSR'],
    img: '',
  },
];

const slice = createSlice({
  name: 'userProfile',
  initialState: {
    tempUsers: users,
    data: '' as {},
    showLoginScreen: true,
    status: '',
  },
  reducers: {
    getUser: (profile, action) => {
      const index = profile.tempUsers.findIndex(
        user =>
          user.empId === action.payload.id &&
          user.empPwd === action.payload.pwd,
      );
      if (index >= 0) {
        (profile.data = profile.tempUsers[index]),
          (profile.status = constants.OK);
      } else {
        profile.data = '';
        profile.status = constants.ERROR;
      }
    },
    setShowLoginScreen: (profile, action) => {
      profile.showLoginScreen = action.payload;
    },
    clearUser: profile => {
      profile.data = '';
      profile.showLoginScreen = true;
      profile.status = '';
    },
    changePassword: (profile, action) => {
      const index = profile.tempUsers.findIndex(
        user =>
          user.empId === action.payload.id &&
          user.empPwd === action.payload.pwd,
      );
      profile.tempUsers[index].empPwd = action.payload.newPwd;
    },
  },
});

export const {getUser, setShowLoginScreen, clearUser, changePassword} =
  slice.actions;
export default slice.reducer;
