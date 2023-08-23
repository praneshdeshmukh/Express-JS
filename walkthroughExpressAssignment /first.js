const express = require('express');
const app = express();
const port = 4000; 

const menProducts = [
  { id: 1, name: 'Product 1', category: 'Men' },
];

const womenProducts = [
  { id: 1, name: 'Product 1', category: 'Women' },
];

// Endpoint to get a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to Men & Women Dummy Data');
});

// Endpoint to get 10 products data of men
app.get('/men', (req, res) => {
  res.json(menProducts.slice(0, 10));
});

// Endpoint to get 10 products data of women
app.get('/women', (req, res) => {
  res.json(womenProducts.slice(0, 10));
});

// Endpoint for other routes (page not found)
app.get('/other', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
