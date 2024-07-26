const express = require('express');
const mysql = require('mysql2');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: '',  // Replace with your MySQL password (leave empty if no password)
  database: 'express-app'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes(db));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
