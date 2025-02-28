import React from "react";

const LoginFunction = ({ username }) => {
  return (
    <div>
      <h2>Login (Function Component)</h2>
      <p>Name: {username}</p>
    </div>
  );
};

const WelcomeFunction = ({ username }) => {
  return (
    <div>
      <h2>Welcome (Function Component)</h2>
      <p>Hello, {username}!</p>
    </div>
  );
};

export { LoginFunction, WelcomeFunction };
