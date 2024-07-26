const express = require('express');

const userRoutes = (db) => {
  const router = express.Router();

  // Create a new user
  router.post('/', (req, res) => {
    const { name, email, age } = req.body;
    const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
    db.query(sql, [name, email, age], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send('User created.');
    });
  });

  // Read all users
  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).json(results);
    });
  });

  // Read a single user
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.length === 0) {
        return res.status(404).send('User not found.');
      }
      res.status(200).json(result[0]);
    });
  });

  // Update a user
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?';
    db.query(sql, [name, email, age, id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.affectedRows === 0) {
        return res.status(404).send('User not found.');
      }
      res.status(200).send('User updated.');
    });
  });

  // Delete a user
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (result.affectedRows === 0) {
        return res.status(404).send('User not found.');
      }
      res.status(200).send('User deleted.');
    });
  });

  return router;
};

module.exports = userRoutes;
