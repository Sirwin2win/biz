import React from "react";
import "./Style.css";
import some from "./style.module.css";
import { name, email } from "./app.js";
import { fullName, fullAge, fullEmail } from "./app2.js";
import Even from "./app3";
/*
React Style(css):
1. inline css
2. internal
3. external css
4. css modules
{key:"value"}
{color:"red"}

React Modules
A. export
1. Named Export, individually, all at once
2. default export

B. import

React Hooks
Hooks are used only in

*/

const Monday = () => {
  const Styles = {
    color: "blue",
    backgroundColor: "red",
    padding: "30px",
  };

  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <h1 style={Styles}>Monday</h1>
      <h2 className="member">Header Two</h2>
      <h3 className={some.people}>This is an imported module</h3>
      <p>
        {name} {email}
      </p>
      <p>
        {fullName} {fullEmail} {fullAge}
      </p>

      <Even />
    </div>
  );
};

export default Monday;
