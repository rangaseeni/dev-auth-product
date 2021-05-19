import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Auth0Provider
   domain="dev-6fcsi-ki.us.auth0.com"
   clientId="7waqDndEGKlkqMroMKO0tWNlyVcTQ9uO"
   redirectUri={window.location.origin}
   >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

