import * as React from 'react';
import { render } from "react-dom";

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import "./styles.css";

render(
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>,
  document.getElementById("app")
);