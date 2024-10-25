import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const navigate = useNavigate();

  // Check if user is logged in from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');  // Remove the login status from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>CostCompass</h1> {/* Project Name on the left */}
        <h4>Navigate the Best Prices, Every Time</h4>
      </div>
      <div className="navbar-right">
        <ul>
          {/* Conditionally render links based on login status */}
          {!isLoggedIn ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <li>
              {/* Using button for logout instead of Link */}
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
