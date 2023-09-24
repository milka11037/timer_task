import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import { Provider } from 'react-redux';
import { setUpStore } from './store/store'
import './index.scss'

const store = setUpStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);