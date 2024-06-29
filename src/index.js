import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './component/WrapComponent.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import login from './store/login.js';

const store = configureStore({
    reducer : {
      login
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <WrapComponent />
  </Provider>
);

