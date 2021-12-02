import * as React from "../_snowpack/pkg/react.js";
import {categories} from "../categories.js";
import FeedReader from "../components/FeedReader.js";
const Categories = () => {
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  const [selectedCategory, setSelectedCategory] = React.useState("");
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("header", {
    onClick: () => setSelectedCategory("")
  }, "Categories", selectedCategory ? ` > ${selectedCategory}` : ""), selectedCategory ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FeedReader, {
    baseUrl: apiUrl,
    searchQuery: `cat:${selectedCategory}`,
    resultsPerPage,
    sortBy: "lastUpdatedDate"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: "Select a different category...",
    onClick: () => setSelectedCategory("")
  })) : /* @__PURE__ */ React.createElement("ul", {
    className: "categoryList"
  }, categories.map((cat, catIndex) => /* @__PURE__ */ React.createElement("li", {
    className: "category",
    key: catIndex
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: cat.iconUrl
  }), /* @__PURE__ */ React.createElement("header", null, cat.name)), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("ul", {
    className: "subCategoryList"
  }, cat.subCategories.map((subCat, subCatIndex) => /* @__PURE__ */ React.createElement("li", {
    className: "subCategory",
    key: subCatIndex
  }, /* @__PURE__ */ React.createElement("input", {
    type: "image",
    alt: subCat.name,
    src: subCat.iconUrl,
    onClick: () => setSelectedCategory(subCat.id)
  }), /* @__PURE__ */ React.createElement("figcaption", null, subCat.name), /* @__PURE__ */ React.createElement("details", null, subCat.description))))))));
};
export default Categories;
