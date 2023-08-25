import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/my-website" className="site-title">Luke's Website</Link>
            <ul>
                <CustomLink to="/my-website/about-me">About</CustomLink>
                <CustomLink to="/my-website/my-research">Research</CustomLink>
                <CustomLink to="/my-website/my-projects">Projects</CustomLink>
                <a href="https://luke-ponssen.github.io/resume/" target="_blank" rel="noopener noreferrer">Resume</a>
            </ul> 
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}