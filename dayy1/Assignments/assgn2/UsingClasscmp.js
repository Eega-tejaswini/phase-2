import React, { Component } from "react";

class LoginClass extends Component {
  render() {
    return (
      <div>
        <h2>Login (Class Component)</h2>
        <p>Name: {this.props.username}</p>
      </div>
    );
  }
}

class WelcomeClass extends Component {
  render() {
    return (
      <div>
        <h2>Welcome (Class Component)</h2>
        <p>Hello, {this.props.username}!</p>
      </div>
    );
  }
}

export { LoginClass, WelcomeClass };
