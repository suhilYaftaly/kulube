import React from 'react';

import KitchenOrdersList from '../../components/other/kitchen/KitchenOrderList';
import ScreenHeader from '../../components/ScreenHeader';
import appLabels from '../../config/appLabels';

export default function KitchenHomeScreen() {
  const labels = appLabels;

  return (
    <ScreenHeader title={labels.Orders_to_be_prepared}>
      <KitchenOrdersList />
    </ScreenHeader>
  );
}
