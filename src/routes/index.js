import express from 'express';
const router = express.Router();
import { getAllBooks } from '../controllers/booksController.js'
import { getAllAuthors } from '../controllers/authorsControllers.js';
import { getAllSeries } from '../controllers/seriesController.js';

router.get('/', async (req, res) => {
  res.json('home test node');
});

router.get('/api/books', getAllBooks);
router.get('/api/authors', getAllAuthors);
router.get('/api/series', getAllSeries);

export default router;
