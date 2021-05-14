import React from "react";
import Input from "./Input";

function LogIn() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input ype="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LogIn;
