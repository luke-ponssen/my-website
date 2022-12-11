import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import AboutMe from './pages/AboutMe.js'
import Projects from './pages/Projects.js'
import { Route, Routes } from 'react-router-dom'
import {Helmet} from "react-helmet"

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
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/myprojects" element={<Projects />} />
                </Routes>
            </div>
        </>
    )
}

export default App;