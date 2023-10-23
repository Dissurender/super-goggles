const express = require('express');
const router = express.Router();
const apiRouter = require('./api.js');



router.get('/', (req, res) => {
  res.send('hello');
});

router.all('/api', apiRouter);

module.exports = router;
