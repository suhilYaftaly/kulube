import React from 'react';

import KitchenOrdersList from '../../components/other/kitchen/KitchenOrderList';
import ScreenHeader from '../../components/ScreenHeader';
import appLabels from '../../config/appLabels';
import constants from '../../config/constants';

export default function ServerHomeScreen() {
  const labels = appLabels;

  return (
    <ScreenHeader title={labels.Orders_ready_to_be_served}>
      <KitchenOrdersList status={constants.ready} />
    </ScreenHeader>
  );
}
