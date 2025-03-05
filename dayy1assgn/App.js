import logo from './logo.svg';
import './App.css';
import { First, Second, Third, Fourth } from './Functioncomponent';
import { First1, Second1, Third1, Fourth1 } from './ClassComponent';
import Student from './StudentFunc';
import Student1 from './StudentClass';
import Display from './Student2';

function App() {

  const studentData = {
    name: "Vinnu",
    address: "Rampally",
    scores: [85, 90, 78]
  };

  const handleHello = () => alert("Hello!");
  const handleBye = () => alert("Bye!");

  return (
    <div className="App">
      <h1>Hello World</h1>
      <First />
      <Second />
      <Third />
      <Fourth />
      
      <h1>Class Components</h1>
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />

      <Student name="Vinnu" address="Rampally" score={[90]} />
      <Student1 name="Vinnu" address="Rampally" scores={[90]} />

     
      <Display name={studentData.name} address={studentData.address} />
      <br></br>

      <button onClick={handleHello}>Say Hello</button>
      <button onClick={handleBye}>Say Bye</button>
    </div>
  );
}

export default App;
