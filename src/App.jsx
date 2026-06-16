import Interests from "./components/Interests"
import { Routes, Route, Link } from "react-router-dom"
import Biography from "./components/Biography"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Home from "./components/Home"

// have a navbar at the top with the different links to the different pages you can browse to.
// should show up regardless of what page the user is on.
function App() {

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/biography">Biography</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/gallery">Photo Gallery</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<h1 className="not-found">Error! Page Not Found!</h1>} />
      </Routes>

    </div>
  )
}
   

export default App
