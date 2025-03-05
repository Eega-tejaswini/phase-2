import React, { Component } from "react";

class Student1 extends Component {
  render() {
    const { name, address, scores } = this.props;
    return (
      <div>
        <h2>Student Information (Class)</h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Scores: {scores}</p>
      </div>
    );
  }
}

export default Student1;
