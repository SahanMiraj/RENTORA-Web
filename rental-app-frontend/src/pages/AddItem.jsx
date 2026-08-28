import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Cameras',
    description: '',
    price: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Item added successfully!");
    navigate('/'); 
  };

  return (
    <div className="main-content" style={{ maxWidth: '700px', margin: '40px auto', padding: '40px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#000080', marginBottom: '30px', textAlign: 'center', fontSize: '32px' }}>List Your Item for Rent</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Item Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="e.g. Sony A7S III Camera" 
            required 
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none', fontSize: '16px', backgroundColor: 'white', color: '#333' }} 
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Category</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none', fontSize: '16px', backgroundColor: 'white', color: '#333' }}
          >
            <option value="Cameras">Cameras</option>
            <option value="Tools">Power Tools</option>
            <option value="Camping">Camping Gear</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Describe the condition, features, and what is included." 
            required 
            rows="5" 
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none', resize: 'vertical', fontSize: '16px', backgroundColor: 'white', color: '#333' }}
          ></textarea>
        </div>

        <div style={{ display: 'flex', gap: '20px', textAlign: 'left' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Price per Day (Rs.)</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              placeholder="e.g. 1500" 
              required 
              min="0" 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none', fontSize: '16px', backgroundColor: 'white', color: '#333' }} 
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Location</label>
            <input 
              type="text" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="e.g. Colombo" 
              required 
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc', outline: 'none', fontSize: '16px', backgroundColor: 'white', color: '#333' }} 
            />
          </div>
        </div>

        <div style={{ textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Upload Image</label>
          <div style={{ border: '2px dashed #ccc', padding: '40px', textAlign: 'center', borderRadius: '6px', backgroundColor: '#f9f9f9', cursor: 'pointer' }}>
            <span style={{ color: '#666', fontSize: '16px' }}>Click to browse or drag and drop an image here</span>
          </div>
        </div>

        <button type="submit" style={{ padding: '15px', backgroundColor: '#FFA500', color: '#000080', border: 'none', borderRadius: '6px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '15px' }}>
          Publish Item
        </button>

      </form>
    </div>
  );
}

export default AddItem;