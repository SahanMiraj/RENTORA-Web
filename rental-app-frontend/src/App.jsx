import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

// Import Components and Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import Payment from './pages/Payment';
import MyBookings from './pages/MyBookings';
import Browse from './pages/Browse';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        {/* The new reusable Navbar component */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2026 RENTORA Platform. Built for your Portfolio.</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;