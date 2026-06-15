import Interests from "./components/Interests"
import { Routes, Route } from "react-router-dom"
import Biography from "./components/Biography"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1> Home </h1>} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
   

export default App
