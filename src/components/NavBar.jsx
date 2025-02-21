import { Link } from "react-router-dom"
import "../css/Navbar.css"
import About from "../pages/About"
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Travel diaries</Link>
        </div>
        
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Favourite" className="nav-link">Favourite Location</Link>
            <Link to="/" className="nav-link">Best Destination</Link>
            <Link to="/about" className="nav-link">About</Link>
        </div>
    </nav>
}

export default NavBar