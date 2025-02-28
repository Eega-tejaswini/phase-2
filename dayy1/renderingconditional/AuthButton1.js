import React from 'react'

export default function AuthButton1(props) {
    let {isLoggedIn} = props;
    switch(isLoggedIn)
    {
        case true:
            {
            return <button> Logout </button>
            break;
             }
            case false :
                {
                    return <button> Login </button>
                break;
                }
                default:
                    {
                        return null;
                    }

    }
  // function App() {
//   return (
//     <div className="App">
//       <h1> USING IF ELSE </h1>
//      < App1 />
//      <h2> USING TERNERY </h2>
//      <App2 />
//      <h1> USING EQUALS </h1>
//      <App3 />
  
}
