import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import ConfirmModal from '../../components/ConfirmModal';
import Divider from '../../components/Divider';
import CounterOrdersList from '../../components/other/counter/CounterOrdersList';
import ScreenHeader from '../../components/ScreenHeader';
import appLabels from '../../config/appLabels';
import {deleteOrder} from '../../store/orders';

export default function CounterHomeScreen({navigation}: any) {
  const labels = appLabels;
  const dispatch = useDispatch();
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [activeOrderId, setActiveOrderId] = useState(0);

  const onDelete = (orderId: number) => {
    setActiveOrderId(orderId);
    setIsDeleteModalVisible(true);
  };

  const deleteOrderItem = () => {
    dispatch(deleteOrder({id: activeOrderId}));
    setIsDeleteModalVisible(false);
  };

  return (
    <>
      <ScreenHeader title={labels.Orders}>
        <Divider mv={10} lineHeight={0} />
        <CounterOrdersList onDelete={onDelete} />
        <Divider mv={20} />
        <CounterOrdersList
          onDelete={onDelete}
          viewPaid={true}
          collapse={true}
        />
      </ScreenHeader>
      <ConfirmModal
        onConfirm={deleteOrderItem}
        isVisible={isDeleteModalVisible}
        setIsVisible={setIsDeleteModalVisible}
        msg={labels.Are_You_Sure_Msg}
        confirmBtnTxt={labels.Delete_Order}
        cancelBtnTxt={labels.Cancel}
        confirmBtnIconName="delete"
      />
    </>
  );
}
