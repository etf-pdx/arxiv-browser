import * as React from "../_snowpack/pkg/react.js";
import FeedReader from "../components/FeedReader.js";
const Search = () => {
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  const [searchText, setSearchText] = React.useState("");
  const [searchOption, setSearchOption] = React.useState("all");
  const [searchRequested, setSearchRequested] = React.useState(false);
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("input", {
    type: "search",
    placeholder: "Search term...",
    value: searchText,
    onChange: (event) => setSearchText(event.target.value)
  }), " ", /* @__PURE__ */ React.createElement("select", {
    value: searchOption,
    onChange: (event) => setSearchOption(event.target.value)
  }, /* @__PURE__ */ React.createElement("option", {
    value: "all"
  }, "All"), /* @__PURE__ */ React.createElement("option", {
    value: "ti"
  }, "Title"), /* @__PURE__ */ React.createElement("option", {
    value: "au"
  }, "Author"), /* @__PURE__ */ React.createElement("option", {
    value: "abs"
  }, "Abstract"), /* @__PURE__ */ React.createElement("option", {
    value: "co"
  }, "Comment"), /* @__PURE__ */ React.createElement("option", {
    value: "jr"
  }, "Journal Reference"), /* @__PURE__ */ React.createElement("option", {
    value: "rn"
  }, "Report Number")), " ", /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: "Search",
    onClick: () => setSearchRequested(true)
  })), /* @__PURE__ */ React.createElement("hr", null), searchRequested ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FeedReader, {
    baseUrl: apiUrl,
    searchQuery: `${searchOption}:${searchText}`,
    resultsPerPage,
    sortBy: "lastUpdatedDate"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: "Clear Search",
    onClick: () => setSearchRequested(false)
  })) : /* @__PURE__ */ React.createElement(React.Fragment, null));
};
export default Search;
