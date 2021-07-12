import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import store from "./redux/store.js";
import './css/reset.css';

ReactDOM.render(
      <React.StrictMode>
            <UserProvider>
                  <App />
            </UserProvider>
      </React.StrictMode>,
  document.getElementById('root')
);


