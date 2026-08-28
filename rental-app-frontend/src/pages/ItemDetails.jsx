import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetails() {
  // Extract the item ID from the URL parameters
  const { id } = useParams();
  
  // State to hold the specific item data
  const [item, setItem] = useState(null);

  // Fetch data from the backend when the component mounts or ID changes
  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Find the exact item that matches the ID from the URL
          const selectedItem = data.find((i) => i.id.toString() === id);
          setItem(selectedItem);
        }
      })
      .catch((error) => console.log("Error fetching item data:", error));
  }, [id]);

  // Display a loading state until the data is fully fetched
  if (!item) {
    return (
      <div className="main-content" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Loading item details... ⏳</h2>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div style={{ display: 'flex', gap: '40px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left', backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
        
        {/* Item Image Section */}
        <div style={{ flex: '1' }}>
          <div style={{ width: '100%', height: '400px', backgroundColor: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '80px' }}>📸</span>
          </div>
        </div>

        {/* Item Details & Booking Operation Section */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ color: '#000080', fontSize: '36px', margin: '0 0 15px 0' }}>{item.title}</h2>
          
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '20px', lineHeight: '1.6' }}>
            {item.description}
          </p>
          
          <h3 style={{ color: '#FFA500', fontSize: '32px', margin: '0 0 20px 0' }}>
            Rs. {item.price_per_day} <span style={{ fontSize: '18px', color: '#888' }}>/ Day</span>
          </h3>
          
          <p style={{ marginBottom: '30px', fontWeight: 'bold', color: '#333' }}>
            Owned by: <span style={{ color: '#000080' }}>Community Member</span>
          </p>

          {/* Operation Area (Date Picking) */}
          <div style={{ backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h4 style={{ marginBottom: '15px', color: '#000080', fontSize: '20px' }}>Book this item</h4>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ flex: '1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Pick-up Date</label>
                <input type="date" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ flex: '1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Return Date</label>
                <input type="date" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
            </div>

            {/* Added Link component to route to checkout page */}
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <button className="auth-submit-btn" style={{ width: '100%' }}>
                Proceed to Checkout
              </button>
            </Link>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default ItemDetails;