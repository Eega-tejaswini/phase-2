import React from "react";
import { LoginClass, WelcomeClass } from "./UsingClasscmp";
import { LoginFunction, WelcomeFunction } from "./UsingFuncmp";

function App() {
  const username = "Vinnu"; 

  return (
    <div className="App">
      <h1>React User Login Example</h1>

      {/* Class Components */}
      <LoginClass username={username} />
      <WelcomeClass username={username} />

      <hr />

      {/* Function Components */}
      <LoginFunction username={username} />
      <WelcomeFunction username={username} />
    </div>
  );
}

export default App;
