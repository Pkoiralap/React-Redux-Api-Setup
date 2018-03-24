import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import HelloWorld from './src/index';
import Store from './store/index';


render(
  <Provider store={Store}>
    <HelloWorld />
  </Provider>,
  document.getElementById('reactDiv')
);