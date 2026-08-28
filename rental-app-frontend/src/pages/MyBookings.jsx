import React from 'react';
import { Link } from 'react-router-dom';

function MyBookings() {
  return (
    <div className="main-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      
      {/* Success Message / Confirmation */}
      <div style={{ backgroundColor: '#e6ffe6', padding: '20px', borderRadius: '8px', border: '1px solid #b3ffb3', marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ color: '#008000', marginBottom: '10px' }}>🎉 Payment Successful!</h2>
        <p style={{ color: '#333', fontSize: '16px' }}>Your booking has been confirmed. The owner will contact you shortly.</p>
      </div>

      <h2 style={{ color: '#000080', marginBottom: '20px', fontSize: '28px' }}>My Bookings 📅</h2>

      {/* Booking Card */}
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '5px solid #FFA500' }}>
        <div>
          <h3 style={{ color: '#000080', marginBottom: '5px' }}>Sony A7S III Camera</h3>
          <p style={{ color: '#555', marginBottom: '5px' }}><strong>Pick-up:</strong> 2026-09-01 | <strong>Return:</strong> 2026-09-03</p>
          <span style={{ display: 'inline-block', backgroundColor: '#FFA500', color: '#000080', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            Confirmed
          </span>
        </div>
        
        <div>
          <h3 style={{ color: '#333', margin: '0' }}>Rs. 10,500</h3>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/">
          <button className="auth-submit-btn" style={{ width: 'auto', padding: '10px 20px' }}>
            Browse More Items
          </button>
        </Link>
      </div>

    </div>
  );
}

export default MyBookings;