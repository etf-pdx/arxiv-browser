import axios from "axios";
import * as React from "react";

interface FeedReaderProps {
  baseUrl: string,
  searchQuery: string,
  resultsPerPage: number,
  sortOrder?: "ascending" | "descending",
  sortBy?: "relevance" | "lastUpdatedDate" | "submittedDate"
}

const FeedReader = (props: FeedReaderProps) => {
  
  const [start, setStart] = React.useState(0);
  const [feed, setFeed] = React.useState([] as React.ReactElement[]);
  const apiRequest = props.baseUrl+props.searchQuery+
  ((props.sortBy)?`&sortBy=${props.sortBy}`:"")+
  ((props.sortOrder)?`&sortOrder=${props.sortOrder}`:"")+
  "&start="+start+
  "&max_results="+props.resultsPerPage;
  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiRequest);
      const feedData = new window.DOMParser().parseFromString(response.data, "text/xml");
      
      const items = feedData.querySelectorAll("entry");
      let html = [] as React.ReactElement[];
      items.forEach((el, key) => {
        const pdfInfo = el.querySelector("link[title='pdf']");
        const updateDate = el.querySelector("updated")?.innerHTML;
        const published = el.querySelector("published")?.innerHTML;
        var authors = [] as string[];
        el.querySelectorAll("author > name").forEach(author => authors.push(author.innerHTML));

        html.push(
          <article key={key}>
            <header>
              <a target="_blank" href={pdfInfo?.getAttribute("href") || ""}>{el.querySelector("title")?.innerHTML}</a>
            </header>
            <summary className="abstract">{el.querySelector("summary")?.innerHTML}</summary>
            <details>
              Last Updated:&ensp;<time>{updateDate}</time>&emsp;Published:&ensp;<time>{published}</time>
              <br />
              Authors: {authors.join(", ")}
            </details>
          </article>
        )
      });
      setFeed(html);
    };
    fetchData();
  }, [,start]);

  return (
    <div className="feedReader">
      {(!feed?.length)? <p className="loadText">Loading...</p>:feed}
      <footer>
        <label>
          Previous Page&ensp;
          {(start == 0)?
            <input type="button" value="<" onClick={() => {
              if(start != 0) setStart(start - props.resultsPerPage)
            }} disabled />
            :
            <input type="button" value="<" onClick={() => {
              if(start != 0) setStart(start - props.resultsPerPage)
            }} />
          }
        </label>
        <label>
          <input type="button" value=">" onClick={() => {
            setStart(start + props.resultsPerPage)
          }} />
          &ensp;Next Page
        </label>
      </footer>
    </div>
  );
}

export default FeedReader;