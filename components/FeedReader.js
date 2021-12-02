import axios from "../_snowpack/pkg/axios.js";
import * as React from "../_snowpack/pkg/react.js";
const FeedReader = (props) => {
  const [start, setStart] = React.useState(0);
  const [feed, setFeed] = React.useState([]);
  const apiRequest = props.baseUrl + props.searchQuery + (props.sortBy ? `&sortBy=${props.sortBy}` : "") + (props.sortOrder ? `&sortOrder=${props.sortOrder}` : "") + "&start=" + start + "&max_results=" + props.resultsPerPage;
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiRequest);
      const feedData = new window.DOMParser().parseFromString(response.data, "text/xml");
      const items = feedData.querySelectorAll("entry");
      let html = [];
      items.forEach((el) => {
        const pdfInfo = el.querySelector("link[title='pdf']");
        const updateDate = el.querySelector("updated")?.innerHTML;
        const published = el.querySelector("published")?.innerHTML;
        var authors = [];
        el.querySelectorAll("author > name").forEach((author) => authors.push(author.innerHTML));
        html.push(/* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("a", {
          target: "_blank",
          href: pdfInfo?.getAttribute("href") || ""
        }, el.querySelector("title")?.innerHTML)), /* @__PURE__ */ React.createElement("summary", {
          className: "abstract"
        }, el.querySelector("summary")?.innerHTML), /* @__PURE__ */ React.createElement("details", null, "Last Updated: ", /* @__PURE__ */ React.createElement("time", null, updateDate), " Published: ", /* @__PURE__ */ React.createElement("time", null, published), /* @__PURE__ */ React.createElement("br", null), "Authors: ", authors.join(", "))));
      });
      setFeed(html);
    };
    fetchData();
  }, [, start]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "feedReader"
  }, !feed?.length ? /* @__PURE__ */ React.createElement("p", {
    className: "loadText"
  }, "Loading...") : feed, /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("label", null, "Previous Page ", start == 0 ? /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: "<",
    onClick: () => {
      if (start != 0)
        setStart(start - props.resultsPerPage);
    },
    disabled: true
  }) : /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: "<",
    onClick: () => {
      if (start != 0)
        setStart(start - props.resultsPerPage);
    }
  })), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "button",
    value: ">",
    onClick: () => {
      setStart(start + props.resultsPerPage);
    }
  }), " Next Page")));
};
export default FeedReader;
