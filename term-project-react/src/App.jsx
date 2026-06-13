import Interests from "./components/Interests"
import { Routes, Route } from "react-router-dom"
import Biography from "./components/Biography"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1> Home </h1>} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
    </div>
  )
}
   

export default App
