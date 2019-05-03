import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';

import { IndexApp } from './indexApp';

export class Boot extends React.Component {
  render() {
    return (
      <Provider store={configureStore().store}>
        <IndexApp />
      </Provider>
    );
  }
}
