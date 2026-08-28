import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Browse() {
  // State to hold items. Using mock data here that matches your sketch structure 
  // until the backend search endpoint is fully developed.
  const [items, setItems] = useState([
    { id: 1, title: 'DSLR camera kit', price_per_day: 4500, distance: '2.1', rating: '4.8', reviews: 23 },
    { id: 2, title: 'Mirrorless camera', price_per_day: 5500, distance: '3.4', rating: '4.6', reviews: 11 },
    { id: 3, title: 'Action camera', price_per_day: 3000, distance: '5.0', rating: '4.9', reviews: 40 }
  ]);

  return (
    <div className="main-content" style={{ display: 'flex', gap: '30px', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      
      {/* Left Sidebar - Filters */}
      <aside style={{ width: '250px', flexShrink: 0 }}>
        
        {/* Category Filter */}
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '15px', color: '#000080' }}>Category</h4>
          <label style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ marginRight: '10px' }} /> Tools
          </label>
          <label style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ marginRight: '10px' }} /> Cameras
          </label>
          <label style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
            <input type="checkbox" style={{ marginRight: '10px' }} /> Camping
          </label>
        </div>

        {/* Price Filter */}
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '15px', color: '#000080' }}>Price / day</h4>
          <input type="range" min="0" max="10000" style={{ width: '100%' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#555', marginTop: '5px' }}>
            <span>Rs. 0</span>
            <span>Rs. 10000+</span>
          </div>
        </div>

        {/* Availability Filter */}
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '15px', color: '#000080' }}>Availability</h4>
          <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }} />
          <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        {/* Distance Filter */}
        <div>
          <h4 style={{ marginBottom: '15px', color: '#000080' }}>Distance</h4>
          <select style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option>Within 5 km</option>
            <option>Within 10 km</option>
            <option>Within 25 km</option>
            <option>Anywhere</option>
          </select>
        </div>
      </aside>

      {/* Right Main Content - Results */}
      <main style={{ flex: 1 }}>
        
        {/* Results Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
            124 items near Negombo
          </span>
          <div>
            <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Sort:</label>
            <select style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' }}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Distance: Nearest</option>
              <option>Rating: Highest</option>
            </select>
          </div>
        </div>

        {/* Item List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {items.map((item) => (
            <div key={item.id} style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', backgroundColor: 'white', textDecoration: 'none', color: 'inherit' }}>
              
              {/* Item Thumbnail */}
              <div style={{ width: '200px', height: '140px', backgroundColor: '#f0f0f0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <span style={{ color: '#aaa' }}>Image placeholder</span>
              </div>
              
              {/* Item Details */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '20px', color: '#000080', margin: '0 0 10px 0' }}>{item.title}</h3>
                
                <p style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>
                  <strong>Rs. {item.price_per_day}</strong> / day &nbsp;&bull;&nbsp; {item.distance} km
                </p>
                
                <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#555' }}>
                  <span style={{ color: '#FFA500' }}>★</span> {item.rating} ({item.reviews} reviews)
                </p>

                <div>
                  <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                    <button className="rent-btn" style={{ padding: '8px 20px', width: 'auto' }}>View Details</button>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>

    </div>
  );
}

export default Browse;