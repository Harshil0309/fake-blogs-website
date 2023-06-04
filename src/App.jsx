import { useState } from "react"

import styling from "./App.module.css"

function App() {
  console.log("App", styling);
  return (
   <h1 className={styling.title}>HELLO</h1>
  )
}

export default App
