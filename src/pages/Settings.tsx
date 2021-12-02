import * as React from "react";
import { withCookies, Cookies } from "react-cookie";
import { categories } from "../categories";
import Avatar from '../components/Avatar';

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
    if(checkedPreferences.every((cat) => cat.every(v => v == false)))
    {
      // if there are not any checked preferences
      alert("Please select your favorite categories for a better user experience!");
    }else{
      var preferences = [];
      for(var catIndex = 0; catIndex < checkedPreferences.length; catIndex++){
        for(var index = 0; index < checkedPreferences[catIndex].length; index++){
          if(checkedPreferences[catIndex][index])
            preferences.push(categories[catIndex].subCategories[index].id);
        }
      }
      cookies.set(cookieName, { "username" : username, "seed": seed , "preferences": preferences })
    }
    event.preventDefault();
  };

  return (
      <section>
        <header>Settings</header>
        <form onSubmit={handleSubmit}>
          <div className="avatarSetter">
            <div className="avatarInputs">
              <label>
                Username:&emsp;
                <input type="text" value={username} onChange={(event: any) => setUsername(event.target.value)} required />
              </label>
              <br />
              <label>
                Seed:&emsp;
                <input type="text" value={seed} onChange={(event: any) => setSeed(event.target.value)} required />
              </label>
            </div>
            <Avatar seed={seed} />
          </div>
          <br />
          <h4>Favorite Categories</h4>
          <ul>
            {categories.map((cat, catIndex) => {
              return (
                <li key={catIndex}>
                  <h5>{cat.name}</h5>
                  <ul className="preferencesCatList">
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