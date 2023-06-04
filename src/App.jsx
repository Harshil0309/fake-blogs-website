import { useState , useRef, useEffect} from "react"
import styling from "./App.module.css"

function App() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    if(inputRef == null) return;
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef}  />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
} 

export default App
