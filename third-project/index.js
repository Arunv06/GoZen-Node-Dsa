const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// GET request
app.get('/', (req, res) => {
    res.send('Hello from GET request!');
});

// POST request
app.post('/data', (req, res) => {
    const data = req.body;
    console.log(data); 
    res.json({ message: 'Data received successfully' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
