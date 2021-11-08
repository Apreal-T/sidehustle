
import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';

function App() {
  const [hello,setHello]= useState("Hello React");
  const handleUpdate = () => setHello ("Good Bye React");

  const[increment, setIncrement]= useState(0);
  const handleIncrement= () =>{
    setIncrement(increment + 1);
  };
  const handleDecrement = () =>{
    setIncrement(increment - 1);
  };
  return (
    <div className="App">
      <div  onClick = {handleUpdate}>
        <Heading title={hello} />
      </div>
      <div className= "btn">
        <h1>{increment}</h1>
        <div className= "btn">
          <button onClick={handleDecrement}>Minus</button>
          <button onClick={handleIncrement}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
