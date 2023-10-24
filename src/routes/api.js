import express from 'express';
const router = express.Router();
import { getAllBooks } from '../controllers/booksController.js';
import { getAllAuthors } from '../controllers/authorsControllers.js';
import { getAllSeries } from '../controllers/seriesController.js';

router.get('/api/books', getAllBooks);
router.get('api/authors', getAllAuthors);
router.get('api/series', getAllSeries);

// TEMP FILE
