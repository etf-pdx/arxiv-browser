import * as React from "../_snowpack/pkg/react.js";
import {withCookies} from "../_snowpack/pkg/react-cookie.js";
import Avatar from "../components/Avatar.js";
import FeedReader from "../components/FeedReader.js";
const getSearchFromCookie = (cookie) => {
  return cookie.preferences.reduce((p, c, i) => {
    return i == 1 ? `cat:${p}+OR+cat:${c}` : `${p}+OR+cat:${c}`;
  });
};
const Home = (props) => {
  const cookieName = "science-news-user-info";
  const cookie = props.cookies.get(cookieName);
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement(Avatar, {
    seed: cookie.seed
  }), /* @__PURE__ */ React.createElement("br", null), "Your Personalized Feed, ", cookie.username), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(FeedReader, {
    baseUrl: apiUrl,
    searchQuery: getSearchFromCookie(cookie),
    resultsPerPage,
    sortBy: "lastUpdatedDate"
  }));
};
export default withCookies(Home);
