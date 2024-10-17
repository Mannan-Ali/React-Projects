import { useState } from 'react'
import './App.css'


function App() {
const [col ,setCol] = useState('black');

function handleChange(color){
  setCol(color);
}
  return (
    <>
    <div className='base' style={{backgroundColor : col}} />
    <div className='colors'>
    <button  onClick={()=>{handleChange('yellow')}} className='button'>yellow</button>
    <button onClick={()=>{handleChange('brown')}} className='button'>brown</button>
    <button onClick={()=>{handleChange('green')}} className='button'>green</button>
    <button onClick={()=>{handleChange('orange')}} className='button'>orange</button>
    <button onClick={()=>{handleChange('blue')}} className='button'>blue</button>
    </div>
    </>
  )
}

export default App
