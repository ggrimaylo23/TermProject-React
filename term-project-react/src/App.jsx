import Interests from "./components/Interests"
import { Routes, Route } from "react-router-dom"
import Biography from "./components/Biography"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Home from "./components/Home"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}
   

export default App
