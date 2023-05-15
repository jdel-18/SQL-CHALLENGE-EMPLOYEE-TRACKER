const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
  
    // Call the function to start the application
    startApp();
  });
  
  