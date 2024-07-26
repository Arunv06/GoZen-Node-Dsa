const express = require('express');
const app = express();
const port = 3000;

// Assuming you have a data store (e.g., in-memory array)
let products = [{
    id: 1,
    name: "Mobiles",
    description: "A mobile with 8Gen Processor",
    price: 19999,
  },
  {
    id: 2,
    name: "Laptop",
    description: "A Laptop with 12GB Ram",
    price: 30000,
  },
];

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes for CRUD operations (replace 'products' with your resource)
app.get('/products', (req, res) => {
  // Logic to retrieve all products
  res.json(products);
  console.log(products)
});

app.post('/products', (req, res) => {
  // Logic to create a new product
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  // Logic to retrieve a specific product
  const productId = req.params.id;
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
    console.log(product)
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.put('/products/:id', (req, res) => {
  // Logic to update a product
  const productId = req.params.id;
  const updatedProduct = req.body;
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.delete('/products/:id', (req, res) => {
  // Logic to delete a product
  const productId = req.params.id;
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
