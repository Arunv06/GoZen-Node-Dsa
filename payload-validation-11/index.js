const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Joi schema for validation
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().integer().min(18).required(),
});

// Validation middleware
const validatePayload = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

// validation middleware for a specific route
app.post('/users', validatePayload, (req, res) => {
  // If validation passed, handle the request here
  res.status(200).json({ message: 'User data is valid', data: req.body });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
