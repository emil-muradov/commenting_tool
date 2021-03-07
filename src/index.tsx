import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Store } from './store';

const store = Store.create();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
