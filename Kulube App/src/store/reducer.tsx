import {combineReducers} from 'redux';
import menu from './menu';
import orders from './orders';
import userProfile from './userProfile';

export default combineReducers({orders, menu, userProfile});
