export const AuthButton = (props)=>{
    let{isLoggedIn} = props;
    if(isLoggedIn)
    {
     return <button> Logout </button>
    }
    else 
    {
     return <button> Login </button>
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