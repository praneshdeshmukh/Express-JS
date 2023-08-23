const express = require('express');
const app = express();
const port = 7000; 

let counter = 0;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
