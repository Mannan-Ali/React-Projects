import { useCallback, useEffect, useRef, useState } from "react";
import CheckBox from "./components/Checkbox";
function App() {
  const [length, funcLength] = useState(8);
  const [numAllow, funcNumAllow] = useState(false);
  const [charAllow, funcCharAllow] = useState(false);
  const [inputVal, funcinputVal] = useState("");

  const [copyButtonVal,copyButtonValFunc] = useState("copy");

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    funcinputVal(pass);
    copyButtonValFunc("copy")
  }, [length, numAllow, charAllow, funcinputVal]);

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllow,numAllow,funcinputVal])

  const copyPass = useRef(null)

  const copyInput=useCallback(()=>{
    copyPass.current?.select()
    window.navigator.clipboard.writeText(inputVal)
    copyButtonValFunc("copied");
  },[inputVal])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={inputVal}
            className="outliine-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyPass}
          />
          <button 
          onClick={copyInput}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {copyButtonVal}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                funcLength(event.target.value);
              }}
            />
            <label>Lenght: {length}</label>
          </div>
            <CheckBox dC={numAllow} id="numberInput" callFunc={funcNumAllow} label="Numbers"   For="numberInput"/>
            <CheckBox dC={charAllow} id="charInput" callFunc={funcCharAllow} label="Characters" For="charInput"/>

        </div>
      </div>
    </>
  );
}

export default App;
