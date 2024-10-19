import {useState} from "react";
import "./App.css";


// 1st way
// let count=0;
// function Increase(){
//   //check notebook for explaination 
//   count++;
//   console.log(count)
// }




function App() {
  // const val=useState(23);
  const [count,setCount]= useState(0);

  function Increase(){
    setCount(count+1)
  }

  function Decrease(){
    setCount((prevCount)=>{
      return (prevCount <= 0 ? 0 : prevCount-1 )
    })
  }


  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
