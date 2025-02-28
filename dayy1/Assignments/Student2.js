import React, { useState } from "react";

function Display({ name, address }) {
  const [studentName, setStudentName] = useState(name);
  const [studentAddress, setStudentAddress] = useState(address);

  return (
    <div>
      <h2>Update Student Info</h2>
      <label>Name:</label>
      <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      <br />
      <label>Address:</label>
      <input type="text" value={studentAddress} onChange={(e) => setStudentAddress(e.target.value)} />
    </div>
  );
}

export default Display;
