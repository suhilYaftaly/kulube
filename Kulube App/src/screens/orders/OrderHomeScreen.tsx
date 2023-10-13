import React from 'react';

import ScreenHeader from '../../components/ScreenHeader';
import appLabels from '../../config/appLabels';
import TableNumberEntry from './TableNumberEntry';

export default function HomeScreen({navigation}: any) {
  const labels = appLabels;

  return (
    <ScreenHeader title={labels.AppName}>
      <TableNumberEntry navigation={navigation} />
    </ScreenHeader>
  );
}
