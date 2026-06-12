import Interests from "./components/Interests"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1> Home </h1>} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
    </div>
  )
}
   

export default App
