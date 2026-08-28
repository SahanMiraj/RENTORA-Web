import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Mock authentication state (will be connected to actual auth later)
  const isLoggedIn = false; 

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000080', padding: '15px 50px', color: 'white' }}>
      
      {/* Logo Section */}
      <Link to="/" style={{ color: '#FFA500', textDecoration: 'none', fontSize: '28px', fontWeight: 'bold' }}>
        RENTORA
      </Link>
      
      {/* Compact Search Bar */}
      <div style={{ flex: 1, maxWidth: '400px', margin: '0 30px', display: 'flex' }}>
        <input 
          type="text" 
          placeholder="Search items..." 
          style={{ width: '100%', padding: '10px 15px', borderRadius: '20px', border: 'none', outline: 'none' }}
        />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', gap: '20px', alignItems: 'center', margin: 0 }}>
        <li><Link to="/browse" style={{ color: 'white', textDecoration: 'none' }}>Browse</Link></li>
        
        {/* Conditional Rendering based on Authentication */}
        {isLoggedIn ? (
          <>
            <li style={{ cursor: 'pointer' }}>Notifications</li>
            <li style={{ cursor: 'pointer', fontWeight: 'bold' }}>My Profile</li>
          </>
        ) : (
          <li><Link to="/login" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Login / Register</Link></li>
        )}

        {/* Switch to Renter Button */}
        <li>
          <Link to="/add-item">
            <button style={{ padding: '8px 15px', backgroundColor: '#FFA500', color: '#000080', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              Switch to Renter
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;