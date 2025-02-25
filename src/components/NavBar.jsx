import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ onLoginClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Travel diaries</Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Favourite" className="nav-link">Favourite Location</Link>
        <Link to="/" className="nav-link">Best Destination</Link>
        <Link to="/about" className="nav-link">About</Link>
        <button 
          className="login-button"
          onClick={onLoginClick}
        >
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;