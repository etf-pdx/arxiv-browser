import * as React from "react";
import { withCookies, Cookies } from "react-cookie";
import { categories } from "../categories";

interface SettingsProps {
  cookies: Cookies
}
interface Cookie {
  username: string,
  seed: string,
  preferences: string[]
}

const Settings = (props: SettingsProps) => {
  const cookieName = 'science-news-user-info';
  const { cookies } = props;
  const cookie = cookies.get(cookieName) as Cookie;

  
  const [username, setUsername] = React.useState(cookie.username);
  const [seed, setSeed] = React.useState(cookie.seed);
  const [checkedPreferences, setCheckedPreferences] = React.useState(categories.map((cat) => new Array(cat.subCategories.length).fill(false)) as boolean[][]);

  const handlePreferenceChange = (catIndex: number, index: number) => {
    const updatedPreferences = [...checkedPreferences];
    updatedPreferences[catIndex][index] = !updatedPreferences[catIndex][index];
    setCheckedPreferences(updatedPreferences);
  }

  const handleSubmit = (event: any) => {
    var preferences = [];
    for(var catIndex = 0; catIndex < checkedPreferences.length; catIndex++){
      for(var index = 0; index < checkedPreferences[catIndex].length; index++){
        if(checkedPreferences[catIndex][index])
          preferences.push(categories[catIndex].subCategories[index].id);
      }
    }
    cookies.set(cookieName, { "username" : username, "seed": seed , "preferences": preferences })
    event.preventDefault();
  };

  return (
      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Username:&ensp;
            <input type="text" value={username} onChange={(event: any) => setUsername(event.target.value)} required />
          </label>
          <br />
          <div className="avatar">
            <img src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} width="100px" height="100px" />
          </div>
          <br />
          <label>
            Seed:&ensp;
            <input type="text" value={seed} onChange={(event: any) => setSeed(event.target.value)} required />
          </label>
          <br />
          <h4>Favorite Categories</h4>
          <ul>
            {categories.map((cat, catIndex) => {
              return (
                <li key={catIndex}>
                  <h5>{cat.name}</h5>
                  <ul>
                    {cat.subCategories.map(({name}, index) =>
                      <li key={index}>
                        <label>
                          <input
                            type="checkbox"
                            name={name}
                            value={name}
                            checked={checkedPreferences[catIndex][index]}
                            onChange={() => handlePreferenceChange(catIndex, index)}
                          />
                          &ensp;{name}
                        </label>
                      </li>
                    )}
                  </ul>
                </li>
              );
            })}
          </ul>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
  );
}
export default withCookies(Settings);