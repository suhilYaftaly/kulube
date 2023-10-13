import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {getMenu, getOrders, getUserProfile} from '../../../api/getResponse';
import ChipBar from '../../../components/ChipBar';
import MenuItemFullScreen from '../../../components/other/orderEntry/MenuItemFullScreen';
import MenuItems from '../../../components/other/orderEntry/MenuItems';
import ViewCart from '../../../components/other/orderEntry/ViewCart';
import ScreenHeader from '../../../components/ScreenHeader';
import StatusBanner from '../../../components/StatusBanner';
import appLabels from '../../../config/appLabels';
import constants from '../../../config/constants';
import {addOrder} from '../../../store/orders';

export default function OrderEntry({navigation, route}: any) {
  const tableNumber = route.params;
  const labels = appLabels;
  const dispatch = useDispatch();
  const menuData = getMenu()?.data;
  const empData = getUserProfile()?.data;
  const ordersStatus = getOrders()?.status;
  const [activeCategory, setActiveCategory] = useState(0);
  const [menuCategory, setMenuCategory] = useState(
    JSON.parse(JSON.stringify(menuData)),
  );
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [cartItems, setCartItems] = useState<any>([]);
  const [totals, setTotals] = useState({subtotal: 0, taxes: 0, total: 0});
  const [startBanner, setStartBanner] = useState(false);

  const onQuantityChange = (
    index: number,
    qty: number,
    price: number,
    increase = true,
  ) => {
    const newQty = increase ? qty + 1 : qty - 1;
    const newTotal = Math.round(newQty * price * 1e2) / 1e2;
    menuCategory[activeCategory].menuItems[index].qty = newQty;
    menuCategory[activeCategory].menuItems[index].total = newTotal;
    setMenuCategory([...menuCategory]);
    const tempCartItem = Array.prototype.concat.apply(
      [],
      menuCategory?.map((c: any) => {
        return c?.menuItems?.filter((e: any) => e?.qty > 0);
      }),
    );
    setCartItems(tempCartItem);

    let subtotal = 0;
    tempCartItem?.map((e: any) => {
      subtotal = Math.round((subtotal + e.total) * 1e2) / 1e2;
    });
    const taxes = Math.round(subtotal * constants.taxPct * 1e2) / 1e2;
    const total = Math.round((subtotal + taxes) * 1e2) / 1e2;
    setTotals({subtotal, taxes, total});
  };

  const onNoteChange = (value: string, index: number) => {
    menuCategory[activeCategory].menuItems[index].note = value;
    setMenuCategory([...menuCategory]);
    const cartItem = Array?.prototype?.concat?.apply(
      [],
      menuCategory?.map((c: any) => {
        return c?.menuItems?.filter((e: any) => e?.qty > 0);
      }),
    );
    setCartItems(cartItem);
  };

  const onSubmit = () => {
    //TO DO - remove empFullName
    const order = {
      tableNumber,
      empFullName: empData?.fullName,
      ...totals,
      orderItems: cartItems,
    };
    setStartBanner(true);
    dispatch(addOrder(order));
  };

  const onBannerClose = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScreenHeader title={labels.Order_Entry} navigation={navigation}>
        <ChipBar
          items={menuCategory}
          itemKey="category"
          id="id"
          activeItem={activeCategory}
          setActiveItem={setActiveCategory}
        />
        <MenuItems
          activeCategory={activeCategory}
          menuCategory={menuCategory}
          onQuantityChange={onQuantityChange}
          setSelectedItem={setSelectedItem}
        />
      </ScreenHeader>
      <ViewCart
        cartItems={cartItems}
        menuCategory={menuCategory}
        setSelectedItem={setSelectedItem}
        setActiveCategory={setActiveCategory}
        onSubmit={onSubmit}
        totals={totals}
      />
      {selectedItem && (
        <MenuItemFullScreen
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          onNoteChange={onNoteChange}
          onQuantityChange={onQuantityChange}
        />
      )}
      <StatusBanner
        status={ordersStatus}
        textMessage={labels.orderSuccessMsg}
        onBannerClose={onBannerClose}
        startBanner={startBanner}
      />
    </>
  );
}
