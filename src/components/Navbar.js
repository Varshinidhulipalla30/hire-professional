import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar">
      <h2>Hire Professional</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li>Welcome, {user.email}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
