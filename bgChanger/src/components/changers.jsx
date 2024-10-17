/* eslint-disable react/prop-types */
import { useState } from 'react'
function ChngColor(props){

    const [val,funcVal] = useState("black");

    function handleColorChange(event){
      console.log(event.target.value);
    }

    return (
        <button  onClick={handleColorChange} className="button">{props.name}</button>
    )

}

export default ChngColor;