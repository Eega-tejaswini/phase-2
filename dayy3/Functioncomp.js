import React, { useRef, useState } from "react";

const AddNumbers = () => {
  const num1= useRef();
  const num2 = useRef();
  const [sum, setSum] = useState(0);

  const handleAddition = () => {
    setSum(Number(num1.current.value) + Number(num2.current.value));
  };

  return (
    <div>
      <input type="number" ref={num1} />
      <input type="number" ref={num2} />
      <button onClick={handleAddition}>Add</button>
      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default AddNumbers;
