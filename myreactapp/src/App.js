// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// const App = () => {
//   const [arr, setArr] = useState(['ram', 'shyam', 'hari', 'geeta'])



//   return (
//     <div className="App">



//       <h1>{arr.map((item, id) => {
//         return (
//           <li>{item}</li>
//         )
//       })}</h1>

// <button onClick={() =>{ 
//   const tempArr=[...arr]
//   tempArr.pop()
// setArr(tempArr)}}>Delete</button>

//     </div>
//   );

// }
// export default App;





import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

const App = () => {
  const [name,setName]=useState('kaylin')
 useEffect(()=>{
  setName('Asmita')
 },[])



  return (
    <div className="App">
<button onClick={()=>setName('ayush')}>Change</button>
{/* //setName ma bracket lauda already first load mai render hunxa ani nalaida chai pachi hunxa */}
<p>{name}</p>

    </div>
  );

}
export default App;

