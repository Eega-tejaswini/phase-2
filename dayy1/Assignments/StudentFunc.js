import React from "react";

function Student({ name, address, score }) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default Student;
