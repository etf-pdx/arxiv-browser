import * as React from "react";
import FeedReader from "../components/FeedReader";

const Search = () => {
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  const [searchText, setSearchText] = React.useState("");
  const [searchOption, setSearchOption] = React.useState("all");
  const [searchRequested, setSearchRequested] = React.useState(false);

  return (
    <section>
      <header>
        <input type="search" placeholder="Search term..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
        &ensp;
        <select value={searchOption} onChange={(event) => setSearchOption(event.target.value)}>
          <option value="all">All</option>
          <option value="ti">Title</option>
          <option value="au">Author</option>
          <option value="abs">Abstract</option>
          <option value="co">Comment</option>
          <option value="jr">Journal Reference</option>
          <option value="rn">Report Number</option>
        </select>
        &ensp;
        <input type="button" value="Search" onClick={() => setSearchRequested(true)} />
      </header>
      <hr />
      {
        (searchRequested)?
          <div>
            <FeedReader
              baseUrl={apiUrl}
              searchQuery={`${searchOption}:${searchText}`}
              resultsPerPage={resultsPerPage}
              sortBy="lastUpdatedDate"
            />
            <input type="button" value="Clear Search" onClick={() => setSearchRequested(false)} />
          </div>
        :
          <></>
      }
    </section>
  );
}
export default Search;