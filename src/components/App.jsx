import React from "react";
import LogIn from "./LogIn";

var isLoggedIn = false;

const currentTime = new Date(2021, 5, 14, 1, 49).getHours();
console.log(currentTime);

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <LogIn />;
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {
        // isLoggedIn === true ? <h1>Hello</h1> : <LogIn />
        isLoggedIn ? <h1>Hello</h1> : <LogIn />
      } */}
      {/* Clock >> 1AM (1:00) 1PM (13:00) */}
      {/* {currentTime < 12 ? <h1>Why are you still working?</h1> : null} */}

      {currentTime < 12 && <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;
