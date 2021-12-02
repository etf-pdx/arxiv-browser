import * as React from "react";
import { withCookies, Cookies } from "react-cookie";
import { Navigate } from 'react-router-dom';
import { categories } from '../categories';
import Avatar from "../components/Avatar";
interface SignUpProps {
  cookies: Cookies
}

const SignUp = (props: SignUpProps) => {
  const cookieName = 'science-news-user-info';
  const { cookies } = props;
  const [cookieFound, setCookieFound] = React.useState(cookies.get(cookieName) ? true : false);

  const [checkedPreferences, setCheckedPreferences] = React.useState(categories.map((cat) => new Array(cat.subCategories.length).fill(false)) as boolean[][]);

  const [username, setUsername] = React.useState("");
  const [seed, setSeed] = React.useState("");

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
      setCookieFound(true);
    }
    event.preventDefault();
  };

  return (
    (cookieFound) ?
      <Navigate to='/home' />
      :
      <section>
        <header>Register Preferences</header>
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
export default withCookies(SignUp);