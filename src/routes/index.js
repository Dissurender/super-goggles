import express from 'express';
const router = express.Router();
import { getAllBooks, createNewBook } from '../controllers/booksController.js';
import {
  getAllAuthors,
  createNewAuthor,
} from '../controllers/authorsControllers.js';
import { getAllSeries } from '../controllers/seriesController.js';

router.get('/', async (req, res) => {
  res.sendFile('index.html');
});

router.get('/api/books', getAllBooks);
router.get('/api/authors', getAllAuthors);
router.get('/api/series', getAllSeries);

router.post('/api/books/new', createNewBook);
router.post('/api/authors/new', createNewAuthor);

export default router;
