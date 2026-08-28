import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  // Initialize the navigate function to change pages programmatically
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    
    // Redirect the user to the My Bookings page after successful payment
    navigate('/bookings');
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        
        <h2 className="auth-title">Secure Checkout 🔒</h2>
        
        {/* Order Summary Section */}
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #ddd' }}>
          <h4 style={{ color: '#333', marginBottom: '10px' }}>Order Summary</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Rental Fee (2 Days)</span>
            <strong>Rs. 10,000</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Platform Fee</span>
            <strong>Rs. 500</strong>
          </div>
          <hr style={{ border: '0.5px solid #ccc', margin: '10px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#000080', fontSize: '18px' }}>
            <strong>Total Amount</strong>
            <strong>Rs. 10,500</strong>
          </div>
        </div>

        {/* Payment Details Form */}
        <form className="auth-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label>Name on Card</label>
            <input type="text" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" required maxLength="16" />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <div className="form-group" style={{ flex: '1', marginBottom: '0' }}>
              <label>Expiry (MM/YY)</label>
              <input type="text" placeholder="12/28" required />
            </div>
            <div className="form-group" style={{ flex: '1', marginBottom: '0' }}>
              <label>CVV</label>
              <input type="password" placeholder="123" required maxLength="3" />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Pay Now
          </button>
        </form>

      </div>
    </div>
  );
}

export default Payment;