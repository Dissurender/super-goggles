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
 */
export const getBooksByGenre = async (req, res) => {
  const { genre } = req.body;
  const result = await prisma.book.findMany({
    where: { genre: Number(genre) },
  });
  res.json(result);
};
