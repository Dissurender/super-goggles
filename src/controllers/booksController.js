import { prisma } from '../../db/index.js';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book[]}
 */
export const getAllBooks = async (req, res) => {
  const result = await prisma.book.findMany();
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book}
 */
export const getBookByISBN = async (req, res) => {
  const { isbn } = req.body;
  const result = await prisma.book.findMany({
    where: { isbn: String(isbn) },
  });
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book[]}
 */
export const getBooksByAuthor = async (req, res) => {
  const { author } = req.body;
  const result = await prisma.book.findMany({
    where: { isbn: Number(author) },
  });
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book[]}
 */
export const getBooksByGenre = async (req, res) => {
  const { genre } = req.body;
  const result = await prisma.book.findMany({
    where: { genre: Number(genre) },
  });
  res.json(result);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Book}
 */
export const createNewBook = async (req, res) => {
  const {
    isbn,
    title,
    authorId,
    pages,
    desc,
    rating,
    seriesNum,
    seriesId,
    availableOn,
  } = req.body;

  const result = await prisma.book.upsert({
    where: {
      isbn: isbn,
    },
    update: {
      title: title,
      authorId: authorId,
      pages: pages || null,
      desc: desc || '',
      rating: rating || 0.0,
      seriesNum: seriesNum || null,
      seriesId: seriesId,
      availableOn: availableOn,
    },
    create: {
      isbn: isbn,
      title: title,
      authorId: authorId,
      pages: pages || null,
      desc: desc || '',
      rating: rating || 0.0,
      seriesNum: seriesNum || null,
      seriesId: seriesId,
      availableOn: availableOn,
    },
  });
  res.json(result);
};
