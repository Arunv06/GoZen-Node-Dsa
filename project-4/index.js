const express = require('express');
const app = express();

// Custom middleware
const loggerMiddleware = (req, res, next) => {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${method} ${url} from ${ip}`);
  next(); // Pass control to the next middleware or route handler
};

// Apply middleware to all requests
app.use(loggerMiddleware);

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
