import logo from './logo.svg';
import './App.css';
import Add1 from './Add1';
import Controlledcomp from './Controlledcomp';
import Addtwonum from './Addtwonum';
import AddNumbers from './Functioncomp';
import Create from './Create';
import Axios from './Axios';
import Axioscreate from './Axioscreate';
import Axiosdelete from './Axiosdelete';
import Register from './Register';
import RegisterUser from './Registeruser';
function App() {
  return (
    <div className="App">
 
  <Add1 />
 <br></br>
 <Controlledcomp />
 <br></br>
 <h1> using uncontrolled comp </h1>
 <Addtwonum />
 <br></br>
 <h1>using Function Components</h1>
 <AddNumbers />

 <br></br>
 <Create /> 
 <br></br>
 <Axios/>

 <br></br>
 <Axioscreate />

 <h1> axios delete </h1>
 <Axiosdelete/>
 <h1>Forms using Formik </h1>
 <Register/>
 <br></br>
 <br></br>
 <RegisterUser/>

    </div>
  );
}

export default App;
