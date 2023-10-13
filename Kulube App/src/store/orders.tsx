import {createSlice} from '@reduxjs/toolkit';
import constants from '../config/constants';

let lastID = 0;

const slice = createSlice({
  name: 'orders',
  initialState: {
    status: '',
    data: [] as {id: number; isPaid: boolean; status: string}[],
  },
  reducers: {
    //actions => action handlers
    addOrder: (orders, action) => {
      orders.data.push({
        id: ++lastID,
        orderNumber: lastID,
        isPaid: false,
        status: 'beingPrepared',
        submittedDate: Date.now(),
        ...action.payload,
      });
      orders.status = constants.OK;
    },
    payOrder: (orders, action) => {
      const index = orders.data.findIndex(
        order => order.id === action.payload.id,
      );
      orders.data[index].isPaid = true;
      orders.status = constants.OK;
    },
    deleteOrder: (orders, action) => {
      const index = orders.data.findIndex(
        order => order.id === action.payload.id,
      );
      orders.data.splice(index, 1);
      orders.status = constants.OK;
    },
    updateOrderStatus: (orders, action) => {
      const index = orders.data.findIndex(
        order => order.id === action.payload.id,
      );
      orders.data[index].status = action.payload.newStatus;
      orders.status = constants.OK;
    },
  },
});

export const {addOrder, payOrder, deleteOrder, updateOrderStatus} =
  slice.actions;
export default slice.reducer;
