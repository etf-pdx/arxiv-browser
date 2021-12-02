import * as React from "../_snowpack/pkg/react.js";
import {withCookies} from "../_snowpack/pkg/react-cookie.js";
import {categories} from "../categories.js";
import Avatar from "../components/Avatar.js";
const Settings = (props) => {
  const cookieName = "science-news-user-info";
  const {cookies} = props;
  const cookie = cookies.get(cookieName);
  const [username, setUsername] = React.useState(cookie.username);
  const [seed, setSeed] = React.useState(cookie.seed);
  const [checkedPreferences, setCheckedPreferences] = React.useState(categories.map((cat) => new Array(cat.subCategories.length).fill(false)));
  const handlePreferenceChange = (catIndex, index) => {
    const updatedPreferences = [...checkedPreferences];
    updatedPreferences[catIndex][index] = !updatedPreferences[catIndex][index];
    setCheckedPreferences(updatedPreferences);
  };
  const handleSubmit = (event) => {
    if (checkedPreferences.every((cat) => cat.every((v) => v == false))) {
      alert("Please select your favorite categories for a better user experience!");
    } else {
      var preferences = [];
      for (var catIndex = 0; catIndex < checkedPreferences.length; catIndex++) {
        for (var index = 0; index < checkedPreferences[catIndex].length; index++) {
          if (checkedPreferences[catIndex][index])
            preferences.push(categories[catIndex].subCategories[index].id);
        }
      }
      cookies.set(cookieName, {username, seed, preferences});
    }
    event.preventDefault();
  };
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("header", null, "Settings"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "avatarSetter"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "avatarInputs"
  }, /* @__PURE__ */ React.createElement("label", null, "Username: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: username,
    onChange: (event) => setUsername(event.target.value),
    required: true
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, "Seed: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: seed,
    onChange: (event) => setSeed(event.target.value),
    required: true
  }))), /* @__PURE__ */ React.createElement(Avatar, {
    seed
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h4", null, "Favorite Categories"), /* @__PURE__ */ React.createElement("ul", null, categories.map((cat, catIndex) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: catIndex
    }, /* @__PURE__ */ React.createElement("h5", null, cat.name), /* @__PURE__ */ React.createElement("ul", {
      className: "preferencesCatList"
    }, cat.subCategories.map(({name}, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
      type: "checkbox",
      name,
      value: name,
      checked: checkedPreferences[catIndex][index],
      onChange: () => handlePreferenceChange(catIndex, index)
    }), " ", name)))));
  })), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    value: "Submit"
  })));
};
export default withCookies(Settings);
