import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import AboutMe from './pages/AboutMe.js'
import Projects from './pages/Projects.js'
import Chatbot from './pages/Chatbot.js'
import { Route, Routes } from 'react-router-dom'
import {Helmet} from "react-helmet"
import React, { useEffect } from "react"

function App() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Luke's Website</title>
            </Helmet>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/my-website" element={<Home />} />
                    <Route path="/my-website/about-me" element={<AboutMe />} />
                    <Route path="/my-website/my-projects" element={<Projects />} />
                    <Route path="/my-website/chatbot" element={<Chatbot />} />
                </Routes>
            </div>
        </>
    )
}

export default App;