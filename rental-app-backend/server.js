const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Read data coming from the frontend

// 1. Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Default XAMPP user
    password: '',        // Default XAMPP password is empty
    database: 'rental_db' // Our project database
});

db.connect((err) => {
    if (err) {
        console.log("Database connection error: ", err);
    } else {
        console.log("Database connected successfully! 🥳");
    }
});

// 3. API Endpoint to get all items
app.get('/items', (req, res) => {
    const sql = "SELECT * FROM items"; // Get all items from the table
    
    db.query(sql, (err, data) => {
        if (err) {
            return res.json({ error: "Error getting data!" });
        }
        return res.json(data); // Send the data to the frontend
    });
});

// 2. Start the Server
app.listen(3001, () => {
    console.log("Server is running on Port 3001! 🚀");
});