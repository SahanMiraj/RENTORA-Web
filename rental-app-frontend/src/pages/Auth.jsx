import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  // State to toggle between Login and Register modes
  const [isLogin, setIsLogin] = useState(true);
  
  // Hook to navigate programmatically after successful login/register
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Placeholder for future backend authentication logic
    alert(isLogin ? "Login Successful! 🎉 Redirecting..." : "Registration Successful! 🎉 Redirecting...");
    
    // Redirect user to the Home page after successful submission
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '450px' }}>
        
        {/* Toggle Switches for Login and Register */}
        <div className="auth-tabs">
          <button 
            className={isLogin ? "tab-btn active" : "tab-btn"} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? "tab-btn active" : "tab-btn"} 
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h2 className="auth-title">
          {isLogin ? "Welcome Back! 👋" : "Create an Account 🚀"}
        </h2>

        {/* Authentication Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          
          {/* Conditional rendering: Fields only for Registration */}
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="07X XXX XXXX" required />
              </div>
            </>
          )}

          {/* Fields common to both Login and Register */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="hello@rentora.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {/* Conditional rendering: Bottom layout based on mode */}
          {isLogin ? (
            // Login Bottom Section: Remember Me & Forgot Password
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '14px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal', margin: 0, color: '#555' }}>
                <input type="checkbox" style={{ width: 'auto', padding: 0 }} /> Remember me
              </label>
              <a href="#" style={{ color: '#000080', textDecoration: 'none', fontWeight: 'bold' }}>Forgot password?</a>
            </div>
          ) : (
            // Register Bottom Section: Confirm Password & Host Checkbox
            <>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
              <div style={{ marginBottom: '25px', fontSize: '14px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal', margin: 0, color: '#333' }}>
                  <input type="checkbox" style={{ width: 'auto', padding: 0 }} /> 
                  I want to list items for rent too
                </label>
              </div>
            </>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Auth;