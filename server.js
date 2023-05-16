const express = require('express');
const mysql2 = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;


const connection = mysql2.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'password', 
  database: 'cms' 
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');

  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


app.get('/departments', (req, res) => {
  
  const query = 'SELECT * FROM departments';

  connection.query(query, (error, results) => {
    if (error) throw error;

    
    res.json(results);
  });
});

