const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [];

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ email: user.email }, 'secret');
  res.json({ token });
});

module.exports = router;