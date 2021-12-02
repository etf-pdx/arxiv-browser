import * as React from "react";
import { categories } from '../categories';
import FeedReader from "../components/FeedReader";

const Categories = () => {
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  const [selectedCategory, setSelectedCategory] = React.useState("");

  return (
    <section>
      <header>Categories{(selectedCategory)?`> ${selectedCategory}`:""}</header>
      {
        (selectedCategory)?
          <div>
            <FeedReader
              baseUrl={apiUrl}
              searchQuery={`cat:${selectedCategory}`}
              resultsPerPage={resultsPerPage}
              sortBy="lastUpdatedDate"
            />
            <input type="button" value="Select a different category..." onClick={() => setSelectedCategory("")} />
          </div>
        :
          <ul>
            {categories.map((cat, catIndex) => (
              <li key={catIndex}>
                <div>
                  <img src={cat.iconUrl} />
                  <header>{cat.name}</header>
                </div>
                <hr />
                <ul>
                  {cat.subCategories.map((subCat, subCatIndex) =>(
                    <li key={subCatIndex}>
                      <label>
                        <input type="image" alt={subCat.name} src={subCat.iconUrl} onClick={() => setSelectedCategory(subCat.id)} />
                        &emsp;{subCat.name}
                      </label>
                      <details>{subCat.description}</details>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
      }
    </section>
  );
}
export default Categories;