import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [arr, setArr] = useState(['ram', 'shyam', 'hari', 'geeta'])



  return (
    <div className="App">



      <h1>{arr.map((item, id) => {
        return (
          <li>{item}</li>
        )
      })}</h1>

<button onClick={() =>{ 
  const tempArr=[...arr]
  tempArr.pop()
setArr(tempArr)}}>Delete</button>

    </div>
  );

}
export default App;
