const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  res.send("api Home node")
})

module.exports = router;