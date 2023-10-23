const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');
const authorsController = require('../controllers/authorsControllers');
const seriesController = require('../controllers/seriesController');

router.get('/', async (req, res) => {
  res.json('home test node');
});

router.get('/api/books', booksController.getAllBooks);
router.get('/api/authors', authorsController.getAllAuthors);
router.get('/api/series', seriesController.getAllSeries);

module.exports = router;
