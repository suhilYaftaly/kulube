import React from 'react';
import {Provider} from 'react-redux';

import ScreensIndex from './screens/ScreensIndex';
import configureStore from './store/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <ScreensIndex />
    </Provider>
  );
}
