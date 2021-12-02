import * as React from "../_snowpack/pkg/react.js";
const Avatar = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "avatar"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `https://avatars.dicebear.com/api/avataaars/${props.seed}.svg`,
    width: "100px",
    height: "100px"
  }));
};
export default Avatar;
