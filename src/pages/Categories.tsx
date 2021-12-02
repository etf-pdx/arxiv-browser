import * as React from "react";
import { categories } from '../categories';
import FeedReader from "../components/FeedReader";

const Categories = () => {
  const apiUrl = "http://export.arxiv.org/api/query?search_query=";
  const resultsPerPage = 25;
  const [selectedCategory, setSelectedCategory] = React.useState("");

  return (
    <section>
      <header onClick={() => setSelectedCategory("")}>Categories{(selectedCategory)?` > ${selectedCategory}`:""}</header>
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
          <ul className="categoryList">
            {categories.map((cat, catIndex) => (
              <li className="category" key={catIndex}>
                <div>
                  <img src={cat.iconUrl} />
                  <header>{cat.name}</header>
                </div>
                <hr />
                <ul className="subCategoryList">
                  {cat.subCategories.map((subCat, subCatIndex) =>(
                    <li className="subCategory" key={subCatIndex}>
                      <input type="image" alt={subCat.name} src={subCat.iconUrl} onClick={() => setSelectedCategory(subCat.id)} />
                      <figcaption>{subCat.name}</figcaption>
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