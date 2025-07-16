const express = require('express');
const router = express.Router();
const Url = require('../models/url');
const shortid = require('shortid');e
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { longUrl, customCode, validity } = req.body;
  const shortCode = customCode || shortid.generate();
  const exists = await Url.findOne({ shortCode });
  if (exists) return res.status(409).json({ message: 'Custom code already used' });

  const expiresAt = new Date(Date.now() + (validity || 7) * 24 * 60 * 60 * 1000);

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, 'secret');

  const url = new Url({ longUrl, shortCode, expiresAt, createdBy: decoded.email });
  await url.save();
  res.json({ shortUrl: `http://localhost:3000/r/${shortCode}` });
});

module.exports = router;