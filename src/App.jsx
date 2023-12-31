import "./index.css"
import './App.css'
import React from "react"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Made from "./Components/Made";
import {Routes, Route} from "react-router-dom"
import Project from "./Components/Projects"

function App() {

  return (
    <>
    <div className="min-h-screen overflow-y-auto scroll-smooth">
        <Sidebar  />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Made" element={<Made />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
    </>
  )
}

export default App
