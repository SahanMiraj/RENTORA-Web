import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* Upgraded Hero Section */}
      <header className="hero-section" style={{ height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Added lineHeight to fix overlapping text */}
          <h1 style={{ fontSize: '48px', marginBottom: '20px', lineHeight: '1.2' }}>Rent exactly what you need, when you need it.</h1>
          <p style={{ fontSize: '20px', marginBottom: '40px' }}>Don't buy it for a day. Rent it from your neighbors.</p>
          
          {/* Main Search Bar */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
            {/* Forced white background and dark text color for inputs */}
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              style={{ flex: 1, padding: '15px', border: 'none', fontSize: '18px', outline: 'none', backgroundColor: 'white', color: '#333' }} 
            />
            <input 
              type="text" 
              placeholder="Location (e.g. Colombo)" 
              style={{ width: '200px', padding: '15px', borderLeft: '1px solid #ddd', borderTop: 'none', borderRight: 'none', borderBottom: 'none', fontSize: '18px', outline: 'none', backgroundColor: 'white', color: '#333' }} 
            />
            <button style={{ padding: '15px 30px', backgroundColor: '#000080', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
              Search
            </button>
          </div>

          {/* Category Tiles */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            {['Cameras', 'Camping', 'Power Tools', 'Electronics'].map((category) => (
              <div key={category} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', border: '1px solid white', fontWeight: 'bold' }}>
                {category}
              </div>
            ))}
          </div>

        </div>
      </header>

      {/* Main Content - Items Grid */}
      <main className="main-content">
        <h2 className="section-title">Featured Items Near You</h2>
        
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-desc">{item.description}</p>
              <h4 className="item-price">Rs. {item.price_per_day} / Day</h4>
              
              <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                <button className="rent-btn">Rent This</button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;