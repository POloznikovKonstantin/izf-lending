import React  from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

import './i18n';

import './style/init.css';
import { Card } from './Components/UI/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <Card/>
  </React.StrictMode>
);
