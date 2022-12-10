import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import AboutMe from './pages/AboutMe.js'
import Projects from './pages/Projects.js'
import { Route, Routes } from 'react-router-dom'

function App() {

    

    return (
        <>
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