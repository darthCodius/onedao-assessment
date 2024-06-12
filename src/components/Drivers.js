import React from "react";
function Drivers({ isLoggedIn }) {
  isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
export default Drivers;
