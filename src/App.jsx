import "./index.css"
import './App.css'
import React from "react"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Contact from "./Components/Contact"
import {Routes, Route} from "react-router-dom"
import Project from "./Components/Projects"

function App() {

  return (
    <>
    <div className="min-h-screen">
        <Sidebar  />
        <Navbar />
        <Home />
        <Routes>
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
