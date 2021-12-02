import * as React from "./_snowpack/pkg/react.js";
import {hot} from "./_snowpack/pkg/react-hot-loader/root.js";
import {Routes, Route, Link, Navigate, useLocation} from "./_snowpack/pkg/react-router-dom.js";
import SignUp from "./pages/SignUp.js";
import Settings from "./pages/Settings.js";
import Categories from "./pages/Categories.js";
import Search from "./pages/Search.js";
import Home from "./pages/Home.js";
const App = () => {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("header", null, "STEM News!"), !useLocation().pathname.includes("sign-up") ? /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/home"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/search"
  }, "Search")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/categories"
  }, "Categories")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/settings"
  }, "Settings")))) : /* @__PURE__ */ React.createElement(React.Fragment, null), /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/home",
    element: /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/search",
    element: /* @__PURE__ */ React.createElement(Search, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/categories",
    element: /* @__PURE__ */ React.createElement(Categories, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/settings",
    element: /* @__PURE__ */ React.createElement(Settings, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/sign-up",
    element: /* @__PURE__ */ React.createElement(SignUp, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    element: /* @__PURE__ */ React.createElement(Navigate, {
      to: "/sign-up"
    })
  })));
};
export default hot(App);
