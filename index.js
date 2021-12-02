import * as React from "./_snowpack/pkg/react.js";
import {render} from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import {BrowserRouter as Router} from "./_snowpack/pkg/react-router-dom.js";
import {CookiesProvider} from "./_snowpack/pkg/react-cookie.js";
import "./styles.css.proxy.js";
render(/* @__PURE__ */ React.createElement(CookiesProvider, null, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(App, null))), document.getElementById("app"));
