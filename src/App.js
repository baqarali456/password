
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [password,setPassword] = useState("");
  const [length,setLength] = useState(5);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);


  const Generator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz";
  if(number) str += "123456789"
  if(character) str += "~!@$%^&*?";
  
  for (let index = 1; index < length; index++) {
    pass += str[Math.floor(Math.random() * str.length ) + 1]
  }
  setPassword(pass)
  },[length,number,character,setPassword]);
 


  useEffect(()=>{
    Generator();
  },[length,number,character,Generator])
 
  return (
    <>
    <div>
     <h1>Password Generator</h1>
     <div>
     {/* password input */}
      <input type="text" value={password} readOnly/>
      <button className='mx-8' >copy</button>
      
     </div>
     {/* number input */}
     Number:<input type="checkbox" 
     onChange={()=>setNumber(!number)} 
     defaultChecked={number} />

     {/* character input */}
    Characters: <input type="checkbox" 
    onChange={()=>setCharacter(!character)} 
    defaultChecked={character} />

    {/* length */}
    Length: <input type="range" min={5} max={100} 
    onChange={(e)=>setLength(e.target.value)} 
    value={length} /> {length}

    </div>
    </>
      
   
  );
}

export default App;
