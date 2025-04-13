import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { mockGoods } from './mocks/items';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App items = {mockGoods}/>
  </React.StrictMode>
);
