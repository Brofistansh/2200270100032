const express = require('express');
const router = express.Router();
const Url = require('/models/Url');

router.get('/:code', async (req, res) => {
  const url = await Url.findOne({ shortCode: req.params.code });
  if (!url || new Date() > url.expiresAt) {
    return res.status(404).send('Link expired or not found');
  }
  res.redirect(url.longUrl);
});

module.exports = router;
